import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  SpeakerWaveIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  MegaphoneIcon,
  UserIcon,
  TagIcon,
  FunnelIcon,
  ArrowLeftIcon,
  EyeIcon,
  BookmarkIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Announcements - Student Dashboard" },
    { name: "description", content: "View important announcements from administration" },
  ];
};

// Mock data - replace with actual data from your backend
const mockAnnouncements = [
  {
    id: 1,
    title: "Mid-Term Examination Schedule Released",
    content: "The mid-term examination timetable has been published. Students are advised to check their individual schedules and prepare accordingly. All exams will be conducted in the main examination halls starting from September 20th, 2025.",
    author: "Academic Office",
    publishedDate: "2025-09-13",
    category: "Academic",
    priority: "high",
    tags: ["Exams", "Schedule", "Important"],
    readBy: false,
    bookmarked: false,
    attachments: ["midterm_schedule.pdf", "exam_guidelines.pdf"],
    targetAudience: "All Students"
  },
  {
    id: 2,
    title: "Sports Day Event Postponed",
    content: "Due to unexpected weather conditions, the Annual Sports Day scheduled for September 18th has been postponed to September 25th, 2025. All registered participants will be notified separately. Registration remains open until September 22nd.",
    author: "Sports Department",
    publishedDate: "2025-09-12",
    category: "Events",
    priority: "medium",
    tags: ["Sports Day", "Event", "Postponed"],
    readBy: true,
    bookmarked: true,
    attachments: [],
    targetAudience: "All Students"
  },
  {
    id: 3,
    title: "Library Maintenance and Temporary Closure",
    content: "The main library will be closed for maintenance from September 16th to September 18th, 2025. During this period, students can access the digital library resources online. The reading rooms in Block C will remain open for study purposes.",
    author: "Library Administration",
    publishedDate: "2025-09-11",
    category: "Facilities",
    priority: "medium",
    tags: ["Library", "Maintenance", "Closure"],
    readBy: true,
    bookmarked: false,
    attachments: ["digital_resources_guide.pdf"],
    targetAudience: "All Students"
  },
  {
    id: 4,
    title: "Science Exhibition Registration Open",
    content: "Registration is now open for the Annual Science Exhibition scheduled for September 30th, 2025. Students interested in participating should submit their project proposals by September 20th. Cash prizes will be awarded to the top three projects in each category.",
    author: "Science Department",
    publishedDate: "2025-09-10",
    category: "Academic",
    priority: "low",
    tags: ["Science", "Exhibition", "Registration"],
    readBy: false,
    bookmarked: false,
    attachments: ["exhibition_rules.pdf", "project_template.docx"],
    targetAudience: "Science Students"
  },
  {
    id: 5,
    title: "New COVID-19 Safety Guidelines",
    content: "Updated safety protocols are now in effect across the campus. All students and staff are required to wear masks in indoor spaces and maintain social distancing. Hand sanitizers are available at all entrances and common areas.",
    author: "Health & Safety Committee",
    publishedDate: "2025-09-09",
    category: "Health & Safety",
    priority: "high",
    tags: ["COVID-19", "Safety", "Guidelines", "Mandatory"],
    readBy: true,
    bookmarked: true,
    attachments: ["safety_guidelines.pdf"],
    targetAudience: "All Students"
  },
  {
    id: 6,
    title: "Scholarship Application Deadline Extended",
    content: "The deadline for merit-based scholarship applications has been extended to September 25th, 2025. Students with a GPA of 3.5 or higher are eligible to apply. Application forms are available at the admissions office and online portal.",
    author: "Financial Aid Office",
    publishedDate: "2025-09-08",
    category: "Financial",
    priority: "medium",
    tags: ["Scholarship", "Deadline", "Merit"],
    readBy: false,
    bookmarked: false,
    attachments: ["scholarship_form.pdf", "eligibility_criteria.pdf"],
    targetAudience: "Eligible Students"
  },
  {
    id: 7,
    title: "Campus Wi-Fi Network Upgrade",
    content: "The campus Wi-Fi network will undergo major upgrades from September 15th to September 17th, 2025. During this period, internet connectivity may be intermittent. Students are advised to download necessary materials in advance.",
    author: "IT Department",
    publishedDate: "2025-09-07",
    category: "Technology",
    priority: "low",
    tags: ["Wi-Fi", "Upgrade", "Connectivity"],
    readBy: true,
    bookmarked: false,
    attachments: [],
    targetAudience: "All Students"
  },
  {
    id: 8,
    title: "Student Council Election Notice",
    content: "Nominations for Student Council positions are now open. Interested candidates can submit their applications by September 20th, 2025. Elections will be held on September 28th with results announced on September 30th.",
    author: "Student Affairs",
    publishedDate: "2025-09-06",
    category: "Student Life",
    priority: "medium",
    tags: ["Election", "Student Council", "Nominations"],
    readBy: false,
    bookmarked: true,
    attachments: ["nomination_form.pdf", "election_rules.pdf"],
    targetAudience: "All Students"
  }
];

export default function StudentAnnouncements() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterRead, setFilterRead] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [announcements, setAnnouncements] = useState(mockAnnouncements);

  const categories = [...new Set(mockAnnouncements.map(ann => ann.category))];

  const filteredAnnouncements = announcements
    .filter(ann => {
      if (filterCategory !== "all" && ann.category !== filterCategory) return false;
      if (filterPriority !== "all" && ann.priority !== filterPriority) return false;
      if (filterRead === "unread" && ann.readBy) return false;
      if (filterRead === "read" && !ann.readBy) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      }
      if (sortBy === "priority") {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
      }
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

  const toggleReadStatus = (id: number) => {
    setAnnouncements(prev => 
      prev.map(ann => 
        ann.id === id ? { ...ann, readBy: !ann.readBy } : ann
      )
    );
  };

  const toggleBookmark = (id: number) => {
    setAnnouncements(prev => 
      prev.map(ann => 
        ann.id === id ? { ...ann, bookmarked: !ann.bookmarked } : ann
      )
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'academic':
        return <MegaphoneIcon className="h-5 w-5 text-blue-500" />;
      case 'events':
        return <CalendarIcon className="h-5 w-5 text-green-500" />;
      case 'facilities':
        return <InformationCircleIcon className="h-5 w-5 text-gray-500" />;
      case 'health & safety':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
      case 'financial':
        return <InformationCircleIcon className="h-5 w-5 text-yellow-500" />;
      case 'technology':
        return <InformationCircleIcon className="h-5 w-5 text-purple-500" />;
      case 'student life':
        return <UserIcon className="h-5 w-5 text-indigo-500" />;
      default:
        return <SpeakerWaveIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'events':
        return 'bg-green-100 text-green-800';
      case 'facilities':
        return 'bg-gray-100 text-gray-800';
      case 'health & safety':
        return 'bg-red-100 text-red-800';
      case 'financial':
        return 'bg-yellow-100 text-yellow-800';
      case 'technology':
        return 'bg-purple-100 text-purple-800';
      case 'student life':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-green-100 text-green-800 border-green-300';
    }
  };

  const getDaysAgo = (publishedDate: string) => {
    const today = new Date();
    const published = new Date(publishedDate);
    const diffTime = today.getTime() - published.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const unreadCount = announcements.filter(ann => !ann.readBy).length;
  const bookmarkedCount = announcements.filter(ann => ann.bookmarked).length;

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
            <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
            <p className="text-gray-600">Stay updated with important school announcements</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <SpeakerWaveIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total</p>
              <p className="text-2xl font-bold text-gray-900">{announcements.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Unread</p>
              <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <BookmarkIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Bookmarked</p>
              <p className="text-2xl font-bold text-gray-900">{bookmarkedCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <InformationCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">High Priority</p>
              <p className="text-2xl font-bold text-gray-900">
                {announcements.filter(ann => ann.priority === 'high').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <FunnelIcon className="h-5 w-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filters & Sort</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
            <select 
              value={filterPriority} 
              onChange={(e) => setFilterPriority(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Read Status</label>
            <select 
              value={filterRead} 
              onChange={(e) => setFilterRead(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="date">Date</option>
              <option value="priority">Priority</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <div key={announcement.id} className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
            !announcement.readBy ? 'border-l-4 border-blue-500' : ''
          }`}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getCategoryIcon(announcement.category)}
                    <h3 className={`text-xl font-semibold ${!announcement.readBy ? 'text-gray-900' : 'text-gray-700'}`}>
                      {announcement.title}
                    </h3>
                    {!announcement.readBy && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <UserIcon className="h-4 w-4" />
                      <span>{announcement.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{getDaysAgo(announcement.publishedDate)}</span>
                    </div>
                    <span>•</span>
                    <span>{announcement.targetAudience}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{announcement.content}</p>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                      {announcement.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`}>
                      {announcement.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>

                  {announcement.tags && announcement.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {announcement.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          <TagIcon className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {announcement.attachments && announcement.attachments.length > 0 && (
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
                      <div className="flex flex-wrap gap-2">
                        {announcement.attachments.map((attachment, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200">
                            📎 {attachment}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-2 ml-6">
                  <button 
                    onClick={() => toggleBookmark(announcement.id)}
                    className={`p-2 rounded-md transition-colors ${
                      announcement.bookmarked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400 hover:text-yellow-600'
                    }`}
                  >
                    <BookmarkIcon className={`h-5 w-5 ${announcement.bookmarked ? 'fill-current' : ''}`} />
                  </button>
                  <Link 
                    to={`/student/announcements/${announcement.id}`}
                    onClick={() => !announcement.readBy && toggleReadStatus(announcement.id)}
                    className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md transition-colors"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Published: {new Date(announcement.publishedDate).toLocaleDateString()}
                </div>
                <button 
                  onClick={() => toggleReadStatus(announcement.id)}
                  className={`text-sm font-medium transition-colors ${
                    announcement.readBy ? 'text-gray-500 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  Mark as {announcement.readBy ? 'unread' : 'read'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <SpeakerWaveIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more announcements.</p>
        </div>
      )}
    </div>
  );
}
