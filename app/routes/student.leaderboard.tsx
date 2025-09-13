import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  ChartBarIcon,
  TrophyIcon,
  StarIcon,
  AcademicCapIcon,
  UserIcon,
  ArrowLeftIcon,
  FireIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard - Student Dashboard" },
    { name: "description", content: "View your ranking and achievements compared to other students" },
  ];
};

// Mock data - replace with actual data from your backend
const mockLeaderboard = [
  {
    rank: 1,
    studentName: "Alice Johnson",
    studentId: "STU2025002",
    class: "12th A",
    totalPoints: 2850,
    gpa: 4.0,
    achievements: 15,
    streak: 45,
    trend: "up",
    avatar: "AJ",
    specialBadges: ["Top Performer", "Consistent Achiever", "Academic Star"]
  },
  {
    rank: 2,
    studentName: "Bob Smith",
    studentId: "STU2025005",
    class: "12th B",
    totalPoints: 2720,
    gpa: 3.9,
    achievements: 12,
    streak: 32,
    trend: "up",
    avatar: "BS",
    specialBadges: ["Science Champion", "Problem Solver"]
  },
  {
    rank: 3,
    studentName: "Carol Davis",
    studentId: "STU2025008",
    class: "12th A",
    totalPoints: 2680,
    gpa: 3.8,
    achievements: 14,
    streak: 28,
    trend: "stable",
    avatar: "CD",
    specialBadges: ["Creative Thinker", "Team Player"]
  },
  {
    rank: 4,
    studentName: "David Wilson",
    studentId: "STU2025012",
    class: "12th C",
    totalPoints: 2550,
    gpa: 3.7,
    achievements: 10,
    streak: 21,
    trend: "down",
    avatar: "DW",
    specialBadges: ["Math Wizard"]
  },
  {
    rank: 5,
    studentName: "Eva Brown",
    studentId: "STU2025015",
    class: "12th B",
    totalPoints: 2480,
    gpa: 3.6,
    achievements: 11,
    streak: 19,
    trend: "up",
    avatar: "EB",
    specialBadges: ["Literature Expert", "Debate Champion"]
  },
  {
    rank: 15,
    studentName: "John Doe", // Current user
    studentId: "STU2025001",
    class: "12th A",
    totalPoints: 2150,
    gpa: 3.2,
    achievements: 8,
    streak: 12,
    trend: "up",
    avatar: "JD",
    specialBadges: ["Rising Star"],
    isCurrentUser: true
  }
];

const mockSubjectLeaderboards = [
  {
    subject: "Mathematics",
    leaders: [
      { name: "Alice Johnson", score: 98, class: "12th A" },
      { name: "David Wilson", score: 96, class: "12th C" },
      { name: "Bob Smith", score: 94, class: "12th B" }
    ]
  },
  {
    subject: "Physics",
    leaders: [
      { name: "Bob Smith", score: 97, class: "12th B" },
      { name: "Alice Johnson", score: 95, class: "12th A" },
      { name: "Carol Davis", score: 93, class: "12th A" }
    ]
  },
  {
    subject: "Chemistry",
    leaders: [
      { name: "Carol Davis", score: 96, class: "12th A" },
      { name: "Eva Brown", score: 94, class: "12th B" },
      { name: "Alice Johnson", score: 92, class: "12th A" }
    ]
  }
];

const mockAchievements = [
  {
    id: 1,
    title: "Perfect Attendance",
    description: "100% attendance for the semester",
    icon: "🎯",
    rarity: "rare",
    pointsAwarded: 500,
    recipients: 23
  },
  {
    id: 2,
    title: "Academic Excellence",
    description: "GPA above 3.8 for consecutive semesters",
    icon: "⭐",
    rarity: "legendary",
    pointsAwarded: 1000,
    recipients: 8
  },
  {
    id: 3,
    title: "Problem Solver",
    description: "Solved 100+ math problems this month",
    icon: "🧮",
    rarity: "common",
    pointsAwarded: 200,
    recipients: 156
  },
  {
    id: 4,
    title: "Team Leader",
    description: "Successfully led 5+ group projects",
    icon: "👥",
    rarity: "uncommon",
    pointsAwarded: 350,
    recipients: 45
  }
];

export default function StudentLeaderboard() {
  const [viewType, setViewType] = useState<"overall" | "subject" | "achievements">("overall");
  const [timeframe, setTimeframe] = useState("semester");

  const currentUser = mockLeaderboard.find(student => student.isCurrentUser);
  const topStudents = mockLeaderboard.filter(student => !student.isCurrentUser).slice(0, 10);

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-600';
    if (rank === 2) return 'text-gray-500';
    if (rank === 3) return 'text-amber-600';
    return 'text-gray-700';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <TrophyIcon className="h-6 w-6 text-yellow-600" />;
    if (rank === 2) return <StarIcon className="h-6 w-6 text-gray-500" />;
    if (rank === 3) return <StarIcon className="h-6 w-6 text-amber-600" />;
    return <span className="text-lg font-bold text-gray-700">#{rank}</span>;
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <ArrowUpIcon className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <ArrowDownIcon className="h-4 w-4 text-red-500" />;
    return <div className="h-4 w-4" />;
  };

  const getBadgeColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'rare': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'uncommon': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            to="/student-dashboard"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leaderboard</h1>
            <p className="text-gray-600">Track your ranking and achievements</p>
          </div>
        </div>
      </div>

      {/* Current User Stats */}
      {currentUser && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-lg font-bold">
                  {currentUser.avatar}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{currentUser.studentName}</h2>
                <p className="opacity-90">{currentUser.class} • {currentUser.studentId}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="flex items-center space-x-1">
                    <TrophyIcon className="h-5 w-5" />
                    <span>Rank #{currentUser.rank}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <StarIcon className="h-5 w-5" />
                    <span>{currentUser.totalPoints} pts</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FireIcon className="h-5 w-5" />
                    <span>{currentUser.streak} day streak</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{currentUser.gpa}</div>
              <div className="opacity-90">GPA</div>
              <div className="flex items-center justify-end mt-2">
                {getTrendIcon(currentUser.trend)}
                <span className="ml-1 text-sm">
                  {currentUser.trend === 'up' ? 'Improving' : 
                   currentUser.trend === 'down' ? 'Declining' : 'Stable'}
                </span>
              </div>
            </div>
          </div>
          {currentUser.specialBadges && currentUser.specialBadges.length > 0 && (
            <div className="mt-4 pt-4 border-t border-white border-opacity-20">
              <div className="flex flex-wrap gap-2">
                {currentUser.specialBadges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* View Controls */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <button 
              onClick={() => setViewType("overall")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewType === "overall" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Overall Rankings
            </button>
            <button 
              onClick={() => setViewType("subject")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewType === "subject" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Subject Leaders
            </button>
            <button 
              onClick={() => setViewType("achievements")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewType === "achievements" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Achievements
            </button>
          </div>
          <select 
            value={timeframe} 
            onChange={(e) => setTimeframe(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="semester">This Semester</option>
            <option value="year">This Year</option>
          </select>
        </div>

        {/* Overall Rankings */}
        {viewType === "overall" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Students</h3>
            <div className="space-y-3">
              {topStudents.map((student, index) => (
                <div key={student.studentId} className={`flex items-center justify-between p-4 rounded-lg ${
                  student.rank <= 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(student.rank)}
                    </div>
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                      {student.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{student.studentName}</h4>
                      <p className="text-sm text-gray-600">{student.class} • {student.studentId}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">{student.totalPoints}</p>
                      <p className="text-gray-500">Points</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">{student.gpa}</p>
                      <p className="text-gray-500">GPA</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">{student.achievements}</p>
                      <p className="text-gray-500">Achievements</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getTrendIcon(student.trend)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subject Leaders */}
        {viewType === "subject" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Subject Leaderboards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockSubjectLeaderboards.map((subject, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                    <h4 className="text-lg font-semibold text-gray-900">{subject.subject}</h4>
                  </div>
                  <div className="space-y-3">
                    {subject.leaders.map((leader, leaderIndex) => (
                      <div key={leaderIndex} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            leaderIndex === 0 ? 'bg-yellow-100 text-yellow-800' :
                            leaderIndex === 1 ? 'bg-gray-100 text-gray-800' :
                            'bg-amber-100 text-amber-800'
                          }`}>
                            {leaderIndex + 1}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{leader.name}</p>
                            <p className="text-xs text-gray-500">{leader.class}</p>
                          </div>
                        </div>
                        <span className="font-bold text-blue-600">{leader.score}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {viewType === "achievements" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Available Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAchievements.map((achievement) => (
                <div key={achievement.id} className={`border-2 rounded-lg p-6 ${getBadgeColor(achievement.rarity)}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold">{achievement.title}</h4>
                      <p className="text-sm opacity-80">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">+{achievement.pointsAwarded} pts</span>
                      <span className="capitalize font-medium">{achievement.rarity}</span>
                    </div>
                    <span className="opacity-80">{achievement.recipients} earned</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
