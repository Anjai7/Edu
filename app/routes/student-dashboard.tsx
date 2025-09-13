import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { DashboardCard } from "~/components/DashboardCard";
import { StudentNavigation } from "~/components/StudentNavigation";
import { 
  BookOpenIcon, 
  DocumentTextIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  PaperAirplaneIcon,
  ClockIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Student Dashboard - EduHub" },
    { name: "description", content: "Your comprehensive student dashboard for academic success" },
  ];
};

// Mock data - replace with actual data from your backend
const mockTasks = [
  { id: 1, title: "Math Assignment - Chapter 5", type: "assignment", dueDate: "2025-09-15", status: "pending" },
  { id: 2, title: "History Essay", type: "homework", dueDate: "2025-09-18", status: "in-progress" },
  { id: 3, title: "Physics Lab Report", type: "assignment", dueDate: "2025-09-20", status: "completed" },
];

const mockAnnouncements = [
  { id: 1, title: "Sports Day Postponed", date: "2025-09-13", type: "event" },
  { id: 2, title: "Mid-term Results Published", date: "2025-09-12", type: "academic" },
  { id: 3, title: "Library Maintenance", date: "2025-09-11", type: "facility" },
];

export default function StudentDashboard() {
  const dashboardItems = [
    {
      title: "Assignments",
      description: "Track and manage your assignments",
      icon: DocumentTextIcon,
      href: "/student/assignments",
      stats: "8 pending",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Records",
      description: "View your academic records",
      icon: AcademicCapIcon,
      href: "/student/records",
      stats: "GPA: 3.8",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Homework",
      description: "Daily homework and tasks",
      icon: BookOpenIcon,
      href: "/student/homework",
      stats: "5 due today",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Exam Timetable",
      description: "Upcoming examinations",
      icon: CalendarDaysIcon,
      href: "/student/exam-timetable",
      stats: "3 this week",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Events",
      description: "School events and activities",
      icon: UserGroupIcon,
      href: "/student/events",
      stats: "2 upcoming",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Leaderboard",
      description: "Rankings and achievements",
      icon: ChartBarIcon,
      href: "/student/leaderboard",
      stats: "Rank #12",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Canteen Stock",
      description: "Available canteen items",
      icon: ShoppingBagIcon,
      href: "/student/canteen",
      stats: "25 items",
      color: "from-slate-600 to-slate-700"
    },
    {
      title: "Announcements",
      description: "Important notifications",
      icon: SpeakerWaveIcon,
      href: "/student/announcements",
      stats: "3 new",
      color: "from-slate-600 to-slate-700"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <ExclamationCircleIcon className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Pending';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <StudentNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 rounded-2xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4">Student Portal</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your academic journey starts here. Manage assignments, track progress, and stay connected.
            </p>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dashboardItems.map((item, index) => (
            <Link 
              key={item.title}
              to={item.href}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
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
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/student/leave-request"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl text-white hover:from-blue-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <PaperAirplaneIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">Request Leave</span>
              <span className="text-blue-100 text-sm mt-2">Submit leave application</span>
            </Link>
            <Link 
              to="/student/assignments"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl text-white hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <DocumentTextIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">View Assignments</span>
              <span className="text-slate-200 text-sm mt-2">Check pending tasks</span>
            </Link>
            <Link 
              to="/student/announcements"
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl text-white hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <SpeakerWaveIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">Announcements</span>
              <span className="text-slate-200 text-sm mt-2">Latest updates</span>
            </Link>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Tasks */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Recent Tasks</h3>
              <Link to="/student/assignments" className="text-blue-900 hover:text-blue-600 font-medium text-sm">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {mockTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(task.status)}
                    <div>
                      <h4 className="font-medium text-slate-800">{task.title}</h4>
                      <p className="text-sm text-slate-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.status === 'completed' ? 'bg-green-100 text-green-700' :
                    task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {getStatusText(task.status)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Recent Announcements</h3>
              <Link to="/student/announcements" className="text-blue-900 hover:text-blue-600 font-medium text-sm">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {mockAnnouncements.map((announcement) => (
                <div key={announcement.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <SpeakerWaveIcon className="h-5 w-5 text-blue-900" />
                    <div>
                      <h4 className="font-medium text-slate-800">{announcement.title}</h4>
                      <p className="text-sm text-slate-500">{new Date(announcement.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    announcement.type === 'academic' ? 'bg-blue-100 text-blue-700' :
                    announcement.type === 'event' ? 'bg-green-100 text-green-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {announcement.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
