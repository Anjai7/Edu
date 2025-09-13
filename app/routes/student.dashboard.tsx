import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Student Dashboard - EduHub" },
    { name: "description", content: "Student dashboard for EduHub" },
  ];
};

export default function StudentDashboard() {
  const [userInfo, setUserInfo] = useState<{
    email: string;
    name: string;
    type: string;
  }>({
    email: '',
    name: '',
    type: ''
  });

  useEffect(() => {
    // Get user info from sessionStorage
    const userEmail = sessionStorage.getItem('userEmail') || '';
    const userName = sessionStorage.getItem('userName') || '';
    const userType = sessionStorage.getItem('userType') || '';

    setUserInfo({
      email: userEmail,
      name: userName,
      type: userType
    });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userName');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-blue-600">EduHub</h1>
              <span className="text-lg font-medium text-gray-700">Student Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{userInfo.name}</div>
                <div className="text-xs text-gray-500">
                  🎓 Student • {userInfo.email}
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                {userInfo.name.charAt(0).toUpperCase() || userInfo.email.charAt(0).toUpperCase()}
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userInfo.name}!</h2>
          <p className="text-gray-600">Here's what's happening in your academic journey today.</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Study Buddy Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Study Buddy</h3>
                <p className="text-sm text-gray-600">Find study partners</p>
              </div>
            </div>
            <a href="/study" className="text-blue-600 hover:text-blue-700 font-medium">
              Find Study Partner →
            </a>
          </div>

          {/* Notes Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Notes</h3>
                <p className="text-sm text-gray-600">Manage your notes</p>
              </div>
            </div>
            <a href="/notes" className="text-green-600 hover:text-green-700 font-medium">
              View Notes →
            </a>
          </div>

          {/* Budget Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Budget Tracker</h3>
                <p className="text-sm text-gray-600">Track expenses</p>
              </div>
            </div>
            <a href="/budget" className="text-yellow-600 hover:text-yellow-700 font-medium">
              Manage Budget →
            </a>
          </div>

          {/* Campus Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Campus Info</h3>
                <p className="text-sm text-gray-600">Campus resources</p>
              </div>
            </div>
            <a href="/campus" className="text-purple-600 hover:text-purple-700 font-medium">
              Explore Campus →
            </a>
          </div>

          {/* Wellness Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-pink-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Wellness</h3>
                <p className="text-sm text-gray-600">Mental health support</p>
              </div>
            </div>
            <a href="/wellness" className="text-pink-600 hover:text-pink-700 font-medium">
              Wellness Center →
            </a>
          </div>

          {/* Assignments Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Assignments</h3>
                <p className="text-sm text-gray-600">Track homework</p>
              </div>
            </div>
            <a href="/assignments" className="text-red-600 hover:text-red-700 font-medium">
              View Assignments →
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Welcome to EduHub!</p>
                <p className="text-xs text-gray-500">You successfully logged in to your student dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}