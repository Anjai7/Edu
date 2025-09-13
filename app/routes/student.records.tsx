import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  TrophyIcon,
  ArrowLeftIcon,
  CalendarIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Academic Records - Student Dashboard" },
    { name: "description", content: "View your academic records and performance" },
  ];
};

// Mock data - replace with actual data from your backend
const mockStudentInfo = {
  name: "John Doe",
  studentId: "STU2025001",
  class: "12th Grade",
  section: "A",
  rollNumber: "15",
  academicYear: "2024-2025"
};

const mockGrades = [
  {
    subject: "Mathematics",
    teacher: "Dr. Smith",
    grades: [
      { type: "Quiz 1", score: 85, maxScore: 100, date: "2025-08-15", weight: 10 },
      { type: "Mid-term", score: 78, maxScore: 100, date: "2025-08-30", weight: 30 },
      { type: "Assignment 1", score: 92, maxScore: 100, date: "2025-09-05", weight: 15 },
      { type: "Quiz 2", score: 88, maxScore: 100, date: "2025-09-10", weight: 10 }
    ],
    currentGrade: "B+",
    gpa: 3.3,
    attendance: 95
  },
  {
    subject: "Physics",
    teacher: "Dr. Wilson",
    grades: [
      { type: "Lab Report 1", score: 90, maxScore: 100, date: "2025-08-20", weight: 20 },
      { type: "Mid-term", score: 82, maxScore: 100, date: "2025-09-01", weight: 30 },
      { type: "Quiz 1", score: 75, maxScore: 100, date: "2025-09-08", weight: 15 }
    ],
    currentGrade: "B",
    gpa: 3.0,
    attendance: 92
  },
  {
    subject: "Chemistry",
    teacher: "Dr. Brown",
    grades: [
      { type: "Quiz 1", score: 95, maxScore: 100, date: "2025-08-18", weight: 15 },
      { type: "Lab Practical", score: 88, maxScore: 100, date: "2025-08-25", weight: 25 },
      { type: "Mid-term", score: 91, maxScore: 100, date: "2025-09-02", weight: 30 }
    ],
    currentGrade: "A-",
    gpa: 3.7,
    attendance: 98
  },
  {
    subject: "English Literature",
    teacher: "Ms. Davis",
    grades: [
      { type: "Essay 1", score: 87, maxScore: 100, date: "2025-08-22", weight: 20 },
      { type: "Mid-term", score: 84, maxScore: 100, date: "2025-09-03", weight: 30 },
      { type: "Presentation", score: 93, maxScore: 100, date: "2025-09-12", weight: 15 }
    ],
    currentGrade: "B+",
    gpa: 3.3,
    attendance: 94
  },
  {
    subject: "History",
    teacher: "Prof. Johnson",
    grades: [
      { type: "Research Paper", score: 89, maxScore: 100, date: "2025-08-28", weight: 25 },
      { type: "Mid-term", score: 86, maxScore: 100, date: "2025-09-04", weight: 30 },
      { type: "Quiz 1", score: 92, maxScore: 100, date: "2025-09-11", weight: 10 }
    ],
    currentGrade: "B+",
    gpa: 3.3,
    attendance: 96
  }
];

const mockSemesterGPAs = [
  { semester: "Fall 2024", gpa: 3.4, credits: 24 },
  { semester: "Spring 2024", gpa: 3.2, credits: 24 },
  { semester: "Fall 2023", gpa: 3.1, credits: 22 },
  { semester: "Spring 2023", gpa: 3.0, credits: 22 }
];

const mockAchievements = [
  { title: "Honor Roll", date: "Fall 2024", description: "Achieved GPA above 3.5" },
  { title: "Science Fair Winner", date: "March 2024", description: "1st place in Chemistry category" },
  { title: "Perfect Attendance", date: "Spring 2024", description: "100% attendance for the semester" },
  { title: "Math Olympiad", date: "February 2024", description: "School representative" }
];

export default function StudentRecords() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [viewType, setViewType] = useState<"overview" | "detailed" | "transcript">("overview");

  const overallGPA = mockGrades.reduce((sum, subject) => sum + subject.gpa, 0) / mockGrades.length;
  const overallAttendance = mockGrades.reduce((sum, subject) => sum + subject.attendance, 0) / mockGrades.length;

  const getGradeColor = (grade: string) => {
    switch (grade[0]) {
      case 'A': return 'text-green-600 bg-green-100';
      case 'B': return 'text-blue-600 bg-blue-100';
      case 'C': return 'text-yellow-600 bg-yellow-100';
      case 'D': return 'text-orange-600 bg-orange-100';
      default: return 'text-red-600 bg-red-100';
    }
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    if (percentage >= 70) return 'text-yellow-600';
    if (percentage >= 60) return 'text-orange-600';
    return 'text-red-600';
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
            <h1 className="text-3xl font-bold text-gray-900">Academic Records</h1>
            <p className="text-gray-600">View your grades, GPA, and academic performance</p>
          </div>
        </div>
      </div>

      {/* Student Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Student Information</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setViewType("overview")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewType === "overview" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setViewType("detailed")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewType === "detailed" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Detailed
            </button>
            <button 
              onClick={() => setViewType("transcript")}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewType === "transcript" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Transcript
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-500">Student Name</label>
            <p className="text-lg font-semibold text-gray-900">{mockStudentInfo.name}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Student ID</label>
            <p className="text-lg font-semibold text-gray-900">{mockStudentInfo.studentId}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Class & Section</label>
            <p className="text-lg font-semibold text-gray-900">{mockStudentInfo.class} - {mockStudentInfo.section}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Academic Year</label>
            <p className="text-lg font-semibold text-gray-900">{mockStudentInfo.academicYear}</p>
          </div>
        </div>
      </div>

      {/* Overall Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Overall GPA</p>
              <p className="text-2xl font-bold text-gray-900">{overallGPA.toFixed(2)}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Subjects</p>
              <p className="text-2xl font-bold text-gray-900">{mockGrades.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <CalendarIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Attendance</p>
              <p className="text-2xl font-bold text-gray-900">{overallAttendance.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <TrophyIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Achievements</p>
              <p className="text-2xl font-bold text-gray-900">{mockAchievements.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {viewType === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Grades */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Grades</h3>
            <div className="space-y-4">
              {mockGrades.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{subject.subject}</h4>
                    <p className="text-sm text-gray-600">{subject.teacher}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.currentGrade)}`}>
                      {subject.currentGrade}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">GPA: {subject.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {mockAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <StarIcon className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{achievement.date}</p>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewType === "detailed" && (
        <div className="space-y-6">
          {mockGrades.map((subject, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{subject.subject}</h3>
                  <p className="text-gray-600">Instructor: {subject.teacher}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.currentGrade)}`}>
                    {subject.currentGrade}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    GPA: {subject.gpa} | Attendance: {subject.attendance}%
                  </p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-4 font-medium text-gray-700">Assessment</th>
                      <th className="text-left py-2 px-4 font-medium text-gray-700">Score</th>
                      <th className="text-left py-2 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-2 px-4 font-medium text-gray-700">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subject.grades.map((grade, gradeIndex) => (
                      <tr key={gradeIndex} className="border-b border-gray-100">
                        <td className="py-3 px-4">{grade.type}</td>
                        <td className={`py-3 px-4 font-medium ${getScoreColor(grade.score, grade.maxScore)}`}>
                          {grade.score}/{grade.maxScore} ({((grade.score / grade.maxScore) * 100).toFixed(1)}%)
                        </td>
                        <td className="py-3 px-4 text-gray-600">{new Date(grade.date).toLocaleDateString()}</td>
                        <td className="py-3 px-4 text-gray-600">{grade.weight}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewType === "transcript" && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Academic Transcript</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Download PDF
            </button>
          </div>
          
          <div className="space-y-6">
            {mockSemesterGPAs.map((semester, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium text-gray-900">{semester.semester}</h4>
                  <div className="text-right">
                    <p className="font-medium">GPA: {semester.gpa}</p>
                    <p className="text-sm text-gray-600">Credits: {semester.credits}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mockGrades.map((subject, subjectIndex) => (
                    <div key={subjectIndex} className="bg-gray-50 p-3 rounded-md">
                      <p className="font-medium text-gray-900">{subject.subject}</p>
                      <p className="text-sm text-gray-600">Grade: {subject.currentGrade}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Cumulative GPA</h4>
                <p className="text-sm text-gray-600">Based on all completed semesters</p>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {(mockSemesterGPAs.reduce((sum, sem) => sum + sem.gpa, 0) / mockSemesterGPAs.length).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
