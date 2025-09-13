import React from "react";
import { Link } from "@remix-run/react";
import { 
  BookOpenIcon, 
  CalendarIcon, 
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  HomeIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

export function Navigation() {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Study Buddy', href: '/study', icon: BookOpenIcon },
    { name: 'Notes', href: '/notes', icon: AcademicCapIcon },
    { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
    { name: 'Study Groups', href: '/groups', icon: UsersIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Budget', href: '/budget', icon: CurrencyDollarIcon },
    { name: 'Campus', href: '/campus', icon: MapPinIcon },
    { name: 'Wellness', href: '/wellness', icon: HeartIcon },
  ];

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              EduHub
            </Link>
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600">
              <CogIcon className="h-6 w-6" />
            </button>
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
              U
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
