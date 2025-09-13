import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard - EduHub" },
    { name: "description", content: "Student rankings and gamified points system" },
  ];
};

export default function Leaderboard() {
  const students = [
    { rank: 1, name: "Alice Johnson", department: "Computer Science", year: 3, points: 2450, gpa: 3.95, change: "+5" },
    { rank: 2, name: "Bob Smith", department: "Computer Science", year: 3, points: 2380, gpa: 3.87, change: "-1" },
    { rank: 3, name: "Carol Davis", department: "Electronics", year: 4, points: 2340, gpa: 3.92, change: "+2" },
    { rank: 4, name: "David Wilson", department: "Computer Science", year: 2, points: 2280, gpa: 3.75, change: "0" },
    { rank: 5, name: "Emma Brown", department: "Mechanical", year: 3, points: 2250, gpa: 3.68, change: "-2" },
    { rank: 6, name: "Frank Miller", department: "Civil", year: 4, points: 2200, gpa: 3.82, change: "+1" },
    { rank: 7, name: "Grace Lee", department: "Electronics", year: 2, points: 2150, gpa: 3.78, change: "+3" },
    { rank: 8, name: "Henry Taylor", department: "Computer Science", year: 4, points: 2100, gpa: 3.71, change: "-1" },
  ];

  const getChangeColor = (change: string) => {
    if (change.startsWith("+")) return "text-green-600";
    if (change.startsWith("-")) return "text-red-600";
    return "text-gray-600";
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🏆 Leaderboard</h1>
        <p className="text-xl text-gray-600">
          Compete with your peers in academics and skills
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
            <option>All Years</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
            <option>Overall Ranking</option>
            <option>Academic Points</option>
            <option>Skill Points</option>
            <option>Participation Points</option>
          </select>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {students.slice(0, 3).map((student, index) => (
          <div key={student.rank} className={`bg-white rounded-lg shadow-md p-6 text-center ${
            index === 0 ? "ring-2 ring-yellow-400" : index === 1 ? "ring-2 ring-gray-400" : "ring-2 ring-orange-400"
          }`}>
            <div className="text-4xl mb-2">{getRankBadge(student.rank)}</div>
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-sm text-gray-600">{student.department} - Year {student.year}</p>
            <div className="mt-4">
              <div className="text-2xl font-bold text-purple-600">{student.points}</div>
              <div className="text-sm text-gray-500">points</div>
            </div>
            <div className="mt-2">
              <div className="text-lg font-semibold text-blue-600">{student.gpa}</div>
              <div className="text-xs text-gray-500">GPA</div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Rankings Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Full Rankings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GPA
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Change
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.rank} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-lg font-medium">{getRankBadge(student.rank)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{student.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{student.year}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-purple-600">{student.points}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-blue-600">{student.gpa}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${getChangeColor(student.change)}`}>
                      {student.change !== "0" ? student.change : "—"}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Points Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-semibold mb-2">Academic Points</h3>
          <p className="text-sm text-gray-600">Earned from assignments, exams, and academic achievements</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl mb-2">🛠️</div>
          <h3 className="font-semibold mb-2">Skill Points</h3>
          <p className="text-sm text-gray-600">Gained from certifications, projects, and skill demonstrations</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-semibold mb-2">Participation</h3>
          <p className="text-sm text-gray-600">Earned from events, competitions, and active participation</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-2xl mb-2">🌟</div>
          <h3 className="font-semibold mb-2">Special Achievements</h3>
          <p className="text-sm text-gray-600">Bonus points for exceptional contributions and leadership</p>
        </div>
      </div>
    </div>
  );
}
