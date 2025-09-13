import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Assignments - EduHub" },
    { name: "description", content: "Submit assignments, track deadlines, and view grades" },
  ];
};

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "Database Systems Project",
      description: "Design and implement a relational database for a library management system",
      subject: "Database Management",
      dueDate: "2025-09-20",
      status: "pending",
      maxPoints: 100,
      submittedAt: null,
      grade: null
    },
    {
      id: 2,
      title: "Data Structures Assignment",
      description: "Implement various sorting algorithms and analyze their time complexity",
      subject: "Data Structures",
      dueDate: "2025-09-15",
      status: "submitted",
      maxPoints: 80,
      submittedAt: "2025-09-14",
      grade: 85
    },
    {
      id: 3,
      title: "Web Development Portfolio",
      description: "Create a responsive portfolio website using modern web technologies",
      subject: "Web Development",
      dueDate: "2025-09-25",
      status: "graded",
      maxPoints: 120,
      submittedAt: "2025-09-23",
      grade: 110
    },
    {
      id: 4,
      title: "Machine Learning Lab Report",
      description: "Analyze the performance of different classification algorithms",
      subject: "Machine Learning",
      dueDate: "2025-09-18",
      status: "late",
      maxPoints: 90,
      submittedAt: "2025-09-19",
      grade: 75
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "submitted": return "bg-blue-100 text-blue-800";
      case "graded": return "bg-green-100 text-green-800";
      case "late": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getGradeColor = (grade: number, maxPoints: number) => {
    const percentage = (grade / maxPoints) * 100;
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">📚 Assignments</h1>
          <p className="text-xl text-gray-600 mt-2">Track your assignments and deadlines</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          + New Assignment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600">
            {assignments.filter(a => a.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">
            {assignments.filter(a => a.status === 'submitted').length}
          </div>
          <div className="text-sm text-gray-500">Submitted</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-green-600">
            {assignments.filter(a => a.status === 'graded').length}
          </div>
          <div className="text-sm text-gray-500">Graded</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-3xl font-bold text-red-600">
            {assignments.filter(a => a.status === 'late').length}
          </div>
          <div className="text-sm text-gray-500">Late</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">All</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Pending</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Submitted</button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">Graded</button>
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{assignment.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📖 {assignment.subject}</span>
                  <span>📅 Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  <span>⭐ {assignment.maxPoints} points</span>
                  {assignment.submittedAt && (
                    <span>📤 Submitted: {new Date(assignment.submittedAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              <div className="text-right">
                {assignment.grade !== null ? (
                  <div className={`text-2xl font-bold ${getGradeColor(assignment.grade, assignment.maxPoints)}`}>
                    {assignment.grade}/{assignment.maxPoints}
                  </div>
                ) : (
                  <div className="text-lg font-medium text-gray-600">
                    {getDaysUntilDue(assignment.dueDate) > 0 
                      ? `${getDaysUntilDue(assignment.dueDate)} days left`
                      : getDaysUntilDue(assignment.dueDate) === 0
                      ? "Due today"
                      : "Overdue"
                    }
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {assignment.status === 'pending' && (
                  <>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Submit Assignment
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
                      View Details
                    </button>
                  </>
                )}
                {assignment.status === 'submitted' && (
                  <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
                    View Submission
                  </button>
                )}
                {assignment.status === 'graded' && (
                  <>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
                      View Feedback
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
                      Download
                    </button>
                  </>
                )}
              </div>
              {assignment.status === 'pending' && getDaysUntilDue(assignment.dueDate) <= 3 && (
                <div className="text-red-600 text-sm font-medium">
                  ⚠️ Due soon
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">📅 Upcoming Deadlines</h3>
        <div className="space-y-3">
          {assignments
            .filter(a => a.status === 'pending')
            .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
            .map(assignment => (
              <div key={assignment.id} className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                <div>
                  <div className="font-medium">{assignment.title}</div>
                  <div className="text-sm text-gray-500">{assignment.subject}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{new Date(assignment.dueDate).toLocaleDateString()}</div>
                  <div className={`text-sm ${getDaysUntilDue(assignment.dueDate) <= 3 ? 'text-red-600' : 'text-gray-500'}`}>
                    {getDaysUntilDue(assignment.dueDate)} days left
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
