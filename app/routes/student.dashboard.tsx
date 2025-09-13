import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import {
  AcademicCapIcon,
  BellIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
  ShoppingBagIcon,
  SpeakerWaveIcon,
  TrophyIcon,
  UserGroupIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Student Dashboard - EduHub" },
    { name: "description", content: "Your learning dashboard" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  return json({});
}

export default function StudentDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Dashboard", href: "/student/dashboard", icon: HomeIcon, current: true },
    { name: "Assignments", href: "/student/assignments", icon: DocumentTextIcon, current: false },
    { name: "Attendance", href: "/student/attendance", icon: CalendarDaysIcon, current: false },
    { name: "Notes", href: "/student/notes", icon: BookOpenIcon, current: false },
    { name: "Announcements", href: "/student/announcements", icon: BellIcon, current: false },
    { name: "Leaderboard", href: "/leaderboard", icon: TrophyIcon, current: false },
    { name: "Canteen", href: "/student/canteen", icon: ShoppingBagIcon, current: false },
    { name: "Leave Requests", href: "/student/leave-request", icon: PaperAirplaneIcon, current: false },
    { name: "Profile", href: "/student/profile", icon: AcademicCapIcon, current: false },
    { name: "Settings", href: "/student/settings", icon: CogIcon, current: false },
  ];

  const dashboardItems = [
    {
      title: "Assignments",
      description: "View and submit your assignments",
      icon: DocumentTextIcon,
      href: "/student/assignments",
      stats: "3 pending",
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "Attendance",
      description: "Track your attendance record",
      icon: CalendarDaysIcon,
      href: "/student/attendance",
      stats: "92% this month",
      color: "from-green-600 to-green-700",
    },
    {
      title: "Academic Performance",
      description: "View your grades and progress",
      icon: ChartBarIcon,
      href: "/student/performance",
      stats: "85% average",
      color: "from-purple-600 to-purple-700",
    },
    {
      title: "Notes",
      description: "Access study materials and notes",
      icon: BookOpenIcon,
      href: "/student/notes",
      stats: "12 subjects",
      color: "from-indigo-600 to-indigo-700",
    },
    {
      title: "Leaderboard",
      description: "See your class rankings",
      icon: TrophyIcon,
      href: "/student/leaderboard",
      stats: "Rank #5",
      color: "from-yellow-600 to-yellow-700",
    },
    {
      title: "Study Groups",
      description: "Join or create study groups",
      icon: UserGroupIcon,
      href: "/student/study-groups",
      stats: "3 active groups",
      color: "from-pink-600 to-pink-700",
    },
    {
      title: "Canteen",
      description: "Order food from canteen",
      icon: ShoppingBagIcon,
      href: "/student/canteen",
      stats: "25 items",
      color: "from-slate-600 to-slate-700",
    },
    {
      title: "Announcements",
      description: "Important notifications",
      icon: SpeakerWaveIcon,
      href: "/student/announcements",
      stats: "3 new",
      color: "from-slate-600 to-slate-700",
    },
  ];

  const mockTasks = [
    { id: 1, title: "Math Assignment #3", dueDate: "2024-01-20", status: "pending" },
    { id: 2, title: "Physics Lab Report", dueDate: "2024-01-18", status: "in-progress" },
    { id: 3, title: "English Essay", dueDate: "2024-01-15", status: "completed" },
  ];

  const mockAnnouncements = [
    { id: 1, title: "Semester Exam Schedule Released", date: "2024-01-15", type: "academic" },
    { id: 2, title: "Annual Science Fair", date: "2024-01-14", type: "event" },
    { id: 3, title: "Library Hours Extended", date: "2024-01-13", type: "general" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <ExclamationCircleIcon className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Pending";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Right Sidebar Navigation - Desktop */}
      <div className="fixed right-0 top-0 h-full w-72 bg-blue-900 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-blue-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">EduHub</h2>
                <p className="text-sm text-blue-200">Student Portal</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden text-blue-200 hover:text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      item.current
                        ? 'bg-blue-800 text-white shadow-lg'
                        : 'text-blue-200 hover:bg-blue-800 hover:text-white hover:shadow-md'
                    }`}
                  >
                    <IconComponent className={`h-5 w-5 mr-3 ${item.current ? 'text-blue-300' : 'text-blue-400 group-hover:text-blue-300'}`} />
                    <span>{item.name}</span>
                    {item.current && (
                      <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* User Profile Section */}
          <div className="p-4 border-t border-blue-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">S</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Student User</p>
                <p className="text-xs text-blue-300 truncate">student@eduhub.com</p>
              </div>
            </div>
            <button className="w-full mt-3 px-3 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800 rounded-md transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative ml-auto h-full w-72 bg-blue-900 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">EduHub</h2>
                    <p className="text-sm text-blue-200">Student Portal</p>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-blue-200 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                          item.current
                            ? 'bg-blue-800 text-white shadow-lg'
                            : 'text-blue-200 hover:bg-blue-800 hover:text-white hover:shadow-md'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <IconComponent className={`h-5 w-5 mr-3 ${item.current ? 'text-blue-300' : 'text-blue-400 group-hover:text-blue-300'}`} />
                        <span>{item.name}</span>
                        {item.current && (
                          <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* User Profile Section */}
              <div className="p-4 border-t border-blue-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">S</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">Student User</p>
                    <p className="text-xs text-blue-300 truncate">student@eduhub.com</p>
                  </div>
                </div>
                <button className="w-full mt-3 px-3 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800 rounded-md transition-colors">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="flex-1 lg:mr-72">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500 lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                  <Bars3Icon className="h-6 w-6" />
                </button>
                <div className="hidden lg:flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">S</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Student User</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-gray-600">
              Your academic journey starts here. Manage assignments, track progress, and stay connected.
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {dashboardItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-slate-200 active:scale-95"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <div className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} mb-3 sm:mb-4 lg:mb-6 shadow-lg`}>
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {item.stats}
                      </span>
                      <div className="flex items-center text-blue-900 group-hover:text-blue-600 transition-colors">
                        <span className="text-sm font-medium mr-2">Open</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 sm:mt-10 lg:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 lg:mb-8 text-center">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <Link
                to="/student/leave-request"
                className="group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg sm:rounded-xl text-white hover:from-blue-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
              >
                <PaperAirplaneIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg">Request Leave</span>
                <span className="text-blue-100 text-xs sm:text-sm mt-1 sm:mt-2 text-center">Submit application</span>
              </Link>
              <Link
                to="/student/assignments"
                className="group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg sm:rounded-xl text-white hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
              >
                <DocumentTextIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg">View Assignments</span>
                <span className="text-slate-200 text-xs sm:text-sm mt-1 sm:mt-2 text-center">Check pending tasks</span>
              </Link>
              <Link
                to="/student/announcements"
                className="group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg sm:rounded-xl text-white hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
              >
                <SpeakerWaveIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm sm:text-base lg:text-lg">Announcements</span>
                <span className="text-slate-200 text-xs sm:text-sm mt-1 sm:mt-2 text-center">Latest updates</span>
              </Link>
            </div>
          </div>

          {/* Recent Tasks and Announcements */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Recent Tasks */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Recent Tasks</h3>
                <Link to="/student/assignments" className="text-blue-900 hover:text-blue-600 font-medium text-xs sm:text-sm">
                  View All →
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {mockTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      {getStatusIcon(task.status)}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-slate-800 text-sm sm:text-base truncate">{task.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${
                        task.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : task.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {getStatusText(task.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Announcements */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Recent Announcements</h3>
                <Link to="/student/announcements" className="text-blue-900 hover:text-blue-600 font-medium text-xs sm:text-sm">
                  View All →
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {mockAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <SpeakerWaveIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-900 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-slate-800 text-sm sm:text-base truncate">{announcement.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-500">{new Date(announcement.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${
                        announcement.type === "academic"
                          ? "bg-blue-100 text-blue-700"
                          : announcement.type === "event"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {announcement.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer for mobile navigation */}
          <div className="h-20 lg:hidden"></div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40">
        <div className="grid grid-cols-5 gap-1">
          {navigationItems.slice(0, 5).map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex flex-col items-center py-2 px-1 text-xs font-medium transition-colors ${
                  item.current
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <IconComponent className="h-5 w-5 mb-1" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
