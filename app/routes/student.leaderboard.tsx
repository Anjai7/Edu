import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import {
  TrophyIcon,
  ChartBarIcon,
  StarIcon,
  FireIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  DocumentTextIcon,
  BellIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard - EduHub Student" },
    { name: "description", content: "Track your progress and compete with classmates" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  
  // For demo purposes, we'll use student ID 1
  const currentStudentId = 1;

  // Get leaderboard data with user information
  const { data: leaderboardData } = await supabase
    .from('leaderboard')
    .select(`
      *,
      users!inner(id, name, email)
    `)
    .order('points', { ascending: false })
    .limit(50);

  // Get current student's rank and progress
  const currentStudent = leaderboardData?.find(entry => entry.student_id === currentStudentId);
  const currentRank = leaderboardData?.findIndex(entry => entry.student_id === currentStudentId) + 1 || 0;

  // Get course-wise progress for current student
  const { data: courseProgress } = await supabase
    .from('submissions')
    .select(`
      course_id,
      courses(name),
      assignment_id,
      assignments(title, points),
      points_earned
    `)
    .eq('student_id', currentStudentId)
    .order('submitted_at', { ascending: false });

  // Calculate course-wise statistics
  const courseStats: Record<string, any> = {};
  courseProgress?.forEach(submission => {
    const courseId = submission.course_id;
    const courseName = submission.courses?.name || `Course ${courseId}`;
    
    if (!courseStats[courseId]) {
      courseStats[courseId] = {
        name: courseName,
        totalPoints: 0,
        earnedPoints: 0,
        assignments: 0
      };
    }
    
    courseStats[courseId].totalPoints += submission.assignments?.points || 0;
    courseStats[courseId].earnedPoints += submission.points_earned || 0;
    courseStats[courseId].assignments += 1;
  });

  // Get recent achievements (top submissions in last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const { data: recentAchievements } = await supabase
    .from('submissions')
    .select(`
      *,
      assignments(title, points),
      courses(name)
    `)
    .eq('student_id', currentStudentId)
    .gte('submitted_at', thirtyDaysAgo.toISOString())
    .gte('points_earned', 8) // High scoring submissions
    .order('points_earned', { ascending: false })
    .limit(5);

  // Calculate progress metrics
  const totalPossiblePoints = Object.values(courseStats).reduce((sum: number, course: any) => sum + course.totalPoints, 0);
  const totalEarnedPoints = Object.values(courseStats).reduce((sum: number, course: any) => sum + course.earnedPoints, 0);
  const overallProgress = totalPossiblePoints > 0 ? Math.round((totalEarnedPoints / totalPossiblePoints) * 100) : 0;

  return json({
    leaderboardData: leaderboardData || [],
    currentStudent,
    currentRank,
    courseStats,
    recentAchievements: recentAchievements || [],
    totalEarnedPoints,
    overallProgress,
    currentStudentId
  });
}

export default function StudentLeaderboard() {
  const { 
    leaderboardData, 
    currentStudent, 
    currentRank, 
    courseStats,
    recentAchievements,
    totalEarnedPoints,
    overallProgress,
    currentStudentId
  } = useLoaderData<typeof loader>();
  
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overall');

  const handleLogout = async () => {
    try {
      // Clear any local storage or session data
      localStorage.removeItem('student_session');
      sessionStorage.clear();
      
      // Navigate to login page
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
      // Force navigation even if there's an error
      navigate('/', { replace: true });
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/student/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Attendance', href: '/student/attendance', icon: CalendarDaysIcon, current: false },
    { name: 'Grades', href: '/student/grades', icon: ChartBarIcon, current: false },
    { name: 'Leaderboard', href: '/student/leaderboard', icon: TrophyIcon, current: true },
    { name: 'Announcements', href: '/student/announcements', icon: BellIcon, current: false },
    { name: 'Profile', href: '/student/profile', icon: CogIcon, current: false },
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return { icon: TrophyIcon, color: 'text-yellow-500', bg: 'bg-yellow-50' };
    if (rank === 2) return { icon: TrophyIcon, color: 'text-gray-400', bg: 'bg-gray-50' };
    if (rank === 3) return { icon: TrophyIcon, color: 'text-orange-500', bg: 'bg-orange-50' };
    return { icon: StarIcon, color: 'text-blue-500', bg: 'bg-blue-50' };
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStreakLevel = (points: number) => {
    if (points >= 1000) return { level: 'Expert', color: 'text-purple-600', fires: 5 };
    if (points >= 500) return { level: 'Advanced', color: 'text-blue-600', fires: 4 };
    if (points >= 250) return { level: 'Intermediate', color: 'text-green-600', fires: 3 };
    if (points >= 100) return { level: 'Beginner', color: 'text-yellow-600', fires: 2 };
    return { level: 'Starter', color: 'text-gray-600', fires: 1 };
  };

  const currentStudentStreak = getStreakLevel(currentStudent?.points || 0);

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
            <h1 className="text-lg font-semibold text-gray-900">Leaderboard</h1>
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
            <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">🏆 Progress Leaderboard</h1>
            <p className="text-gray-600 mt-2">Track your progress and compete with your classmates</p>
          </div>

          {/* Your Progress Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">🌟 Your Progress</h2>
                <p className="text-blue-100">Keep up the great work!</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{totalEarnedPoints}</div>
                <div className="text-blue-100">Total Points</div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center">
                  <TrophyIcon className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">#{currentRank || 'N/A'}</div>
                    <div className="text-sm text-blue-100">Current Rank</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center">
                  <ChartBarIcon className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{overallProgress}%</div>
                    <div className="text-sm text-blue-100">Overall Progress</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center">
                  <FireIcon className="h-8 w-8 mr-3" />
                  <div>
                    <div className="text-lg font-bold">{currentStudentStreak.level}</div>
                    <div className="text-sm text-blue-100">Achievement Level</div>
                    <div className="flex mt-1">
                      {[...Array(currentStudentStreak.fires)].map((_, i) => (
                        <FireIcon key={i} className="h-4 w-4 text-orange-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-6">
            <div className="flex space-x-4 border-b">
              <button
                onClick={() => setActiveTab('overall')}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overall'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🏆 Overall Leaderboard
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'courses'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                📚 Course Progress
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'achievements'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                🌟 Recent Achievements
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overall' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🥇 Class Rankings</h3>
                <p className="text-sm text-gray-500">Based on total points earned from assignments and activities</p>
              </div>
              <div className="divide-y divide-gray-200">
                {leaderboardData.slice(0, 20).map((student, index) => {
                  const rank = index + 1;
                  const isCurrentStudent = student.student_id === currentStudentId;
                  const badge = getRankBadge(rank);
                  const IconComponent = badge.icon;
                  
                  return (
                    <div
                      key={student.id}
                      className={`px-6 py-4 flex items-center justify-between ${
                        isCurrentStudent ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${badge.bg} mr-4`}>
                          <IconComponent className={`h-6 w-6 ${badge.color}`} />
                        </div>
                        <div>
                          <p className={`text-sm font-medium ${
                            isCurrentStudent ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {student.users?.name || 'Unknown Student'}
                            {isCurrentStudent && <span className="ml-2 text-blue-600">👤 (You)</span>}
                          </p>
                          <p className="text-sm text-gray-500">Rank #{rank}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">{student.points}</p>
                        <p className="text-sm text-gray-500">points</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(courseStats).map(([courseId, stats]: [string, any]) => {
                const progressPercentage = stats.totalPoints > 0 ? Math.round((stats.earnedPoints / stats.totalPoints) * 100) : 0;
                
                return (
                  <div key={courseId} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">📖 {stats.name}</h3>
                      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{progressPercentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(progressPercentage)}`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Points Earned</span>
                          <p className="font-semibold">{stats.earnedPoints}/{stats.totalPoints}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Assignments</span>
                          <p className="font-semibold">{stats.assignments}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">⭐ Recent High Scores</h3>
                <p className="text-sm text-gray-500">Your best performances in the last 30 days</p>
              </div>
              <div className="divide-y divide-gray-200">
                {recentAchievements.length > 0 ? (
                  recentAchievements.map((achievement) => (
                    <div key={achievement.id} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 mr-4">
                          <StarIconSolid className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            🎯 {achievement.assignments?.title || 'Assignment'}
                          </p>
                          <p className="text-sm text-gray-500">
                            {achievement.courses?.name || 'Course'} • {new Date(achievement.submitted_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-yellow-600">
                          {achievement.points_earned}/{achievement.assignments?.points || 10}
                        </p>
                        <p className="text-sm text-gray-500">points</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-12 text-center">
                    <StarIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No recent achievements</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Complete assignments with high scores to see them here! 🚀
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
