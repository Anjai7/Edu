import {
  ArrowLeftIcon_default,
  BookOpenIcon_default,
  CalendarIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  ExclamationCircleIcon_default,
  FunnelIcon_default,
  PauseIcon_default,
  PlayIcon_default
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

// app/routes/student.homework.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.homework.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.homework.tsx"
  );
  import.meta.hot.lastModified = "1757747467530.2625";
}
var meta = () => {
  return [{
    title: "Homework - Student Dashboard"
  }, {
    name: "description",
    content: "View and manage your homework assignments"
  }];
};
var mockHomework = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}];
function StudentHomework() {
  _s();
  const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
  const [filterSubject, setFilterSubject] = (0, import_react.useState)("all");
  const [sortBy, setSortBy] = (0, import_react.useState)("dueDate");
  const [homework, setHomework] = (0, import_react.useState)(mockHomework);
  const subjects = [...new Set(mockHomework.map((hw) => hw.subject))];
  const filteredHomework = homework.filter((hw) => {
    if (filterStatus !== "all" && hw.status !== filterStatus)
      return false;
    if (filterSubject !== "all" && hw.subject !== filterSubject)
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (sortBy === "priority") {
      const priorityOrder = {
        high: 3,
        medium: 2,
        low: 1
      };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    if (sortBy === "subject") {
      return a.subject.localeCompare(b.subject);
    }
    return 0;
  });
  const toggleTimeTracking = (id) => {
    setHomework((prevHomework) => prevHomework.map((hw) => hw.id === id ? {
      ...hw,
      isTracking: !hw.isTracking
    } : hw));
  };
  const updateStatus = (id, newStatus) => {
    setHomework((prevHomework) => prevHomework.map((hw) => hw.id === id ? {
      ...hw,
      status: newStatus,
      completedDate: newStatus === "completed" ? (/* @__PURE__ */ new Date()).toISOString().split("T")[0] : void 0
    } : hw));
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 156,
          columnNumber: 16
        }, this);
      case "in-progress":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 158,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 160,
          columnNumber: 16
        }, this);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "hard":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };
  const getDaysUntilDue = (dueDate) => {
    const today = /* @__PURE__ */ new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  };
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        "Back to Dashboard"
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Homework" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Track and manage your daily homework assignments" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.homework.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.homework.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpenIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 227,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Total Homework" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: homework.length }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 230,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Completed" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 243,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: homework.filter((hw) => hw.status === "completed").length }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 237,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "In Progress" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 257,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: homework.filter((hw) => hw.status === "in-progress").length }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 252,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleIcon_default, { className: "h-6 w-6 text-red-600" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 268,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Pending" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: homework.filter((hw) => hw.status === "not-started").length }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 270,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 266,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 265,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.homework.tsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 283,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: "Filters & Sort" }, void 0, false, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 284,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 282,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Status" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 290,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "not-started", children: "Not Started" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 291,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 292,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 293,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 289,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 287,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Subject" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterSubject, onChange: (e) => setFilterSubject(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Subjects" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 299,
              columnNumber: 15
            }, this),
            subjects.map((subject) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: subject, children: subject }, subject, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 300,
              columnNumber: 40
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 298,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort By" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 304,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "dueDate", children: "Due Date" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 306,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "priority", children: "Priority" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 307,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "subject", children: "Subject" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 308,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 305,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 303,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 286,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.homework.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: filteredHomework.map((hw) => {
      const daysUntilDue = getDaysUntilDue(hw.dueDate);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpenIcon_default, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 323,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 322,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 321,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: hw.title }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 327,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-3", children: hw.description }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 328,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6 text-sm text-gray-500 mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.homework.tsx",
                    lineNumber: 331,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Due: ",
                    new Date(hw.dueDate).toLocaleDateString()
                  ] }, void 0, true, {
                    fileName: "app/routes/student.homework.tsx",
                    lineNumber: 332,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.homework.tsx",
                  lineNumber: 330,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Subject: ",
                  hw.subject
                ] }, void 0, true, {
                  fileName: "app/routes/student.homework.tsx",
                  lineNumber: 335,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.homework.tsx",
                  lineNumber: 334,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.homework.tsx",
                    lineNumber: 338,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Est: ",
                    formatTime(hw.estimatedTime)
                  ] }, void 0, true, {
                    fileName: "app/routes/student.homework.tsx",
                    lineNumber: 339,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.homework.tsx",
                  lineNumber: 337,
                  columnNumber: 23
                }, this),
                hw.actualTime > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Spent: ",
                  formatTime(hw.actualTime)
                ] }, void 0, true, {
                  fileName: "app/routes/student.homework.tsx",
                  lineNumber: 342,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.homework.tsx",
                  lineNumber: 341,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 329,
                columnNumber: 21
              }, this),
              hw.topics && hw.topics.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-3", children: hw.topics.map((topic, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: topic }, index, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 347,
                columnNumber: 58
              }, this)) }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 346,
                columnNumber: 59
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 326,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 320,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => toggleTimeTracking(hw.id), className: `flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${hw.isTracking ? "bg-red-600 hover:bg-red-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"}`, children: [
            hw.isTracking ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PauseIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 355,
              columnNumber: 38
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlayIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 355,
              columnNumber: 74
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: hw.isTracking ? "Stop" : "Start" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 356,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 354,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 353,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 319,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
              getStatusIcon(hw.status),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hw.status)}`, children: hw.status.charAt(0).toUpperCase() + hw.status.slice(1).replace("-", " ") }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 365,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 363,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(hw.priority)}`, children: [
              hw.priority.charAt(0).toUpperCase() + hw.priority.slice(1),
              " Priority"
            ] }, void 0, true, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 369,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(hw.difficulty)}`, children: hw.difficulty.charAt(0).toUpperCase() + hw.difficulty.slice(1) }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 372,
              columnNumber: 19
            }, this),
            hw.status === "completed" && hw.completedDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium", children: [
              "\u2713 Completed: ",
              new Date(hw.completedDate).toLocaleDateString()
            ] }, void 0, true, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 375,
              columnNumber: 69
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 362,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: hw.status === "completed" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-600 font-medium", children: "Completed!" }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 381,
              columnNumber: 50
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: daysUntilDue < 0 ? "text-red-600 font-medium" : daysUntilDue <= 1 ? "text-yellow-600 font-medium" : "", children: daysUntilDue < 0 ? `Overdue by ${Math.abs(daysUntilDue)} days` : daysUntilDue === 0 ? "Due today" : `${daysUntilDue} days remaining` }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 381,
              columnNumber: 115
            }, this) }, void 0, false, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 380,
              columnNumber: 19
            }, this),
            hw.status !== "completed" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: hw.status, onChange: (e) => updateStatus(hw.id, e.target.value), className: "text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "not-started", children: "Not Started" }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 386,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 387,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
                fileName: "app/routes/student.homework.tsx",
                lineNumber: 388,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.homework.tsx",
              lineNumber: 385,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 379,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 361,
          columnNumber: 15
        }, this),
        hw.resources && hw.resources.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-4 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Resources:" }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 394,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: hw.resources.map((resource, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md", children: [
            "\u{1F4CE} ",
            resource
          ] }, index, true, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 396,
            columnNumber: 60
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.homework.tsx",
            lineNumber: 395,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.homework.tsx",
          lineNumber: 393,
          columnNumber: 59
        }, this)
      ] }, hw.id, true, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 318,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/student.homework.tsx",
      lineNumber: 315,
      columnNumber: 7
    }, this),
    filteredHomework.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpenIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 406,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No homework found" }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 407,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Try adjusting your filters to see more homework assignments." }, void 0, false, {
        fileName: "app/routes/student.homework.tsx",
        lineNumber: 408,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.homework.tsx",
      lineNumber: 405,
      columnNumber: 41
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.homework.tsx",
    lineNumber: 208,
    columnNumber: 10
  }, this);
}
_s(StudentHomework, "hvSAEhgz9PY29GQN8gCwbT6biZQ=");
_c = StudentHomework;
var _c;
$RefreshReg$(_c, "StudentHomework");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentHomework as default,
  meta
};
//# sourceMappingURL=/build/routes/student.homework-RGHKTZY2.js.map
