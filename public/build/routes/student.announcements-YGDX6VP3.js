import {
  ArrowLeftIcon_default,
  BookmarkIcon_default,
  CalendarIcon_default,
  ExclamationTriangleIcon_default,
  EyeIcon_default,
  FunnelIcon_default,
  InformationCircleIcon_default,
  MegaphoneIcon_default,
  SpeakerWaveIcon_default,
  TagIcon_default,
  UserIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link
} from "/build/_shared/chunk-FPSUGEKY.js";
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

// app/routes/student.announcements.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.announcements.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.announcements.tsx"
  );
  import.meta.hot.lastModified = "1757747498258.303";
}
var meta = () => {
  return [{
    title: "Announcements - Student Dashboard"
  }, {
    name: "description",
    content: "View important announcements from administration"
  }];
};
var mockAnnouncements = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];
function StudentAnnouncements() {
  _s();
  const [filterCategory, setFilterCategory] = (0, import_react.useState)("all");
  const [filterPriority, setFilterPriority] = (0, import_react.useState)("all");
  const [filterRead, setFilterRead] = (0, import_react.useState)("all");
  const [sortBy, setSortBy] = (0, import_react.useState)("date");
  const [announcements, setAnnouncements] = (0, import_react.useState)(mockAnnouncements);
  const categories = [...new Set(mockAnnouncements.map((ann) => ann.category))];
  const filteredAnnouncements = announcements.filter((ann) => {
    if (filterCategory !== "all" && ann.category !== filterCategory)
      return false;
    if (filterPriority !== "all" && ann.priority !== filterPriority)
      return false;
    if (filterRead === "unread" && ann.readBy)
      return false;
    if (filterRead === "read" && !ann.readBy)
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    }
    if (sortBy === "priority") {
      const priorityOrder = {
        high: 3,
        medium: 2,
        low: 1
      };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });
  const toggleReadStatus = (id) => {
    setAnnouncements((prev) => prev.map((ann) => ann.id === id ? {
      ...ann,
      readBy: !ann.readBy
    } : ann));
  };
  const toggleBookmark = (id) => {
    setAnnouncements((prev) => prev.map((ann) => ann.id === id ? {
      ...ann,
      bookmarked: !ann.bookmarked
    } : ann));
  };
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "academic":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MegaphoneIcon_default, { className: "h-5 w-5 text-blue-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 186,
          columnNumber: 16
        }, this);
      case "events":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 188,
          columnNumber: 16
        }, this);
      case "facilities":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 190,
          columnNumber: 16
        }, this);
      case "health & safety":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 192,
          columnNumber: 16
        }, this);
      case "financial":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 194,
          columnNumber: 16
        }, this);
      case "technology":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-5 w-5 text-purple-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 196,
          columnNumber: 16
        }, this);
      case "student life":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, { className: "h-5 w-5 text-indigo-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 198,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 200,
          columnNumber: 16
        }, this);
    }
  };
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "academic":
        return "bg-blue-100 text-blue-800";
      case "events":
        return "bg-green-100 text-green-800";
      case "facilities":
        return "bg-gray-100 text-gray-800";
      case "health & safety":
        return "bg-red-100 text-red-800";
      case "financial":
        return "bg-yellow-100 text-yellow-800";
      case "technology":
        return "bg-purple-100 text-purple-800";
      case "student life":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-green-100 text-green-800 border-green-300";
    }
  };
  const getDaysAgo = (publishedDate) => {
    const today = /* @__PURE__ */ new Date();
    const published = new Date(publishedDate);
    const diffTime = today.getTime() - published.getTime();
    const diffDays = Math.floor(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays === 0)
      return "Today";
    if (diffDays === 1)
      return "Yesterday";
    if (diffDays < 7)
      return `${diffDays} days ago`;
    if (diffDays < 30)
      return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };
  const unreadCount = announcements.filter((ann) => !ann.readBy).length;
  const bookmarkedCount = announcements.filter((ann) => ann.bookmarked).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this),
        "Back to Dashboard"
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 250,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Announcements" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Stay updated with important school announcements" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 249,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Total" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 269,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: announcements.length }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 263,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-6 w-6 text-red-600" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Unread" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: unreadCount }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookmarkIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 290,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 289,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Bookmarked" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 293,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: bookmarkedCount }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 294,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 292,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 287,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 302,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 301,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "High Priority" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 305,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: announcements.filter((ann) => ann.priority === "high").length }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 306,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 304,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 300,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 299,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 317,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: "Filters & Sort" }, void 0, false, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 318,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 316,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Category" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 322,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterCategory, onChange: (e) => setFilterCategory(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Categories" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 324,
              columnNumber: 15
            }, this),
            categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category, children: category }, category, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 325,
              columnNumber: 43
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 321,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Priority" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 329,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterPriority, onChange: (e) => setFilterPriority(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Priorities" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 331,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "high", children: "High" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 332,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "medium", children: "Medium" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 333,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "low", children: "Low" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 334,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 330,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 328,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 338,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterRead, onChange: (e) => setFilterRead(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 340,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "unread", children: "Unread" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 341,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "read", children: "Read" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 342,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort By" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 346,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "date", children: "Date" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 348,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "priority", children: "Priority" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "category", children: "Category" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 350,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 347,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 345,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 315,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: filteredAnnouncements.map((announcement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${!announcement.readBy ? "border-l-4 border-blue-500" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-2", children: [
            getCategoryIcon(announcement.category),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: `text-xl font-semibold ${!announcement.readBy ? "text-gray-900" : "text-gray-700"}`, children: announcement.title }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 364,
              columnNumber: 21
            }, this),
            !announcement.readBy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium", children: "New" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 367,
              columnNumber: 46
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 362,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 text-sm text-gray-600 mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/student.announcements.tsx",
                lineNumber: 373,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: announcement.author }, void 0, false, {
                fileName: "app/routes/student.announcements.tsx",
                lineNumber: 374,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 372,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/student.announcements.tsx",
                lineNumber: 377,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: getDaysAgo(announcement.publishedDate) }, void 0, false, {
                fileName: "app/routes/student.announcements.tsx",
                lineNumber: 378,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 376,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2022" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 380,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: announcement.targetAudience }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 381,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 371,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4 leading-relaxed", children: announcement.content }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 383,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`, children: announcement.category }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 386,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)}`, children: [
              announcement.priority.toUpperCase(),
              " PRIORITY"
            ] }, void 0, true, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 389,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 385,
            columnNumber: 19
          }, this),
          announcement.tags && announcement.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: announcement.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TagIcon_default, { className: "h-3 w-3 mr-1" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 396,
              columnNumber: 27
            }, this),
            tag
          ] }, index, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 395,
            columnNumber: 62
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 394,
            columnNumber: 73
          }, this),
          announcement.attachments && announcement.attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments:" }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 402,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: announcement.attachments.map((attachment, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200", children: [
              "\u{1F4CE} ",
              attachment
            ] }, index, true, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 404,
              columnNumber: 78
            }, this)) }, void 0, false, {
              fileName: "app/routes/student.announcements.tsx",
              lineNumber: 403,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 401,
            columnNumber: 87
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 361,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-2 ml-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => toggleBookmark(announcement.id), className: `p-2 rounded-md transition-colors ${announcement.bookmarked ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-400 hover:text-yellow-600"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookmarkIcon_default, { className: `h-5 w-5 ${announcement.bookmarked ? "fill-current" : ""}` }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 412,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 411,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/student/announcements/${announcement.id}`, onClick: () => !announcement.readBy && toggleReadStatus(announcement.id), className: "p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 415,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.announcements.tsx",
            lineNumber: 414,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 410,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 360,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between pt-4 border-t border-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
          "Published: ",
          new Date(announcement.publishedDate).toLocaleDateString()
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 421,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => toggleReadStatus(announcement.id), className: `text-sm font-medium transition-colors ${announcement.readBy ? "text-gray-500 hover:text-blue-600" : "text-blue-600 hover:text-blue-800"}`, children: [
          "Mark as ",
          announcement.readBy ? "unread" : "read"
        ] }, void 0, true, {
          fileName: "app/routes/student.announcements.tsx",
          lineNumber: 424,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 420,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 359,
      columnNumber: 13
    }, this) }, announcement.id, false, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 358,
      columnNumber: 52
    }, this)) }, void 0, false, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 357,
      columnNumber: 7
    }, this),
    filteredAnnouncements.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 433,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No announcements found" }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 434,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Try adjusting your filters to see more announcements." }, void 0, false, {
        fileName: "app/routes/student.announcements.tsx",
        lineNumber: 435,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.announcements.tsx",
      lineNumber: 432,
      columnNumber: 46
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.announcements.tsx",
    lineNumber: 246,
    columnNumber: 10
  }, this);
}
_s(StudentAnnouncements, "xb4QeJg6N63HmltGqNeCl6phjt4=");
_c = StudentAnnouncements;
var _c;
$RefreshReg$(_c, "StudentAnnouncements");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentAnnouncements as default,
  meta
};
//# sourceMappingURL=/build/routes/student.announcements-YGDX6VP3.js.map
