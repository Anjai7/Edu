import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  DocumentTextIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  FunnelIcon,
  EyeIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Assignments - Student Dashboard" },
    { name: "description", content: "View and manage your assignments" },
  ];
};

// Mock data - replace with actual data from your backend
const mockAssignments = [
  {
    id: 1,
    title: "Mathematics - Linear Algebra Problems",
    subject: "Mathematics",
    description: "Solve problems 1-15 from Chapter 8: Linear Equations and Matrix Operations",
    dueDate: "2025-09-15",
    assignedDate: "2025-09-10",
    status: "pending",
    priority: "high",
    totalMarks: 50,
    instructor: "Dr. Smith",
    attachments: ["linear_algebra_problems.pdf"]
  },
  {
    id: 2,
    title: "History Essay - World War II Impact",
    subject: "History",
    description: "Write a 1500-word essay on the social and economic impact of World War II",
    dueDate: "2025-09-18",
    assignedDate: "2025-09-08",
    status: "in-progress",
    priority: "medium",
    totalMarks: 100,
    instructor: "Prof. Johnson",
    attachments: ["essay_guidelines.pdf", "reference_materials.pdf"]
  },
  {
    id: 3,
    title: "Physics Lab Report - Pendulum Experiment",
    subject: "Physics",
    description: "Complete lab report on simple pendulum motion analysis",
    dueDate: "2025-09-20",
    assignedDate: "2025-09-12",
    status: "completed",
    priority: "low",
    totalMarks: 75,
    instructor: "Dr. Wilson",
    attachments: ["lab_template.docx"],
    submittedDate: "2025-09-14",
    grade: 72
  },
  {
    id: 4,
    title: "English Literature - Poetry Analysis",
    subject: "English",
    description: "Analyze three poems by Robert Frost focusing on themes and literary devices",
    dueDate: "2025-09-22",
    assignedDate: "2025-09-11",
    status: "pending",
    priority: "medium",
    totalMarks: 80,
    instructor: "Ms. Davis",
    attachments: ["poetry_collection.pdf"]
  },
  {
    id: 5,
    title: "Chemistry - Organic Compounds Study",
    subject: "Chemistry",
    description: "Research and present findings on 5 different organic compounds",
    dueDate: "2025-09-25",
    assignedDate: "2025-09-13",
    status: "pending",
    priority: "high",
    totalMarks: 90,
    instructor: "Dr. Brown",
    attachments: ["compound_list.pdf", "research_template.docx"]
  }
];

export default function StudentAssignments() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterSubject, setFilterSubject] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");

  const subjects = [...new Set(mockAssignments.map(assignment => assignment.subject))];

  const filteredAssignments = mockAssignments
    .filter(assignment => {
      if (filterStatus !== "all" && assignment.status !== filterStatus) return false;
      if (filterSubject !== "all" && assignment.subject !== filterSubject) return false;
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

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
            <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
            <p className="text-gray-600">View and manage your assignments</p>
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
              <option value="pending">Pending</option>
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

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => {
          const daysUntilDue = getDaysUntilDue(assignment.dueDate);
          return (
            <div key={assignment.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{assignment.title}</h3>
                    <p className="text-gray-600 mb-3">{assignment.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>Subject: {assignment.subject}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>Instructor: {assignment.instructor}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>Marks: {assignment.totalMarks}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Link 
                    to={`/student/assignments/${assignment.id}`}
                    className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors"
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span>View</span>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(assignment.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(assignment.priority)}`}>
                    {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                  </span>
                  {assignment.status === 'completed' && assignment.grade && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      Grade: {assignment.grade}/{assignment.totalMarks}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {assignment.status === 'completed' && assignment.submittedDate ? (
                    <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                  ) : (
                    <span className={daysUntilDue < 0 ? 'text-red-600 font-medium' : daysUntilDue <= 3 ? 'text-yellow-600 font-medium' : ''}>
                      {daysUntilDue < 0 ? `Overdue by ${Math.abs(daysUntilDue)} days` : 
                       daysUntilDue === 0 ? 'Due today' : 
                       `${daysUntilDue} days remaining`}
                    </span>
                  )}
                </div>
              </div>

              {assignment.attachments && assignment.attachments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
                  <div className="flex flex-wrap gap-2">
                    {assignment.attachments.map((attachment, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        📎 {attachment}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="text-center py-12">
          <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more assignments.</p>
        </div>
      )}
    </div>
  );
}
