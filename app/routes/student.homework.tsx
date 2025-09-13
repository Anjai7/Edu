import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  FunnelIcon,
  PencilIcon,
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Homework - Student Dashboard" },
    { name: "description", content: "View and manage your homework assignments" },
  ];
};

// Mock data - replace with actual data from your backend
const mockHomework = [
  {
    id: 1,
    title: "Algebra Practice Problems",
    subject: "Mathematics",
    description: "Complete exercises 15-30 from textbook page 145",
    assignedDate: "2025-09-13",
    dueDate: "2025-09-14",
    estimatedTime: 45,
    actualTime: 0,
    status: "not-started",
    priority: "high",
    difficulty: "medium",
    topics: ["Linear Equations", "Quadratic Functions"],
    resources: ["textbook_ch8.pdf", "practice_solutions.pdf"],
    isTracking: false
  },
  {
    id: 2,
    title: "Romeo and Juliet Reading",
    subject: "English Literature",
    description: "Read Act 2 and prepare character analysis notes",
    assignedDate: "2025-09-12",
    dueDate: "2025-09-15",
    estimatedTime: 90,
    actualTime: 65,
    status: "in-progress",
    priority: "medium",
    difficulty: "easy",
    topics: ["Character Analysis", "Shakespearean Literature"],
    resources: ["romeo_juliet_text.pdf", "character_guide.pdf"],
    isTracking: false
  },
  {
    id: 3,
    title: "Chemical Equations Worksheet",
    subject: "Chemistry",
    description: "Balance chemical equations and identify reaction types",
    assignedDate: "2025-09-11",
    dueDate: "2025-09-14",
    estimatedTime: 60,
    actualTime: 55,
    status: "completed",
    priority: "medium",
    difficulty: "hard",
    topics: ["Chemical Equations", "Reaction Types"],
    resources: ["equations_worksheet.pdf", "periodic_table.pdf"],
    isTracking: false,
    completedDate: "2025-09-13"
  },
  {
    id: 4,
    title: "World War I Timeline",
    subject: "History",
    description: "Create a detailed timeline of major WWI events",
    assignedDate: "2025-09-10",
    dueDate: "2025-09-16",
    estimatedTime: 120,
    actualTime: 30,
    status: "in-progress",
    priority: "low",
    difficulty: "medium",
    topics: ["World War I", "Timeline Creation"],
    resources: ["wwi_events.pdf", "timeline_template.docx"],
    isTracking: true
  },
  {
    id: 5,
    title: "Physics Motion Calculations",
    subject: "Physics",
    description: "Solve problems related to uniform motion and acceleration",
    assignedDate: "2025-09-13",
    dueDate: "2025-09-15",
    estimatedTime: 75,
    actualTime: 0,
    status: "not-started",
    priority: "high",
    difficulty: "hard",
    topics: ["Motion", "Acceleration", "Kinematics"],
    resources: ["motion_problems.pdf", "formula_sheet.pdf"],
    isTracking: false
  }
];

export default function StudentHomework() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSubject, setFilterSubject] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");
  const [homework, setHomework] = useState(mockHomework);

  const subjects = [...new Set(mockHomework.map(hw => hw.subject))];

  const filteredHomework = homework
    .filter(hw => {
      if (filterStatus !== "all" && hw.status !== filterStatus) return false;
      if (filterSubject !== "all" && hw.subject !== filterSubject) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "dueDate") {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
      if (sortBy === "priority") {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
      }
      if (sortBy === "subject") {
        return a.subject.localeCompare(b.subject);
      }
      return 0;
    });

  const toggleTimeTracking = (id: number) => {
    setHomework(prevHomework => 
      prevHomework.map(hw => 
        hw.id === id ? { ...hw, isTracking: !hw.isTracking } : hw
      )
    );
  };

  const updateStatus = (id: number, newStatus: string) => {
    setHomework(prevHomework => 
      prevHomework.map(hw => 
        hw.id === id ? { 
          ...hw, 
          status: newStatus, 
          completedDate: newStatus === 'completed' ? new Date().toISOString().split('T')[0] : undefined 
        } : hw
      )
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <ExclamationCircleIcon className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'hard':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
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
            <h1 className="text-3xl font-bold text-gray-900">Homework</h1>
            <p className="text-gray-600">Track and manage your daily homework assignments</p>
          </div>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Homework</p>
              <p className="text-2xl font-bold text-gray-900">{homework.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {homework.filter(hw => hw.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">
                {homework.filter(hw => hw.status === 'in-progress').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <ExclamationCircleIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">
                {homework.filter(hw => hw.status === 'not-started').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <FunnelIcon className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filters & Sort</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select 
              value={filterSubject} 
              onChange={(e) => setFilterSubject(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
              <option value="subject">Subject</option>
            </select>
          </div>
        </div>
      </div>

      {/* Homework List */}
      <div className="space-y-4">
        {filteredHomework.map((hw) => {
          const daysUntilDue = getDaysUntilDue(hw.dueDate);
          return (
            <div key={hw.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <BookOpenIcon className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{hw.title}</h3>
                    <p className="text-gray-600 mb-3">{hw.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Due: {new Date(hw.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>Subject: {hw.subject}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>Est: {formatTime(hw.estimatedTime)}</span>
                      </div>
                      {hw.actualTime > 0 && (
                        <div className="flex items-center space-x-1">
                          <span>Spent: {formatTime(hw.actualTime)}</span>
                        </div>
                      )}
                    </div>
                    
                    {hw.topics && hw.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {hw.topics.map((topic, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleTimeTracking(hw.id)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      hw.isTracking 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {hw.isTracking ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
                    <span>{hw.isTracking ? 'Stop' : 'Start'}</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(hw.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hw.status)}`}>
                      {hw.status.charAt(0).toUpperCase() + hw.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(hw.priority)}`}>
                    {hw.priority.charAt(0).toUpperCase() + hw.priority.slice(1)} Priority
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(hw.difficulty)}`}>
                    {hw.difficulty.charAt(0).toUpperCase() + hw.difficulty.slice(1)}
                  </span>
                  {hw.status === 'completed' && hw.completedDate && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      ✓ Completed: {new Date(hw.completedDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-gray-500">
                    {hw.status === 'completed' ? (
                      <span className="text-green-600 font-medium">Completed!</span>
                    ) : (
                      <span className={daysUntilDue < 0 ? 'text-red-600 font-medium' : daysUntilDue <= 1 ? 'text-yellow-600 font-medium' : ''}>
                        {daysUntilDue < 0 ? `Overdue by ${Math.abs(daysUntilDue)} days` : 
                         daysUntilDue === 0 ? 'Due today' : 
                         `${daysUntilDue} days remaining`}
                      </span>
                    )}
                  </div>
                  {hw.status !== 'completed' && (
                    <select
                      value={hw.status}
                      onChange={(e) => updateStatus(hw.id, e.target.value)}
                      className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="not-started">Not Started</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  )}
                </div>
              </div>

              {hw.resources && hw.resources.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Resources:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hw.resources.map((resource, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        📎 {resource}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredHomework.length === 0 && (
        <div className="text-center py-12">
          <BookOpenIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No homework found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more homework assignments.</p>
        </div>
      )}
    </div>
  );
}
