import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  ChartBarIcon,
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  UserGroupIcon,
  BookOpenIcon,
  DocumentTextIcon,
  TrophyIcon,
  BellIcon,
  CogIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Attendance - EduHub Student" },
    { name: "description", content: "View your attendance records and statistics" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);
  
  // For demo purposes, we'll use student ID 1
  const studentId = 1;

  // Get attendance records for the current student
  const { data: attendanceRecords } = await supabase
    .from('attendance')
    .select('*')
    .eq('student_id', studentId)
    .order('date', { ascending: false })
    .limit(100);

  // Get course names for better display
  const { data: courses } = await supabase
    .from('courses')
    .select('*');

  // Calculate monthly attendance statistics
  const monthlyStats = {};
  const dailyStats = {};
  const courseStats = {};

  attendanceRecords?.forEach(record => {
    const date = new Date(record.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const dayKey = record.date;
    const courseKey = record.course_id;

    // Monthly stats
    if (!monthlyStats[monthKey]) {
      monthlyStats[monthKey] = { present: 0, absent: 0, total: 0 };
    }
    monthlyStats[monthKey].total++;
    if (record.status === 'present') {
      monthlyStats[monthKey].present++;
    } else {
      monthlyStats[monthKey].absent++;
    }

    // Daily stats (last 30 days)
    if (!dailyStats[dayKey]) {
      dailyStats[dayKey] = { present: 0, absent: 0, total: 0 };
    }
    dailyStats[dayKey].total++;
    if (record.status === 'present') {
      dailyStats[dayKey].present++;
    } else {
      dailyStats[dayKey].absent++;
    }

    // Course stats
    if (!courseStats[courseKey]) {
      courseStats[courseKey] = { present: 0, absent: 0, total: 0 };
    }
    courseStats[courseKey].total++;
    if (record.status === 'present') {
      courseStats[courseKey].present++;
    } else {
      courseStats[courseKey].absent++;
    }
  });

  // Get last 7 days for daily chart
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    last7Days.push({
      date: dateKey,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      ...dailyStats[dateKey] || { present: 0, absent: 0, total: 0 }
    });
  }

  // Get last 6 months for monthly chart
  const last6Months = [];
  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    last6Months.push({
      month: monthKey,
      monthName,
      ...monthlyStats[monthKey] || { present: 0, absent: 0, total: 0 }
    });
  }

  // Calculate overall stats
  const totalRecords = attendanceRecords?.length || 0;
  const presentCount = attendanceRecords?.filter(r => r.status === 'present').length || 0;
  const attendancePercentage = totalRecords > 0 ? Math.round((presentCount / totalRecords) * 100) : 0;

  return json({
    attendanceRecords: attendanceRecords || [],
    courses: courses || [],
    last7Days,
    last6Months,
    courseStats,
    totalRecords,
    presentCount,
    attendancePercentage
  });
}

export default function StudentAttendance() {
  const { 
    attendanceRecords, 
    courses, 
    last7Days, 
    last6Months, 
    courseStats, 
    totalRecords, 
    presentCount, 
    attendancePercentage 
  } = useLoaderData<typeof loader>();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeChart, setActiveChart] = useState('daily');

  const navigation = [
    { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/student/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Attendance', href: '/student/attendance', icon: CalendarDaysIcon, current: true },
    { name: 'Grades', href: '/student/grades', icon: ChartBarIcon, current: false },
    { name: 'Leaderboard', href: '/leaderboard', icon: TrophyIcon, current: false },
    { name: 'Announcements', href: '/student/announcements', icon: BellIcon, current: false },
    { name: 'Profile', href: '/student/profile', icon: CogIcon, current: false },
  ];

  const getMaxValue = (data: any[], key: string) => {
    return Math.max(...data.map(item => item[key]), 0);
  };

  const BarChart = ({ data, type }: { data: any[], type: 'daily' | 'monthly' }) => {
    const maxValue = Math.max(getMaxValue(data, 'present'), getMaxValue(data, 'absent'));
    const chartHeight = 200;

    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          {type === 'daily' ? 'Last 7 Days' : 'Last 6 Months'} Attendance
        </h3>
        <div className="relative" style={{ height: chartHeight + 60 }}>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>{maxValue}</span>
            <span>{Math.round(maxValue * 0.75)}</span>
            <span>{Math.round(maxValue * 0.5)}</span>
            <span>{Math.round(maxValue * 0.25)}</span>
            <span>0</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-8 flex items-end justify-between h-full" style={{ height: chartHeight }}>
            {data.map((item, index) => {
              const presentHeight = maxValue > 0 ? (item.present / maxValue) * chartHeight : 0;
              const absentHeight = maxValue > 0 ? (item.absent / maxValue) * chartHeight : 0;
              
              return (
                <div key={index} className="flex flex-col items-center flex-1 mx-1">
                  <div className="flex flex-col items-center justify-end" style={{ height: chartHeight }}>
                    {/* Absent bar (red) */}
                    {item.absent > 0 && (
                      <div
                        className="bg-red-400 w-full max-w-12 rounded-t-sm"
                        style={{ height: `${absentHeight}px` }}
                        title={`Absent: ${item.absent}`}
                      />
                    )}
                    {/* Present bar (green) */}
                    {item.present > 0 && (
                      <div
                        className={`bg-green-400 w-full max-w-12 ${item.absent === 0 ? 'rounded-t-sm' : ''}`}
                        style={{ height: `${presentHeight}px` }}
                        title={`Present: ${item.present}`}
                      />
                    )}
                  </div>
                  {/* X-axis label */}
                  <span className="text-xs text-gray-600 mt-2 transform -rotate-45 origin-center">
                    {type === 'daily' ? item.dayName : item.monthName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Absent</span>
          </div>
        </div>
      </div>
    );
  };

  const CourseAttendanceChart = () => {
    const courseData = Object.entries(courseStats).map(([courseId, stats]) => {
      const course = courses.find(c => c.id === parseInt(courseId));
      const percentage = stats.total > 0 ? Math.round((stats.present / stats.total) * 100) : 0;
      return {
        courseName: course?.name || `Course ${courseId}`,
        percentage,
        present: stats.present,
        total: stats.total
      };
    });

    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Attendance by Course</h3>
        <div className="space-y-4">
          {courseData.map((course, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">{course.courseName}</span>
                <span className="text-sm text-gray-500">{course.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    course.percentage >= 90 ? 'bg-green-500' :
                    course.percentage >= 75 ? 'bg-blue-500' :
                    course.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${course.percentage}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {course.present}/{course.total} classes attended
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
            <h1 className="text-lg font-semibold text-gray-900">Attendance</h1>
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
            <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Attendance Dashboard</h1>
            <p className="text-gray-600 mt-2">Track your attendance records and statistics</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <CalendarDaysIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Classes</p>
                  <p className="text-2xl font-bold text-gray-900">{totalRecords}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <UserGroupIcon className="h-8 w-8 text-green-600 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Present</p>
                  <p className="text-2xl font-bold text-gray-900">{presentCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <ChartBarIcon className="h-8 w-8 text-purple-600 mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                  <p className={`text-2xl font-bold ${
                    attendancePercentage >= 90 ? 'text-green-600' :
                    attendancePercentage >= 75 ? 'text-blue-600' :
                    attendancePercentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {attendancePercentage}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Toggle */}
          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveChart('daily')}
                className={`px-4 py-2 rounded-lg ${
                  activeChart === 'daily'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Daily View
              </button>
              <button
                onClick={() => setActiveChart('monthly')}
                className={`px-4 py-2 rounded-lg ${
                  activeChart === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Monthly View
              </button>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {activeChart === 'daily' ? (
              <BarChart data={last7Days} type="daily" />
            ) : (
              <BarChart data={last6Months} type="monthly" />
            )}
            
            <CourseAttendanceChart />
          </div>

          {/* Recent Attendance Records */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Attendance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceRecords.slice(0, 10).map((record) => {
                    const course = courses.find(c => c.id === record.course_id);
                    return (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(record.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {course?.name || 'Unknown Course'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status === 'present'
                              ? 'bg-green-100 text-green-800'
                              : record.status === 'absent'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.remarks || '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
