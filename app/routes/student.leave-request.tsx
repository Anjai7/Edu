import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  PaperAirplaneIcon,
  CalendarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  DocumentTextIcon,
  UserIcon,
  ArrowLeftIcon,
  EyeIcon,
  PlusIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Leave Request - Student Dashboard" },
    { name: "description", content: "Request leave and view your leave history" },
  ];
};

// Mock data - replace with actual data from your backend
const mockLeaveRequests = [
  {
    id: 1,
    startDate: "2025-09-20",
    endDate: "2025-09-22",
    type: "Medical Leave",
    reason: "Fever and flu symptoms, need to rest and recover",
    status: "approved",
    submittedDate: "2025-09-15",
    approvedBy: "Dr. Johnson - Academic Coordinator",
    approvedDate: "2025-09-16",
    attachments: ["medical_certificate.pdf"],
    comments: "Approved. Please ensure to catch up on missed assignments.",
    dayCount: 3
  },
  {
    id: 2,
    startDate: "2025-09-25",
    endDate: "2025-09-25",
    type: "Personal Leave",
    reason: "Family wedding ceremony attendance",
    status: "pending",
    submittedDate: "2025-09-13",
    approvedBy: null,
    approvedDate: null,
    attachments: ["wedding_invitation.jpg"],
    comments: null,
    dayCount: 1
  },
  {
    id: 3,
    startDate: "2025-08-15",
    endDate: "2025-08-17",
    type: "Emergency Leave",
    reason: "Family emergency - grandmother hospitalized",
    status: "approved",
    submittedDate: "2025-08-14",
    approvedBy: "Prof. Smith - Department Head",
    approvedDate: "2025-08-14",
    attachments: ["hospital_admission.pdf"],
    comments: "Emergency leave approved. Contact academic office for missed work.",
    dayCount: 3
  },
  {
    id: 4,
    startDate: "2025-07-10",
    endDate: "2025-07-12",
    type: "Medical Leave",
    reason: "Dental surgery recovery",
    status: "rejected",
    submittedDate: "2025-07-08",
    approvedBy: "Dr. Johnson - Academic Coordinator",
    approvedDate: "2025-07-09",
    attachments: ["dental_appointment.pdf"],
    comments: "Insufficient medical documentation. Please provide detailed medical certificate.",
    dayCount: 3
  }
];

const leaveTypes = [
  "Medical Leave",
  "Personal Leave",
  "Emergency Leave",
  "Family Leave",
  "Academic Leave",
  "Other"
];

export default function StudentLeaveRequest() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    type: "",
    reason: "",
    attachments: [] as File[]
  });
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const filteredRequests = mockLeaveRequests
    .filter(request => {
      if (filterStatus !== "all" && request.status !== filterStatus) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
      }
      if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setShowForm(false);
    setFormData({
      startDate: "",
      endDate: "",
      type: "",
      reason: "",
      attachments: []
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        attachments: Array.from(e.target.files || [])
      }));
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <ExclamationTriangleIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'medical leave':
        return 'bg-red-100 text-red-800';
      case 'personal leave':
        return 'bg-blue-100 text-blue-800';
      case 'emergency leave':
        return 'bg-orange-100 text-orange-800';
      case 'family leave':
        return 'bg-purple-100 text-purple-800';
      case 'academic leave':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const pendingCount = mockLeaveRequests.filter(req => req.status === 'pending').length;
  const approvedCount = mockLeaveRequests.filter(req => req.status === 'approved').length;
  const totalDaysUsed = mockLeaveRequests
    .filter(req => req.status === 'approved')
    .reduce((total, req) => total + req.dayCount, 0);

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
            <h1 className="text-3xl font-bold text-gray-900">Leave Request</h1>
            <p className="text-gray-600">Request leave and manage your leave applications</p>
          </div>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          <PlusIcon className="h-5 w-5" />
          <span>New Request</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DocumentTextIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900">{mockLeaveRequests.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Approved</p>
              <p className="text-2xl font-bold text-gray-900">{approvedCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <CalendarIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Days Used</p>
              <p className="text-2xl font-bold text-gray-900">{totalDaysUsed}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Request Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">New Leave Request</h2>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Leave Type <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select leave type</option>
                    {leaveTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Leave <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    placeholder="Please provide a detailed reason for your leave request..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Supporting Documents
                  </label>
                  <input 
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 5MB each)
                  </p>
                </div>

                {formData.startDate && formData.endDate && (
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Duration:</strong> {calculateDays(formData.startDate, formData.endDate)} day(s)
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                    <span>Submit Request</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Leave History</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="date">Sort by Date</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
        </div>

        {/* Leave Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div key={request.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {new Date(request.startDate).toLocaleDateString()} - {new Date(request.endDate).toLocaleDateString()}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`}>
                      {request.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>Duration: {request.dayCount} day(s)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="h-4 w-4" />
                      <span>Submitted: {new Date(request.submittedDate).toLocaleDateString()}</span>
                    </div>
                    {request.approvedBy && (
                      <div className="flex items-center space-x-2">
                        <UserIcon className="h-4 w-4" />
                        <span>By: {request.approvedBy.split(' - ')[0]}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-700 mb-3">{request.reason}</p>
                  
                  {request.comments && (
                    <div className={`p-3 rounded-md mb-3 ${
                      request.status === 'approved' ? 'bg-green-50 border border-green-200' :
                      request.status === 'rejected' ? 'bg-red-50 border border-red-200' :
                      'bg-yellow-50 border border-yellow-200'
                    }`}>
                      <p className="text-sm font-medium text-gray-700 mb-1">Comments:</p>
                      <p className="text-sm text-gray-600">{request.comments}</p>
                    </div>
                  )}

                  {request.attachments && request.attachments.length > 0 && (
                    <div className="border-t border-gray-200 pt-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
                      <div className="flex flex-wrap gap-2">
                        {request.attachments.map((attachment, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200">
                            📎 {attachment}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 ml-6">
                  {getStatusIcon(request.status)}
                  <Link 
                    to={`/student/leave-request/${request.id}`}
                    className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-md transition-colors"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No leave requests found</h3>
            <p className="text-gray-600">
              {filterStatus === "all" ? 
                "You haven't submitted any leave requests yet." :
                `No ${filterStatus} leave requests found.`
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
