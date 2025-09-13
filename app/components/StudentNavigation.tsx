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
    { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon },
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
    <nav className="bg-gradient-to-r from-blue-900 to-slate-800 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <Link to="/student/dashboard" className="text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-blue-200 transition-colors">
              Student Portal
            </Link>
            <div className="hidden md:flex space-x-1 lg:space-x-2 overflow-x-auto scrollbar-hide">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      active 
                        ? 'bg-white bg-opacity-20 text-white shadow-lg' 
                        : 'text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10'
                    }`}
                  >
                    <Icon className="h-3 w-3 lg:h-4 lg:w-4" />
                    <span className="hidden lg:inline">{item.name}</span>
                    <span className="lg:hidden">{item.name.slice(0, 8)}{item.name.length > 8 ? '...' : ''}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-lg text-white hover:text-blue-200 hover:bg-white hover:bg-opacity-10 transition-all">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation - you can expand this to show/hide based on state */}
        <div className="lg:hidden border-t border-white border-opacity-20">
          <div className="px-2 py-3 space-y-1 max-h-64 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10'
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
