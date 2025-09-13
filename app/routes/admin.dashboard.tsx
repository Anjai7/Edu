import React from "react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  HomeIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Dashboard - EduHub" },
    { name: "description", content: "Admin dashboard for EduHub platform" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request);

  const [
    { data: totalStudents },
    { data: totalAssignments },
    { data: pendingSubmissions },
    { data: todayAttendance }
  ] = await Promise.all([
    supabase.from('users').select('id').eq('role', 'student'),
    supabase.from('assignments').select('id'),
    supabase.from('submissions').select('id').eq('status', 'pending'),
    supabase.from('attendance').select('id').eq('date', new Date().toISOString().split('T')[0])
  ]);

  return json({
    totalStudents: totalStudents?.length || 0,
    totalAssignments: totalAssignments?.length || 0,
    pendingSubmissions: pendingSubmissions?.length || 0,
    todayAttendance: todayAttendance?.length || 0
  });
}

export default function AdminDashboard() {
  const data = useLoaderData<typeof loader>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: true },
    { name: 'Assignments', href: '/admin/assignments', icon: DocumentTextIcon, current: false },
    { name: 'Records', href: '/admin/records', icon: AcademicCapIcon, current: false },
    { name: 'Homework', href: '/admin/homework', icon: BookOpenIcon, current: false },
    { name: 'Exams', href: '/admin/exams', icon: DocumentTextIcon, current: false },
    { name: 'Events', href: '/admin/events', icon: CalendarDaysIcon, current: false },
    { name: 'Leaderboard', href: '/admin/leaderboard', icon: ChartBarIcon, current: false },
  ];

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
            <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
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
            <h1 className="text-3xl font-bold text-gray-900 hidden lg:block">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your educational platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-blue-600">{data.totalStudents}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">Total Assignments</p>
                  <p className="text-2xl font-bold text-green-600">{data.totalAssignments}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">Pending Submissions</p>
                  <p className="text-2xl font-bold text-yellow-600">{data.pendingSubmissions}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">Today's Attendance</p>
                  <p className="text-2xl font-bold text-purple-600">{data.todayAttendance}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/admin/assignments" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Manage Assignments</h3>
                  <p className="text-gray-600 text-sm">Create and manage student assignments</p>
                </div>
              </div>
            </Link>

            <Link to="/admin/records" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <AcademicCapIcon className="h-8 w-8 text-green-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Student Records</h3>
                  <p className="text-gray-600 text-sm">View and manage student records</p>
                </div>
              </div>
            </Link>

            <Link to="/admin/homework" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <BookOpenIcon className="h-8 w-8 text-orange-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Homework</h3>
                  <p className="text-gray-600 text-sm">Assign and track homework</p>
                </div>
              </div>
            </Link>

            <Link to="/admin/exams" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <DocumentTextIcon className="h-8 w-8 text-red-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Exams</h3>
                  <p className="text-gray-600 text-sm">Schedule and manage exams</p>
                </div>
              </div>
            </Link>

            <Link to="/admin/events" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <CalendarDaysIcon className="h-8 w-8 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Events</h3>
                  <p className="text-gray-600 text-sm">Schedule and manage events</p>
                </div>
              </div>
            </Link>

            <Link to="/admin/leaderboard" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <ChartBarIcon className="h-8 w-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Leaderboard</h3>
                  <p className="text-gray-600 text-sm">View student rankings</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
