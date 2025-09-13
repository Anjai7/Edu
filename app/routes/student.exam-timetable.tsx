import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowLeftIcon,
  PrinterIcon,
  BellIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Exam Timetable - Student Dashboard" },
    { name: "description", content: "View your examination schedule and important dates" },
  ];
};

// Mock data - replace with actual data from your backend
const mockExams = [
  {
    id: 1,
    subject: "Mathematics",
    date: "2025-09-20",
    time: "9:00 AM - 12:00 PM",
    duration: "3 hours",
    type: "Mid-term Examination",
    venue: "Main Hall - Block A",
    instructor: "Dr. Smith",
    totalMarks: 100,
    instructions: [
      "Bring calculator and geometry tools",
      "All questions are compulsory",
      "Show all working clearly"
    ],
    syllabus: ["Algebra", "Geometry", "Trigonometry"],
    status: "upcoming"
  },
  {
    id: 2,
    subject: "Physics",
    date: "2025-09-22",
    time: "2:00 PM - 5:00 PM",
    duration: "3 hours",
    type: "Mid-term Examination",
    venue: "Science Lab - Block B",
    instructor: "Dr. Wilson",
    totalMarks: 100,
    instructions: [
      "Formula sheet will be provided",
      "Practical demonstration required",
      "Scientific calculator allowed"
    ],
    syllabus: ["Mechanics", "Thermodynamics", "Optics"],
    status: "upcoming"
  },
  {
    id: 3,
    subject: "Chemistry",
    date: "2025-09-24",
    time: "9:00 AM - 12:00 PM",
    duration: "3 hours",
    type: "Mid-term Examination",
    venue: "Chemistry Lab - Block C",
    instructor: "Dr. Brown",
    totalMarks: 100,
    instructions: [
      "Periodic table will be provided",
      "Lab safety equipment required",
      "All equations must be balanced"
    ],
    syllabus: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
    status: "upcoming"
  },
  {
    id: 4,
    subject: "English Literature",
    date: "2025-09-25",
    time: "10:00 AM - 1:00 PM",
    duration: "3 hours",
    type: "Mid-term Examination",
    venue: "Library Hall - Block D",
    instructor: "Ms. Davis",
    totalMarks: 100,
    instructions: [
      "Choice between essay questions",
      "Reference to text required",
      "Proper citation format expected"
    ],
    syllabus: ["Shakespeare", "Modern Poetry", "Literary Analysis"],
    status: "upcoming"
  },
  {
    id: 5,
    subject: "History",
    date: "2025-09-27",
    time: "9:00 AM - 12:00 PM",
    duration: "3 hours",
    type: "Mid-term Examination",
    venue: "Conference Room - Block A",
    instructor: "Prof. Johnson",
    totalMarks: 100,
    instructions: [
      "Maps and timeline analysis",
      "Essay-type questions",
      "Historical evidence required"
    ],
    syllabus: ["World War I", "Industrial Revolution", "Renaissance"],
    status: "upcoming"
  },
  {
    id: 6,
    subject: "Mathematics",
    date: "2025-09-15",
    time: "9:00 AM - 11:00 AM",
    duration: "2 hours",
    type: "Unit Test",
    venue: "Classroom 101",
    instructor: "Dr. Smith",
    totalMarks: 50,
    instructions: [],
    syllabus: ["Linear Equations"],
    status: "completed",
    score: 42
  }
];

const mockImportantDates = [
  {
    date: "2025-09-18",
    event: "Exam Registration Deadline",
    type: "deadline",
    description: "Last date to register for mid-term examinations"
  },
  {
    date: "2025-09-19",
    event: "Exam Hall Allocation",
    type: "information",
    description: "Exam venue and seating arrangement will be announced"
  },
  {
    date: "2025-09-28",
    event: "Result Declaration",
    type: "information",
    description: "Mid-term examination results will be published"
  }
];

export default function ExamTimetable() {
  const [viewType, setViewType] = useState<"calendar" | "list">("list");
  const [filterType, setFilterType] = useState("all");

  const examTypes = [...new Set(mockExams.map(exam => exam.type))];

  const filteredExams = mockExams.filter(exam => {
    if (filterType !== "all" && exam.type !== filterType) return false;
    return true;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const upcomingExams = filteredExams.filter(exam => exam.status === "upcoming");
  const completedExams = filteredExams.filter(exam => exam.status === "completed");

  const getDaysUntilExam = (examDate: string) => {
    const today = new Date();
    const exam = new Date(examDate);
    const diffTime = exam.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getExamUrgency = (examDate: string) => {
    const days = getDaysUntilExam(examDate);
    if (days < 0) return 'text-gray-500';
    if (days <= 2) return 'text-red-600 font-bold';
    if (days <= 7) return 'text-yellow-600 font-medium';
    return 'text-green-600';
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mid-term examination':
        return 'bg-red-100 text-red-800';
      case 'unit test':
        return 'bg-blue-100 text-blue-800';
      case 'final examination':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            to="/student/dashboard"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Exam Timetable</h1>
            <p className="text-gray-600">View your examination schedule and important dates</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            <PrinterIcon className="h-4 w-4" />
            <span>Print Schedule</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <CalendarDaysIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Exams</p>
              <p className="text-2xl font-bold text-gray-900">{mockExams.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">{upcomingExams.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedExams.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">This Week</p>
              <p className="text-2xl font-bold text-gray-900">
                {upcomingExams.filter(exam => getDaysUntilExam(exam.date) <= 7).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <BellIcon className="h-5 w-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-gray-900">Important Dates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockImportantDates.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              item.type === 'deadline' ? 'border-red-500 bg-red-50' : 'border-blue-500 bg-blue-50'
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                {item.type === 'deadline' ? 
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500" /> :
                  <InformationCircleIcon className="h-5 w-5 text-blue-500" />
                }
                <h3 className="font-medium text-gray-900">{item.event}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-1">{new Date(item.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Exam Schedule</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {examTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewType("list")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewType === "list" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                List View
              </button>
              <button 
                onClick={() => setViewType("calendar")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewType === "calendar" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Exams */}
        {upcomingExams.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Exams</h3>
            <div className="space-y-4">
              {upcomingExams.map((exam) => {
                const daysUntil = getDaysUntilExam(exam.date);
                return (
                  <div key={exam.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-semibold text-gray-900">{exam.subject}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exam.type)}`}>
                            {exam.type}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <CalendarDaysIcon className="h-4 w-4" />
                            <span>{new Date(exam.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ClockIcon className="h-4 w-4" />
                            <span>{exam.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-4 w-4" />
                            <span>{exam.venue}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <AcademicCapIcon className="h-4 w-4" />
                            <span>Marks: {exam.totalMarks}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${getExamUrgency(exam.date)}`}>
                          {daysUntil === 0 ? 'Today' : 
                           daysUntil === 1 ? 'Tomorrow' : 
                           daysUntil > 0 ? `${daysUntil} days` : 'Past'}
                        </p>
                        <p className="text-sm text-gray-500">Duration: {exam.duration}</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Syllabus Coverage</h5>
                          <div className="flex flex-wrap gap-2">
                            {exam.syllabus.map((topic, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                        {exam.instructions.length > 0 && (
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Important Instructions</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {exam.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                                  <span>{instruction}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Completed Exams */}
        {completedExams.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Completed Exams</h3>
            <div className="space-y-4">
              {completedExams.map((exam) => (
                <div key={exam.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{exam.subject}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exam.type)}`}>
                          {exam.type}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          ✓ Completed
                        </span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <span>Date: {new Date(exam.date).toLocaleDateString()}</span>
                        <span>Venue: {exam.venue}</span>
                        <span>Duration: {exam.duration}</span>
                      </div>
                    </div>
                    {exam.score !== undefined && (
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-600">
                          {exam.score}/{exam.totalMarks}
                        </p>
                        <p className="text-sm text-gray-500">
                          {((exam.score / exam.totalMarks) * 100).toFixed(1)}%
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {filteredExams.length === 0 && (
        <div className="text-center py-12">
          <CalendarDaysIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No exams found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more exams.</p>
        </div>
      )}
    </div>
  );
}
