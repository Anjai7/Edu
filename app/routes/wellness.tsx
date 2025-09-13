import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Wellness Tracker - EduHub" },
    { name: "description", content: "Monitor your mental health and academic stress" },
  ];
};

export default function Wellness() {
  const [todayEntry, setTodayEntry] = useState({
    mood: 7,
    stress: 4,
    sleep: 7.5,
    exercise: 30,
    notes: ""
  });

  const [weeklyData] = useState([
    { date: "Mon", mood: 6, stress: 6, sleep: 6, exercise: 0 },
    { date: "Tue", mood: 7, stress: 5, sleep: 7, exercise: 30 },
    { date: "Wed", mood: 8, stress: 3, sleep: 8, exercise: 45 },
    { date: "Thu", mood: 6, stress: 7, sleep: 6, exercise: 0 },
    { date: "Fri", mood: 9, stress: 2, sleep: 8, exercise: 60 },
    { date: "Sat", mood: 8, stress: 3, sleep: 9, exercise: 90 },
    { date: "Sun", mood: 7, stress: 4, sleep: 7.5, exercise: 30 }
  ]);

  const averages = {
    mood: weeklyData.reduce((sum, day) => sum + day.mood, 0) / weeklyData.length,
    stress: weeklyData.reduce((sum, day) => sum + day.stress, 0) / weeklyData.length,
    sleep: weeklyData.reduce((sum, day) => sum + day.sleep, 0) / weeklyData.length,
    exercise: weeklyData.reduce((sum, day) => sum + day.exercise, 0) / weeklyData.length
  };

  const getStressColor = (level: number) => {
    if (level <= 3) return "text-green-600";
    if (level <= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getMoodColor = (level: number) => {
    if (level >= 8) return "text-green-600";
    if (level >= 6) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Tracker</h1>
        <p className="text-xl text-gray-600">
          Monitor your mental health and academic stress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Average Mood</h3>
          <div className={`text-3xl font-bold ${getMoodColor(averages.mood)}`}>
            {averages.mood.toFixed(1)}/10
          </div>
          <p className="text-sm text-gray-500">This week</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Stress Level</h3>
          <div className={`text-3xl font-bold ${getStressColor(averages.stress)}`}>
            {averages.stress.toFixed(1)}/10
          </div>
          <p className="text-sm text-gray-500">Average this week</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Sleep Average</h3>
          <div className="text-3xl font-bold text-blue-600">
            {averages.sleep.toFixed(1)}h
          </div>
          <p className="text-sm text-gray-500">Per night</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Exercise</h3>
          <div className="text-3xl font-bold text-purple-600">
            {Math.round(averages.exercise)}min
          </div>
          <p className="text-sm text-gray-500">Daily average</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Today's Check-in</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mood (1-10): {todayEntry.mood}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={todayEntry.mood}
                onChange={(e) => setTodayEntry({...todayEntry, mood: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stress Level (1-10): {todayEntry.stress}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={todayEntry.stress}
                onChange={(e) => setTodayEntry({...todayEntry, stress: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sleep Hours: {todayEntry.sleep}
              </label>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={todayEntry.sleep}
                onChange={(e) => setTodayEntry({...todayEntry, sleep: parseFloat(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exercise Minutes: {todayEntry.exercise}
              </label>
              <input
                type="range"
                min="0"
                max="120"
                step="15"
                value={todayEntry.exercise}
                onChange={(e) => setTodayEntry({...todayEntry, exercise: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (optional)
              </label>
              <textarea
                value={todayEntry.notes}
                onChange={(e) => setTodayEntry({...todayEntry, notes: e.target.value})}
                placeholder="How are you feeling today? Any particular stressors?"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>
            <Button variant="primary" className="w-full">
              Save Today's Entry
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Weekly Trends</h3>
          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                <div className="font-medium text-gray-700">{day.date}</div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`font-medium ${getMoodColor(day.mood)}`}>
                    Mood: {day.mood}
                  </span>
                  <span className={`font-medium ${getStressColor(day.stress)}`}>
                    Stress: {day.stress}
                  </span>
                  <span className="text-blue-600">
                    Sleep: {day.sleep}h
                  </span>
                  <span className="text-purple-600">
                    Exercise: {day.exercise}min
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Stress Management</h3>
          <div className="space-y-3">
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Deep Breathing</div>
              <div className="text-xs text-gray-500">5-minute guided session</div>
            </div>
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Meditation</div>
              <div className="text-xs text-gray-500">10-minute mindfulness</div>
            </div>
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Take a Walk</div>
              <div className="text-xs text-gray-500">Get some fresh air</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Academic Support</h3>
          <div className="space-y-3">
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Counseling Services</div>
              <div className="text-xs text-gray-500">Free student support</div>
            </div>
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Study Groups</div>
              <div className="text-xs text-gray-500">Connect with peers</div>
            </div>
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Office Hours</div>
              <div className="text-xs text-gray-500">Get help from professors</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Emergency Resources</h3>
          <div className="space-y-3">
            <div className="p-3 border border-red-200 rounded-md bg-red-50">
              <div className="font-medium text-sm text-red-800">Crisis Hotline</div>
              <div className="text-xs text-red-600">Available 24/7</div>
            </div>
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Campus Security</div>
              <div className="text-xs text-gray-500">Emergency assistance</div>
            </div>
            <div className="p-3 border border-gray-200 rounded-md">
              <div className="font-medium text-sm">Health Center</div>
              <div className="text-xs text-gray-500">Medical support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
