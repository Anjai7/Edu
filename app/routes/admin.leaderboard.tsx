import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  ChartBarIcon,
  TrophyIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard - EduHub Admin" },
    { name: "description", content: "View student rankings based on points" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);

  // Try to get leaderboard from view first, fallback to manual calculation
  let { data: leaderboard, error } = await supabase
    .from('student_leaderboard')
    .select('*')
    .order('total_points', { ascending: false })
    .limit(50);

  // If view doesn't exist, calculate manually
  if (error || !leaderboard || leaderboard.length === 0) {
    const { data: submissions } = await supabase
      .from('submissions')
      .select(`
        student_id,
        points_earned,
        users!submissions_student_id_fkey (
          full_name,
          email,
          avatar_url
        )
      `)
      .not('points_earned', 'is', null);

    // Group by student and sum points
    const studentPoints = new Map();
    submissions?.forEach(submission => {
      const studentId = submission.student_id;
      const currentPoints = studentPoints.get(studentId) || {
        student_id: studentId,
        full_name: submission.users?.full_name || 'Unknown',
        email: submission.users?.email || '',
        avatar_url: submission.users?.avatar_url || null,
        total_points: 0
      };
      currentPoints.total_points += submission.points_earned || 0;
      studentPoints.set(studentId, currentPoints);
    });

    leaderboard = Array.from(studentPoints.values()).sort((a, b) => b.total_points - a.total_points);
  }

  return json({
    leaderboard: leaderboard || []
  });
}

export default function AdminLeaderboard() {
  const { leaderboard } = useLoaderData<typeof loader>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: false },
    { name: 'Assignments', href: '/admin/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Records', href: '/admin/records', icon: AcademicCapIcon, current: false },
    { name: 'Homework', href: '/admin/homework', icon: BookOpenIcon, current: false },
    { name: 'Exams', href: '/admin/exams', icon: DocumentTextIcon, current: false },
    { name: 'Events', href: '/admin/events', icon: CalendarDaysIcon, current: false },
    { name: 'Leaderboard', href: '/admin/leaderboard', icon: ChartBarIcon, current: true },
  ];

  const getRankColor = (position: number) => {
    if (position === 1) return 'text-yellow-600 bg-yellow-50';
    if (position === 2) return 'text-gray-600 bg-gray-50';
    if (position === 3) return 'text-orange-600 bg-orange-50';
    return 'text-blue-600 bg-blue-50';
  };

  const getRankIcon = (position: number) => {
    if (position <= 3) {
      return <TrophyIcon className={`h-5 w-5 ${position === 1 ? 'text-yellow-500' : position === 2 ? 'text-gray-500' : 'text-orange-500'}`} />;
    }
    return null;
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
                <p className="text-sm text-slate-300">Admin Portal</p>
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
                    <p className="text-sm text-slate-300">Admin Portal</p>
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
            <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Student Leaderboard</h1>
            <p className="text-gray-600 mt-2">Rankings based on points earned from assignments and activities</p>
          </div>

          {/* Top 3 Students */}
          {leaderboard.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {leaderboard.slice(0, 3).map((student, index) => (
                <div
                  key={student.student_id}
                  className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                    index === 0 ? 'ring-4 ring-yellow-400' : 
                    index === 1 ? 'ring-4 ring-gray-400' : 
                    'ring-4 ring-orange-400'
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 ${
                    index === 0 ? 'bg-yellow-400' : 
                    index === 1 ? 'bg-gray-400' : 
                    'bg-orange-400'
                  }`}></div>
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {getRankIcon(index + 1)}
                    </div>
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      {student.avatar_url ? (
                        <img
                          src={student.avatar_url}
                          alt={student.full_name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-xl font-bold text-gray-600">
                          {student.full_name?.charAt(0) || '?'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{student.full_name}</h3>
                    <p className="text-sm text-gray-500">{student.email}</p>
                    <div className={`mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRankColor(index + 1)}`}>
                      <span className="mr-1">#</span>
                      <span>{index + 1}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{student.total_points} pts</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full Leaderboard Table */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Full Rankings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Points
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leaderboard.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                        No student data available yet.
                      </td>
                    </tr>
                  ) : (
                    leaderboard.map((student, index) => {
                      const position = index + 1;
                      return (
                        <tr key={student.student_id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRankColor(position)}`}>
                                #{position}
                              </span>
                              {getRankIcon(position) && (
                                <div className="ml-2">
                                  {getRankIcon(position)}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                {student.avatar_url ? (
                                  <img
                                    src={student.avatar_url}
                                    alt={student.full_name}
                                    className="w-full h-full rounded-full object-cover"
                                  />
                                ) : (
                                  <span className="text-sm font-medium text-gray-600">
                                    {student.full_name?.charAt(0) || '?'}
                                  </span>
                                )}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{student.full_name}</div>
                                <div className="text-sm text-gray-500">{student.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{student.total_points}</div>
                            <div className="text-sm text-gray-500">points</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              student.total_points >= 90 ? 'bg-green-100 text-green-800' :
                              student.total_points >= 80 ? 'bg-blue-100 text-blue-800' :
                              student.total_points >= 70 ? 'bg-yellow-100 text-yellow-800' :
                              student.total_points >= 60 ? 'bg-orange-100 text-orange-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {student.total_points >= 90 ? 'A+' :
                               student.total_points >= 80 ? 'A' :
                               student.total_points >= 70 ? 'B' :
                               student.total_points >= 60 ? 'C' : 'D'}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
