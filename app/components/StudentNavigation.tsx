import React from "react";
import { Link, useLocation } from "@remix-run/react";
import { 
  DocumentTextIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  SpeakerWaveIcon,
  PaperAirplaneIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

export function StudentNavigation() {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/student-dashboard', icon: HomeIcon },
    { name: 'Assignments', href: '/student/assignments', icon: DocumentTextIcon },
    { name: 'Records', href: '/student/records', icon: AcademicCapIcon },
    { name: 'Homework', href: '/student/homework', icon: BookOpenIcon },
    { name: 'Exams', href: '/student/exam-timetable', icon: CalendarDaysIcon },
    { name: 'Events', href: '/student/events', icon: UserGroupIcon },
    { name: 'Leaderboard', href: '/student/leaderboard', icon: ChartBarIcon },
    { name: 'Canteen', href: '/student/canteen', icon: ShoppingBagIcon },
    { name: 'Announcements', href: '/student/announcements', icon: SpeakerWaveIcon },
    { name: 'Leave Request', href: '/student/leave-request', icon: PaperAirplaneIcon },
  ];

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/student-dashboard" className="text-xl font-bold text-blue-600">
              Student Portal
            </Link>
            <div className="hidden lg:flex space-x-6 overflow-x-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      active 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation - you can expand this to show/hide based on state */}
        <div className="lg:hidden border-t border-gray-200">
          <div className="px-2 py-3 space-y-1 max-h-64 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
