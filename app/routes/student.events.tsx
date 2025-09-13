import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { 
  UserGroupIcon,
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  TagIcon,
  FunnelIcon,
  ArrowLeftIcon,
  EyeIcon,
  UserIcon,
  TicketIcon
} from "@heroicons/react/24/outline";

export const meta: MetaFunction = () => {
  return [
    { title: "Events - Student Dashboard" },
    { name: "description", content: "View school events and activities" },
  ];
};

// Mock data - replace with actual data from your backend
const mockEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    description: "Inter-house sports competition with various athletic events including track and field, swimming, and team sports.",
    date: "2025-09-25",
    startTime: "8:00 AM",
    endTime: "5:00 PM",
    venue: "School Sports Complex",
    category: "Sports",
    organizer: "Physical Education Department",
    maxParticipants: 500,
    registeredParticipants: 324,
    registrationDeadline: "2025-09-20",
    status: "open",
    isRegistered: false,
    requirements: ["Sports attire required", "Bring water bottle", "Medical clearance needed"],
    tags: ["Annual", "Competition", "All Students"]
  },
  {
    id: 2,
    title: "Science Exhibition",
    description: "Annual science fair showcasing innovative projects and experiments by students from all grades.",
    date: "2025-09-30",
    startTime: "9:00 AM",
    endTime: "4:00 PM",
    venue: "Main Auditorium",
    category: "Academic",
    organizer: "Science Department",
    maxParticipants: 200,
    registeredParticipants: 156,
    registrationDeadline: "2025-09-25",
    status: "open",
    isRegistered: true,
    requirements: ["Project proposal required", "Display materials to be provided", "Presentation skills"],
    tags: ["Academic", "Innovation", "Projects"]
  },
  {
    id: 3,
    title: "Cultural Festival",
    description: "Celebration of diverse cultures with performances, food stalls, and cultural exhibitions.",
    date: "2025-10-05",
    startTime: "10:00 AM",
    endTime: "8:00 PM",
    venue: "School Campus",
    category: "Cultural",
    organizer: "Cultural Committee",
    maxParticipants: 1000,
    registeredParticipants: 687,
    registrationDeadline: "2025-09-30",
    status: "open",
    isRegistered: false,
    requirements: ["Traditional attire encouraged", "Food handling certificate for stalls"],
    tags: ["Cultural", "Festival", "Community"]
  },
  {
    id: 4,
    title: "Math Olympiad",
    description: "Regional mathematics competition for advanced students to test problem-solving skills.",
    date: "2025-09-22",
    startTime: "10:00 AM",
    endTime: "1:00 PM",
    venue: "Computer Lab",
    category: "Academic",
    organizer: "Mathematics Department",
    maxParticipants: 50,
    registeredParticipants: 50,
    registrationDeadline: "2025-09-18",
    status: "full",
    isRegistered: true,
    requirements: ["Advanced mathematics knowledge", "Calculator allowed", "3-hour duration"],
    tags: ["Competition", "Mathematics", "Regional"]
  },
  {
    id: 5,
    title: "Environmental Awareness Workshop",
    description: "Interactive workshop on climate change, sustainability, and environmental conservation.",
    date: "2025-09-28",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    venue: "Conference Hall",
    category: "Workshop",
    organizer: "Environmental Club",
    maxParticipants: 100,
    registeredParticipants: 45,
    registrationDeadline: "2025-09-26",
    status: "open",
    isRegistered: false,
    requirements: ["Notebook and pen", "Interest in environmental issues"],
    tags: ["Environment", "Workshop", "Awareness"]
  },
  {
    id: 6,
    title: "Career Guidance Seminar",
    description: "Seminar with industry experts discussing career opportunities and guidance for students.",
    date: "2025-09-18",
    startTime: "11:00 AM",
    endTime: "1:00 PM",
    venue: "Library Hall",
    category: "Career",
    organizer: "Career Counseling Department",
    maxParticipants: 150,
    registeredParticipants: 150,
    registrationDeadline: "2025-09-15",
    status: "completed",
    isRegistered: true,
    requirements: ["Resume preparation", "Professional attire"],
    tags: ["Career", "Guidance", "Industry Experts"]
  }
];

export default function StudentEvents() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const categories = [...new Set(mockEvents.map(event => event.category))];

  const filteredEvents = mockEvents
    .filter(event => {
      if (filterCategory !== "all" && event.category !== filterCategory) return false;
      if (filterStatus !== "all" && event.status !== filterStatus) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const upcomingEvents = filteredEvents.filter(event => 
    event.status !== "completed" && new Date(event.date) >= new Date()
  );
  const pastEvents = filteredEvents.filter(event => 
    event.status === "completed" || new Date(event.date) < new Date()
  );

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'sports':
        return 'bg-green-100 text-green-800';
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'cultural':
        return 'bg-purple-100 text-purple-800';
      case 'workshop':
        return 'bg-yellow-100 text-yellow-800';
      case 'career':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'full':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getDaysUntilEvent = (eventDate: string) => {
    const today = new Date();
    const event = new Date(eventDate);
    const diffTime = event.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
            <h1 className="text-3xl font-bold text-gray-900">Events</h1>
            <p className="text-gray-600">Discover and participate in school events and activities</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <UserGroupIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Events</p>
              <p className="text-2xl font-bold text-gray-900">{mockEvents.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CalendarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">{upcomingEvents.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <TicketIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Registered</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockEvents.filter(event => event.isRegistered).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <UserIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Available Spots</p>
              <p className="text-2xl font-bold text-gray-900">
                {upcomingEvents.reduce((total, event) => 
                  total + (event.maxParticipants - event.registeredParticipants), 0
                )}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="full">Full</option>
              <option value="completed">Completed</option>
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
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
          {upcomingEvents.map((event) => {
            const daysUntil = getDaysUntilEvent(event.date);
            const availableSpots = event.maxParticipants - event.registeredParticipants;
            return (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </span>
                      {event.isRegistered && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          ✓ Registered
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-4 w-4" />
                        <span>{event.startTime} - {event.endTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UserIcon className="h-4 w-4" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>
                    
                    {event.tags && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                            <TagIcon className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-right ml-6">
                    <p className={`text-lg font-bold ${
                      daysUntil === 0 ? 'text-red-600' : 
                      daysUntil <= 3 ? 'text-yellow-600' : 
                      'text-green-600'
                    }`}>
                      {daysUntil === 0 ? 'Today' : 
                       daysUntil === 1 ? 'Tomorrow' : 
                       `${daysUntil} days`}
                    </p>
                    <div className="text-sm text-gray-500 mt-2">
                      <p>{event.registeredParticipants}/{event.maxParticipants} registered</p>
                      <p className={availableSpots <= 10 ? 'text-red-600 font-medium' : ''}>
                        {availableSpots} spots left
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Registration Deadline:</strong> {new Date(event.registrationDeadline).toLocaleDateString()}
                      </p>
                      {event.requirements && event.requirements.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Requirements:</p>
                          <ul className="text-sm text-gray-600">
                            {event.requirements.slice(0, 2).map((req, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                            {event.requirements.length > 2 && (
                              <li className="text-gray-500 text-xs">+{event.requirements.length - 2} more...</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Link 
                        to={`/student/events/${event.id}`}
                        className="flex items-center space-x-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                      >
                        <EyeIcon className="h-4 w-4" />
                        <span>View Details</span>
                      </Link>
                      {!event.isRegistered && event.status === 'open' && (
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Past Events</h2>
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-6 opacity-75">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      Completed
                    </span>
                    {event.isRegistered && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        ✓ Participated
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>Date: {new Date(event.date).toLocaleDateString()}</span>
                    <span>Venue: {event.venue}</span>
                    <span>Participants: {event.registeredParticipants}</span>
                  </div>
                </div>
                <Link 
                  to={`/student/events/${event.id}`}
                  className="flex items-center space-x-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                >
                  <EyeIcon className="h-4 w-4" />
                  <span>View Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <UserGroupIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more events.</p>
        </div>
      )}
    </div>
  );
}
