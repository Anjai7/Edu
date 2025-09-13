import {
  ArrowLeftIcon_default,
  CalendarIcon_default,
  ClockIcon_default,
  EyeIcon_default,
  FunnelIcon_default,
  MapPinIcon_default,
  TagIcon_default,
  TicketIcon_default,
  UserGroupIcon_default,
  UserIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link
} from "/build/_shared/chunk-PTZFFYVS.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/student.events.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.events.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.events.tsx"
  );
  import.meta.hot.lastModified = "1757744669523.53";
}
var meta = () => {
  return [{
    title: "Events - Student Dashboard"
  }, {
    name: "description",
    content: "View school events and activities"
  }];
};
var mockEvents = [{
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
}, {
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
}, {
  id: 3,
  title: "Cultural Festival",
  description: "Celebration of diverse cultures with performances, food stalls, and cultural exhibitions.",
  date: "2025-10-05",
  startTime: "10:00 AM",
  endTime: "8:00 PM",
  venue: "School Campus",
  category: "Cultural",
  organizer: "Cultural Committee",
  maxParticipants: 1e3,
  registeredParticipants: 687,
  registrationDeadline: "2025-09-30",
  status: "open",
  isRegistered: false,
  requirements: ["Traditional attire encouraged", "Food handling certificate for stalls"],
  tags: ["Cultural", "Festival", "Community"]
}, {
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
}, {
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
}, {
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
}];
function StudentEvents() {
  _s();
  const [filterCategory, setFilterCategory] = (0, import_react.useState)("all");
  const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
  const [sortBy, setSortBy] = (0, import_react.useState)("date");
  const categories = [...new Set(mockEvents.map((event) => event.category))];
  const filteredEvents = mockEvents.filter((event) => {
    if (filterCategory !== "all" && event.category !== filterCategory)
      return false;
    if (filterStatus !== "all" && event.status !== filterStatus)
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  const upcomingEvents = filteredEvents.filter((event) => event.status !== "completed" && new Date(event.date) >= /* @__PURE__ */ new Date());
  const pastEvents = filteredEvents.filter((event) => event.status === "completed" || new Date(event.date) < /* @__PURE__ */ new Date());
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "sports":
        return "bg-green-100 text-green-800";
      case "academic":
        return "bg-blue-100 text-blue-800";
      case "cultural":
        return "bg-purple-100 text-purple-800";
      case "workshop":
        return "bg-yellow-100 text-yellow-800";
      case "career":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "full":
        return "bg-red-100 text-red-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };
  const getDaysUntilEvent = (eventDate) => {
    const today = /* @__PURE__ */ new Date();
    const event = new Date(eventDate);
    const diffTime = event.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student-dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        "Back to Dashboard"
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Events" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Discover and participate in school events and activities" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 197,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGroupIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 214,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Total Events" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockEvents.length }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 216,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 226,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Upcoming" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: upcomingEvents.length }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TicketIcon_default, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 238,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Registered" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockEvents.filter((event) => event.isRegistered).length }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 252,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Available Spots" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: upcomingEvents.reduce((total, event) => total + (event.maxParticipants - event.registeredParticipants), 0) }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 249,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 267,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: "Filters & Sort" }, void 0, false, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 268,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 266,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Category" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 272,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterCategory, onChange: (e) => setFilterCategory(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Categories" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 274,
              columnNumber: 15
            }, this),
            categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category, children: category }, category, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 275,
              columnNumber: 43
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 273,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Status" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 281,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "open", children: "Open" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 282,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "full", children: "Full" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 283,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 284,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort By" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "date", children: "Date" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 290,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "title", children: "Title" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 291,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 289,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 287,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 270,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this),
    upcomingEvents.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900", children: "Upcoming Events" }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 299,
        columnNumber: 11
      }, this),
      upcomingEvents.map((event) => {
        const daysUntil = getDaysUntilEvent(event.date);
        const availableSpots = event.maxParticipants - event.registeredParticipants;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: event.title }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 307,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`, children: event.category }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`, children: event.status.charAt(0).toUpperCase() + event.status.slice(1) }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 311,
                  columnNumber: 23
                }, this),
                event.isRegistered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium", children: "\u2713 Registered" }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 314,
                  columnNumber: 46
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 306,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-3", children: event.description }, void 0, false, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 318,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 321,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: new Date(event.date).toLocaleDateString() }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 322,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 320,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 325,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    event.startTime,
                    " - ",
                    event.endTime
                  ] }, void 0, true, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 326,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 324,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 329,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: event.venue }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 330,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 328,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 333,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: event.organizer }, void 0, false, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 334,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 332,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 319,
                columnNumber: 21
              }, this),
              event.tags && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-3", children: event.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TagIcon_default, { className: "h-3 w-3 mr-1" }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 340,
                  columnNumber: 29
                }, this),
                tag
              ] }, index, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 339,
                columnNumber: 57
              }, this)) }, void 0, false, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 338,
                columnNumber: 36
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 305,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right ml-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-lg font-bold ${daysUntil === 0 ? "text-red-600" : daysUntil <= 3 ? "text-yellow-600" : "text-green-600"}`, children: daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : `${daysUntil} days` }, void 0, false, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 346,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 mt-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                  event.registeredParticipants,
                  "/",
                  event.maxParticipants,
                  " registered"
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 350,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: availableSpots <= 10 ? "text-red-600 font-medium" : "", children: [
                  availableSpots,
                  " spots left"
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 351,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 349,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 345,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 304,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Registration Deadline:" }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 362,
                  columnNumber: 25
                }, this),
                " ",
                new Date(event.registrationDeadline).toLocaleDateString()
              ] }, void 0, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 361,
                columnNumber: 23
              }, this),
              event.requirements && event.requirements.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-700 mb-1", children: "Requirements:" }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 365,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-600", children: [
                  event.requirements.slice(0, 2).map((req, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-500 mt-1.5 flex-shrink-0", children: "\u2022" }, void 0, false, {
                      fileName: "app/routes/student.events.tsx",
                      lineNumber: 368,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: req }, void 0, false, {
                      fileName: "app/routes/student.events.tsx",
                      lineNumber: 369,
                      columnNumber: 33
                    }, this)
                  ] }, index, true, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 367,
                    columnNumber: 81
                  }, this)),
                  event.requirements.length > 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "text-gray-500 text-xs", children: [
                    "+",
                    event.requirements.length - 2,
                    " more..."
                  ] }, void 0, true, {
                    fileName: "app/routes/student.events.tsx",
                    lineNumber: 371,
                    columnNumber: 63
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 366,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 364,
                columnNumber: 79
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 360,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2 ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/student/events/${event.id}`, className: "flex items-center space-x-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm transition-colors", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 377,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/student.events.tsx",
                  lineNumber: 378,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 376,
                columnNumber: 23
              }, this),
              !event.isRegistered && event.status === "open" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors", children: "Register" }, void 0, false, {
                fileName: "app/routes/student.events.tsx",
                lineNumber: 380,
                columnNumber: 74
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 375,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 359,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 358,
            columnNumber: 17
          }, this)
        ] }, event.id, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 303,
          columnNumber: 16
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 298,
      columnNumber: 37
    }, this),
    pastEvents.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900", children: "Past Events" }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 392,
        columnNumber: 11
      }, this),
      pastEvents.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 opacity-75", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: event.title }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 397,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`, children: event.category }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 398,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium", children: "Completed" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 401,
              columnNumber: 21
            }, this),
            event.isRegistered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium", children: "\u2713 Participated" }, void 0, false, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 404,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 396,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-2", children: event.description }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 408,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "Date: ",
              new Date(event.date).toLocaleDateString()
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 410,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "Venue: ",
              event.venue
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 411,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "Participants: ",
              event.registeredParticipants
            ] }, void 0, true, {
              fileName: "app/routes/student.events.tsx",
              lineNumber: 412,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 409,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 395,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/student/events/${event.id}`, className: "flex items-center space-x-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 416,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
            fileName: "app/routes/student.events.tsx",
            lineNumber: 417,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.events.tsx",
          lineNumber: 415,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 394,
        columnNumber: 15
      }, this) }, event.id, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 393,
        columnNumber: 36
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 391,
      columnNumber: 33
    }, this),
    filteredEvents.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGroupIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 424,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No events found" }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 425,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Try adjusting your filters to see more events." }, void 0, false, {
        fileName: "app/routes/student.events.tsx",
        lineNumber: 426,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.events.tsx",
      lineNumber: 423,
      columnNumber: 39
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.events.tsx",
    lineNumber: 194,
    columnNumber: 10
  }, this);
}
_s(StudentEvents, "3iPPhPKdE/aGpavN+79iKBFXWmY=");
_c = StudentEvents;
var _c;
$RefreshReg$(_c, "StudentEvents");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentEvents as default,
  meta
};
//# sourceMappingURL=/build/routes/student.events-VILLP52B.js.map
