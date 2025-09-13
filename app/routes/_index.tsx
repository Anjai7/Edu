import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "EduHub - Your Academic Companion" },
    { name: "description", content: "Your all-in-one platform for academic success" },
  ];
};

export default function Index() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to EduHub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your comprehensive platform for academic success, combining AI-powered learning tools, 
          productivity features, and wellness tracking in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">📚</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Study Buddy</h3>
          <p className="text-gray-600 text-sm">Get personalized study recommendations based on your learning style</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">📅</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Calendar</h3>
          <p className="text-gray-600 text-sm">Balance study time, deadlines, and mental health breaks</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-purple-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">📝</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Notes</h3>
          <p className="text-gray-600 text-sm">Take notes together with real-time synthesis</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-orange-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">👥</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Groups</h3>
          <p className="text-gray-600 text-sm">Find collaborators and join study groups</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">📊</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h3>
          <p className="text-gray-600 text-sm">Track your progress and identify improvement areas</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-emerald-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">💰</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Budget Tracker</h3>
          <p className="text-gray-600 text-sm">Manage student finances and optimize textbook spending</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-red-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">📍</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Campus Resources</h3>
          <p className="text-gray-600 text-sm">Find study spots, labs, and campus amenities</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-pink-500 p-3 rounded-lg">
              <div className="h-6 w-6 text-white">❤️</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Wellness Tracker</h3>
          <p className="text-gray-600 text-sm">Monitor mental health and academic stress</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">12</div>
            <div className="text-gray-600">Study Sessions This Week</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">85%</div>
            <div className="text-gray-600">Assignment Completion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">4.2</div>
            <div className="text-gray-600">Average GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">7.5</div>
            <div className="text-gray-600">Wellness Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}
