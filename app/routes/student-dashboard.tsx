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
      description: "View and track your assignments and submissions",
      icon: DocumentTextIcon,
      href: "/student/assignments",
      color: "bg-blue-500"
    },
    {
      title: "Academic Records",
      description: "Check your grades, transcripts, and academic progress",
      icon: AcademicCapIcon,
      href: "/student/records",
      color: "bg-green-500"
    },
    {
      title: "Homework",
      description: "Manage your daily homework and practice tasks",
      icon: BookOpenIcon,
      href: "/student/homework",
      color: "bg-purple-500"
    },
    {
      title: "Exam Timetable",
      description: "View upcoming exams and examination schedules",
      icon: CalendarDaysIcon,
      href: "/student/exam-timetable",
      color: "bg-red-500"
    },
    {
      title: "Events",
      description: "Stay updated with school events and activities",
      icon: UserGroupIcon,
      href: "/student/events",
      color: "bg-yellow-500"
    },
    {
      title: "Leaderboard",
      description: "Check your ranking and achievements",
      icon: ChartBarIcon,
      href: "/student/leaderboard",
      color: "bg-indigo-500"
    },
    {
      title: "Canteen Stock",
      description: "View available items and stock in the canteen",
      icon: ShoppingBagIcon,
      href: "/student/canteen",
      color: "bg-orange-500"
    },
    {
      title: "Announcements",
      description: "Read important announcements from administration",
      icon: SpeakerWaveIcon,
      href: "/student/announcements",
      color: "bg-pink-500"
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
    <div>
      <StudentNavigation />
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Student Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your comprehensive hub for academic tasks, announcements, and school activities.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Quick Actions</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/student/leave-request"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
            <span>Request Leave</span>
          </Link>
          <Link 
            to="/student/assignments"
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <DocumentTextIcon className="h-5 w-5" />
            <span>View Assignments</span>
          </Link>
          <Link 
            to="/student/announcements"
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <SpeakerWaveIcon className="h-5 w-5" />
            <span>Latest Announcements</span>
          </Link>
        </div>
      </div>

      {/* Recent Tasks Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Tasks</h2>
          <Link 
            to="/student/assignments" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {mockTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getStatusIcon(task.status)}
                <div>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <p className="text-sm text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                task.status === 'completed' ? 'bg-green-100 text-green-800' :
                task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {getStatusText(task.status)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Announcements */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">Recent Announcements</h2>
          <Link 
            to="/student/announcements" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All
          </Link>
        </div>
        <div className="space-y-3">
          {mockAnnouncements.map((announcement) => (
            <div key={announcement.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <SpeakerWaveIcon className="h-5 w-5 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                  <p className="text-sm text-gray-600">{new Date(announcement.date).toLocaleDateString()}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                announcement.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                announcement.type === 'event' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {announcement.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardItems.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            href={item.href}
            color={item.color}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
