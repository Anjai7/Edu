import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard - EduHub" },
    { name: "description", content: "Student rankings and gamified points system" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // Fetch leaderboard data using the view we created
    const { data: leaderboardData, error: leaderboardError } = await supabase
      .from('student_leaderboard')
      .select('*')
      .limit(50);

    if (leaderboardError) {
      console.error('Error fetching leaderboard:', leaderboardError);
      // Fallback to manual query if view doesn't exist
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select(`
          id, name, department, year, gpa, cgpa,
          leaderboard(points)
        `)
        .eq('role', 'student')
        .eq('is_active', true);

      if (usersError) throw usersError;

      // Process the data manually
      const processedData = usersData?.map(user => ({
        id: user.id,
        name: user.name,
        department: user.department,
        year: user.year,
        gpa: user.gpa || 0,
        cgpa: user.cgpa || 0,
        total_points: user.leaderboard?.reduce((sum: number, entry: any) => sum + (entry.points || 0), 0) || 0,
        total_achievements: user.leaderboard?.length || 0,
        rank_position: 0 // Will be calculated after sorting
      })) || [];

      // Sort by points and assign ranks
      processedData.sort((a, b) => {
        if (b.total_points !== a.total_points) return b.total_points - a.total_points;
        if (b.cgpa !== a.cgpa) return b.cgpa - a.cgpa;
        return b.gpa - a.gpa;
      });

      processedData.forEach((student, index) => {
        student.rank_position = index + 1;
      });

      return json({ students: processedData });
    }

    return json({ students: leaderboardData || [] });
  } catch (error) {
    console.error('Database error:', error);
    return json({ students: [] });
  }
}

export default function Leaderboard() {
  const { students } = useLoaderData<typeof loader>();

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

  // Add mock change data for now (can be calculated from historical data later)
  const studentsWithChange = students.map((student: any, index: number) => ({
    ...student,
    rank: student.rank_position || index + 1,
    points: student.total_points || 0,
    change: index % 3 === 0 ? "+2" : index % 2 === 0 ? "-1" : "0" // Mock data
  }));

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
        {studentsWithChange.slice(0, 3).map((student, index) => (
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
              <div className="text-lg font-semibold text-blue-600">{student.gpa?.toFixed(2) || 'N/A'}</div>
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
              {studentsWithChange.map((student) => (
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
                    <div className="text-sm text-gray-600">{student.department || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{student.year || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-purple-600">{student.points}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-blue-600">{student.gpa?.toFixed(2) || 'N/A'}</div>
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
