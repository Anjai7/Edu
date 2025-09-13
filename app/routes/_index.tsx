import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Student Dashboard - EduHub" },
    { name: "description", content: "Your comprehensive student dashboard for academic success" },
  ];
};

export const loader = async () => {
  return redirect("/student/dashboard");
};

export default function Index() {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    type: string;
  }>({
    name: '',
    type: ''
  });

  useEffect(() => {
    // Get user info from sessionStorage
    const userName = sessionStorage.getItem('userName') || 'User';
    const userType = sessionStorage.getItem('userType') || 'student';
    
    setUserInfo({
      name: userName,
      type: userType
    });
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {getGreeting()}, {userInfo.name}! 
          {userInfo.type === 'student' ? ' 🎓' : ' 👨‍🏫'}
        </h1>
        <p className="text-xl text-gray-600">
          Welcome to your {userInfo.type === 'student' ? 'Student' : 'Staff'} Dashboard
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">85%</div>
          <div className="text-sm text-gray-500">Attendance</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600">3.75</div>
          <div className="text-sm text-gray-500">GPA</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">1,250</div>
          <div className="text-sm text-gray-500">Leaderboard Points</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-500">Pending Assignments</div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Leaderboard */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">🏆</span>
            </div>
            <h3 className="ml-4 text-lg font-semibold">Leaderboard</h3>
          </div>
          <p className="text-gray-600 mb-4">Check your ranking among peers. Compete in academics and skills!</p>
          <a href="/leaderboard" className="text-purple-600 hover:text-purple-800 font-medium">
            View Rankings →
          </a>
        </div>

        {/* Assignments */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">�</span>
            </div>
            <h3 className="ml-4 text-lg font-semibold">Assignments</h3>
          </div>
          <p className="text-gray-600 mb-4">Submit assignments, track deadlines, and view grades.</p>
          <a href="/assignments" className="text-blue-600 hover:text-blue-800 font-medium">
            View Assignments →
          </a>
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 font-bold">✓</span>
            </div>
            <h3 className="ml-4 text-lg font-semibold">Attendance</h3>
          </div>
          <p className="text-gray-600 mb-4">Track your attendance percentage and detailed records.</p>
          <a href="/attendance" className="text-green-600 hover:text-green-800 font-medium">
            View Attendance →
          </a>
        </div>

        {/* Canteen */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-orange-600 font-bold">🍽️</span>
            </div>
            <h3 className="ml-4 text-lg font-semibold">Canteen</h3>
          </div>
          <p className="text-gray-600 mb-4">Order food online, check availability, and track orders.</p>
          <a href="/canteen" className="text-orange-600 hover:text-orange-800 font-medium">
            Order Food →
          </a>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold">�</span>
            </div>
            <h3 className="ml-4 text-lg font-semibold">Announcements</h3>
          </div>
          <p className="text-gray-600 mb-4">Stay updated with important college announcements.</p>
          <a href="/announcements" className="text-red-600 hover:text-red-800 font-medium">
            View Announcements →
          </a>
        </div>

        {/* Leave Management */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-yellow-600 font-bold">🏖️</span>
            </div>
            <h3 className="ml-4 text-lg font-semibold">Leave Management</h3>
          </div>
          <p className="text-gray-600 mb-4">Apply for leave and track approval status.</p>
          <a href="/leaves" className="text-yellow-600 hover:text-yellow-800 font-medium">
            Apply for Leave →
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
            <div>
              <div className="font-medium">New Assignment: Database Systems Project</div>
              <div className="text-sm text-gray-500">Due: September 20, 2025</div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">New</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
            <div>
              <div className="font-medium">Attendance marked for Data Structures</div>
              <div className="text-sm text-gray-500">Today, 10:00 AM</div>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Present</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
            <div>
              <div className="font-medium">New Announcement: Tech Fest 2025</div>
              <div className="text-sm text-gray-500">Posted 2 hours ago</div>
            </div>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Important</span>
          </div>
        </div>
      </div>
    </div>
  );
}
