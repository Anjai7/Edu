import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import {
  ChartBarIcon,
  TrophyIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  DocumentTextIcon,
  BellIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  StarIcon,
  ChartPieIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Academic Performance - EduHub Student" },
    { name: "description", content: "Track your academic performance and progress" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  
  // For demo purposes, we'll use student ID 1
  const currentStudentId = 1;

  // Get all submissions for performance analysis
  const { data: submissions } = await supabase
    .from('submissions')
    .select(`
      *,
      assignments(title, points, course_id, due_date),
      courses(name)
    `)
    .eq('student_id', currentStudentId)
    .order('submitted_at', { ascending: false });

  // Get course information
  const { data: courses } = await supabase
    .from('courses')
    .select('*');

  // Calculate performance metrics
  const performanceData = {};
  const monthlyPerformance = {};
  let totalPoints = 0;
  let totalEarned = 0;

  submissions?.forEach(submission => {
    const courseId = submission.assignments?.course_id;
    const courseName = submission.courses?.name || `Course ${courseId}`;
    const submissionDate = new Date(submission.submitted_at);
    const monthKey = `${submissionDate.getFullYear()}-${String(submissionDate.getMonth() + 1).padStart(2, '0')}`;

    // Course-wise performance
    if (!performanceData[courseId]) {
      performanceData[courseId] = {
        courseName,
        totalAssignments: 0,
        completedAssignments: 0,
        totalPoints: 0,
        earnedPoints: 0,
        averageScore: 0,
        grades: []
      };
    }

    performanceData[courseId].totalAssignments++;
    performanceData[courseId].completedAssignments++;
    performanceData[courseId].totalPoints += submission.assignments?.points || 0;
    performanceData[courseId].earnedPoints += submission.points_earned || 0;
    performanceData[courseId].grades.push({
      title: submission.assignments?.title,
      score: submission.points_earned,
      maxScore: submission.assignments?.points,
      date: submission.submitted_at,
      percentage: submission.assignments?.points ? Math.round((submission.points_earned / submission.assignments.points) * 100) : 0
    });

    // Monthly performance
    if (!monthlyPerformance[monthKey]) {
      monthlyPerformance[monthKey] = {
        month: monthKey,
        totalPoints: 0,
        earnedPoints: 0,
        assignments: 0
      };
    }
    monthlyPerformance[monthKey].totalPoints += submission.assignments?.points || 0;
    monthlyPerformance[monthKey].earnedPoints += submission.points_earned || 0;
    monthlyPerformance[monthKey].assignments++;

    totalPoints += submission.assignments?.points || 0;
    totalEarned += submission.points_earned || 0;
  });

  // Calculate averages
  Object.keys(performanceData).forEach(courseId => {
    const course = performanceData[courseId];
    course.averageScore = course.totalPoints > 0 ? Math.round((course.earnedPoints / course.totalPoints) * 100) : 0;
  });

  // Get last 6 months performance
  const last6Months = [];
  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const monthData = monthlyPerformance[monthKey] || { totalPoints: 0, earnedPoints: 0, assignments: 0 };
    last6Months.push({
      month: monthKey,
      monthName,
      percentage: monthData.totalPoints > 0 ? Math.round((monthData.earnedPoints / monthData.totalPoints) * 100) : 0,
      ...monthData
    });
  }

  const overallPercentage = totalPoints > 0 ? Math.round((totalEarned / totalPoints) * 100) : 0;

  return json({
    performanceData,
    last6Months,
    overallPercentage,
    totalPoints,
    totalEarned,
    totalAssignments: submissions?.length || 0,
    courses: courses || []
  });
}

export default function StudentAcademicPerformance() {
  const { 
    performanceData, 
    last6Months, 
    overallPercentage, 
    totalPoints, 
    totalEarned, 
    totalAssignments,
    courses
  } = useLoaderData<typeof loader>();
  
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('all');

  const handleLogout = async () => {
    try {
      localStorage.removeItem('student_session');
      sessionStorage.clear();
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
      navigate('/', { replace: true });
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/student/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Attendance', href: '/student/attendance', icon: CalendarDaysIcon, current: false },
    { name: 'Performance', href: '/student/academic-performance', icon: ChartBarIcon, current: true },
    { name: 'Leaderboard', href: '/student/leaderboard', icon: TrophyIcon, current: false },
    { name: 'Notes', href: '/student/notes', icon: BookOpenIcon, current: false },
    { name: 'Announcements', href: '/student/announcements', icon: BellIcon, current: false },
    { name: 'Profile', href: '/student/profile', icon: CogIcon, current: false },
  ];

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-50';
    if (percentage >= 80) return 'text-blue-600 bg-blue-50';
    if (percentage >= 70) return 'text-yellow-600 bg-yellow-50';
    if (percentage >= 60) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Excellent', emoji: '🌟' };
    if (percentage >= 80) return { level: 'Good', emoji: '👍' };
    if (percentage >= 70) return { level: 'Average', emoji: '👌' };
    if (percentage >= 60) return { level: 'Below Average', emoji: '📈' };
    return { level: 'Needs Improvement', emoji: '📚' };
  };

  const performanceLevel = getPerformanceLevel(overallPercentage);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Right Navigation Bar */}
      <div className="fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">EduHub</h2>
                <p className="text-sm text-slate-300">Student Portal</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden text-slate-300 hover:text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      item.current
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4"
              >
                <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative ml-auto h-full w-72 bg-slate-800 shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">EduHub</h2>
                    <p className="text-sm text-slate-300">Student Portal</p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <nav className="space-y-2">
                  {navigation.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                          item.current
                            ? 'bg-slate-700 text-white'
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <IconComponent className="mr-3 h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                  
                  {/* Mobile Logout Button */}
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4"
                  >
                    <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:mr-72">
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Academic Performance</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">📊 Academic Performance</h1>
            <p className="text-gray-600 mt-2">Track your academic progress and performance metrics</p>
          </div>

          {/* Performance Overview */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-6 text-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{performanceLevel.emoji} Overall Performance</h2>
                <p className="text-purple-100">Current Academic Standing</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">{overallPercentage}%</div>
                <div className="text-purple-100">{performanceLevel.level}</div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{totalAssignments}</div>
                    <div className="text-sm text-purple-100">Total Assignments</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center">
                  <StarIcon className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{totalEarned}</div>
                    <div className="text-sm text-purple-100">Points Earned</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center">
                  <ChartPieIcon className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{totalPoints}</div>
                    <div className="text-sm text-purple-100">Total Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Performance Chart */}
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">📈 Monthly Performance Trend</h3>
              <p className="text-sm text-gray-500">Your performance over the last 6 months</p>
            </div>
            <div className="p-6">
              <div className="flex items-end justify-between h-64">
                {last6Months.map((month, index) => {
                  const height = month.percentage > 0 ? Math.max((month.percentage / 100) * 200, 20) : 20;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1 mx-2">
                      <div
                        className={`w-full max-w-12 rounded-t-lg ${
                          month.percentage >= 80 ? 'bg-green-500' :
                          month.percentage >= 60 ? 'bg-blue-500' :
                          month.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ height: `${height}px` }}
                        title={`${month.monthName}: ${month.percentage}%`}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2 transform -rotate-45 origin-center">
                        {month.monthName}
                      </span>
                      <span className="text-xs font-semibold text-gray-700 mt-1">
                        {month.percentage}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Course Performance */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">📚 Course Performance</h3>
              <p className="text-sm text-gray-500">Detailed performance breakdown by course</p>
            </div>
            <div className="divide-y divide-gray-200">
              {Object.values(performanceData).map((course: any, index) => (
                <div key={index} className="px-6 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{course.courseName}</h4>
                        <p className="text-sm text-gray-500">{course.completedAssignments} assignments completed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(course.averageScore)}`}>
                        {course.averageScore}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className={`h-2 rounded-full ${
                        course.averageScore >= 80 ? 'bg-green-500' :
                        course.averageScore >= 60 ? 'bg-blue-500' :
                        course.averageScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${course.averageScore}%` }}
                    ></div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Points Earned</span>
                      <p className="font-semibold">{course.earnedPoints}/{course.totalPoints}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Assignments</span>
                      <p className="font-semibold">{course.completedAssignments}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Average Score</span>
                      <p className="font-semibold">{course.averageScore}%</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Performance</span>
                      <p className="font-semibold">{getPerformanceLevel(course.averageScore).level}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
