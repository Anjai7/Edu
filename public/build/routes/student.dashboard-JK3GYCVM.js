import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  AcademicCapIcon_default,
  Bars3Icon_default,
  BellIcon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  CogIcon_default,
  DocumentTextIcon_default,
  ExclamationCircleIcon_default,
  HomeIcon_default,
  PaperAirplaneIcon_default,
  ShoppingBagIcon_default,
  SpeakerWaveIcon_default,
  TrophyIcon_default,
  UserGroupIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-DBYJVH7L.js";
import {
  Link
} from "/build/_shared/chunk-PH6QN3RH.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";
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

// app/routes/student.dashboard.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1757764392879.8906";
}
var meta = () => {
  return [{
    title: "Student Dashboard - EduHub"
  }, {
    name: "description",
    content: "Your learning dashboard"
  }];
};
function StudentDashboard() {
  _s();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const navigationItems = [{
    name: "Dashboard",
    href: "/student/dashboard",
    icon: HomeIcon_default,
    current: true
  }, {
    name: "Assignments",
    href: "/student/assignments",
    icon: DocumentTextIcon_default,
    current: false
  }, {
    name: "Attendance",
    href: "/student/attendance",
    icon: CalendarDaysIcon_default,
    current: false
  }, {
    name: "Notes",
    href: "/student/notes",
    icon: BookOpenIcon_default,
    current: false
  }, {
    name: "Announcements",
    href: "/student/announcements",
    icon: BellIcon_default,
    current: false
  }, {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: TrophyIcon_default,
    current: false
  }, {
    name: "Canteen",
    href: "/student/canteen",
    icon: ShoppingBagIcon_default,
    current: false
  }, {
    name: "Leave Requests",
    href: "/student/leave-request",
    icon: PaperAirplaneIcon_default,
    current: false
  }, {
    name: "Profile",
    href: "/student/profile",
    icon: AcademicCapIcon_default,
    current: false
  }, {
    name: "Settings",
    href: "/student/settings",
    icon: CogIcon_default,
    current: false
  }];
  const dashboardItems = [{
    title: "Assignments",
    description: "View and submit your assignments",
    icon: DocumentTextIcon_default,
    href: "/student/assignments",
    stats: "3 pending",
    color: "from-blue-600 to-blue-700"
  }, {
    title: "Attendance",
    description: "Track your attendance record",
    icon: CalendarDaysIcon_default,
    href: "/student/attendance",
    stats: "92% this month",
    color: "from-green-600 to-green-700"
  }, {
    title: "Academic Performance",
    description: "View your grades and progress",
    icon: ChartBarIcon_default,
    href: "/student/performance",
    stats: "85% average",
    color: "from-purple-600 to-purple-700"
  }, {
    title: "Notes",
    description: "Access study materials and notes",
    icon: BookOpenIcon_default,
    href: "/student/notes",
    stats: "12 subjects",
    color: "from-indigo-600 to-indigo-700"
  }, {
    title: "Leaderboard",
    description: "See your class rankings",
    icon: TrophyIcon_default,
    href: "/student/leaderboard",
    stats: "Rank #5",
    color: "from-yellow-600 to-yellow-700"
  }, {
    title: "Study Groups",
    description: "Join or create study groups",
    icon: UserGroupIcon_default,
    href: "/student/study-groups",
    stats: "3 active groups",
    color: "from-pink-600 to-pink-700"
  }, {
    title: "Canteen",
    description: "Order food from canteen",
    icon: ShoppingBagIcon_default,
    href: "/student/canteen",
    stats: "25 items",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Announcements",
    description: "Important notifications",
    icon: SpeakerWaveIcon_default,
    href: "/student/announcements",
    stats: "3 new",
    color: "from-slate-600 to-slate-700"
  }];
  const mockTasks = [{
    id: 1,
    title: "Math Assignment #3",
    dueDate: "2024-01-20",
    status: "pending"
  }, {
    id: 2,
    title: "Physics Lab Report",
    dueDate: "2024-01-18",
    status: "in-progress"
  }, {
    id: 3,
    title: "English Essay",
    dueDate: "2024-01-15",
    status: "completed"
  }];
  const mockAnnouncements = [{
    id: 1,
    title: "Semester Exam Schedule Released",
    date: "2024-01-15",
    type: "academic"
  }, {
    id: 2,
    title: "Annual Science Fair",
    date: "2024-01-14",
    type: "event"
  }, {
    id: 3,
    title: "Library Hours Extended",
    date: "2024-01-13",
    type: "general"
  }];
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 185,
          columnNumber: 16
        }, this);
      case "in-progress":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 187,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 189,
          columnNumber: 16
        }, this);
    }
  };
  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Pending";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-blue-900 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-blue-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 210,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-200", children: "Student Portal" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 209,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-blue-200 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 213,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 208,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigationItems.map((item) => {
        const IconComponent = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${item.current ? "bg-blue-800 text-white shadow-lg" : "text-blue-200 hover:bg-blue-800 hover:text-white hover:shadow-md"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: `h-5 w-5 mr-3 ${item.current ? "text-blue-300" : "text-blue-400 group-hover:text-blue-300"}` }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 225,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 226,
            columnNumber: 21
          }, this),
          item.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto w-2 h-2 bg-blue-400 rounded-full" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 227,
            columnNumber: 38
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 224,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 220,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border-t border-blue-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white font-medium", children: "S" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 237,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 236,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-white truncate", children: "Student User" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-blue-300 truncate", children: "student@eduhub.com" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 241,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full mt-3 px-3 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800 rounded-md transition-colors", children: "Logout" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 205,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-blue-900 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-blue-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 260,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-200", children: "Student Portal" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 261,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 259,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-blue-200 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 264,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 263,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 258,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigationItems.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${item.current ? "bg-blue-800 text-white shadow-lg" : "text-blue-200 hover:bg-blue-800 hover:text-white hover:shadow-md"}`, onClick: () => setIsMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: `h-5 w-5 mr-3 ${item.current ? "text-blue-300" : "text-blue-400 group-hover:text-blue-300"}` }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 275,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 276,
              columnNumber: 25
            }, this),
            item.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto w-2 h-2 bg-blue-400 rounded-full" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 277,
              columnNumber: 42
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 274,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 271,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border-t border-blue-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white font-medium", children: "S" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 287,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 286,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-white truncate", children: "Student User" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 290,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-blue-300 truncate", children: "student@eduhub.com" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 291,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 289,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 285,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full mt-3 px-3 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-800 rounded-md transition-colors", children: "Logout" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 294,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 284,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 252,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between h-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-semibold text-gray-900", children: "Dashboard" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 308,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 307,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "p-2 text-gray-400 hover:text-gray-500 lg:hidden", onClick: () => setIsMobileMenuOpen(true), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 311,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white text-sm font-medium", children: "S" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 316,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 315,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-700", children: "Student User" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 318,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 314,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 310,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 306,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 305,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 304,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "px-4 sm:px-6 lg:px-8 py-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-2", children: "Welcome back, Student!" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 328,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Your academic journey starts here. Manage assignments, track progress, and stay connected." }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 331,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 327,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8", children: dashboardItems.map((item, index) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: "group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-slate-200 active:scale-95", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300` }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 341,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative p-4 sm:p-6 lg:p-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `inline-flex p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} mb-3 sm:mb-4 lg:mb-6 shadow-lg`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 345,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 344,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors", children: item.title }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 348,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2", children: item.description }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 352,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider", children: item.stats }, void 0, false, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 357,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-blue-900 group-hover:text-blue-600 transition-colors", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium mr-2", children: "Open" }, void 0, false, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 361,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 363,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 362,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 360,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 356,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 343,
              columnNumber: 19
            }, this)
          ] }, item.title, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 340,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mt-10 lg:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 lg:mb-8 text-center", children: "Quick Actions" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 374,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/leave-request", className: "group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg sm:rounded-xl text-white hover:from-blue-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 379,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-sm sm:text-base lg:text-lg", children: "Request Leave" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 380,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-100 text-xs sm:text-sm mt-1 sm:mt-2 text-center", children: "Submit application" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 381,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 378,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/assignments", className: "group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg sm:rounded-xl text-white hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 384,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-sm sm:text-base lg:text-lg", children: "View Assignments" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 385,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-200 text-xs sm:text-sm mt-1 sm:mt-2 text-center", children: "Check pending tasks" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 386,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 383,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/announcements", className: "group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg sm:rounded-xl text-white hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 389,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-sm sm:text-base lg:text-lg", children: "Announcements" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 390,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-200 text-xs sm:text-sm mt-1 sm:mt-2 text-center", children: "Latest updates" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 391,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 388,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 377,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 373,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4 sm:mb-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg sm:text-xl font-bold text-slate-800", children: "Recent Tasks" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 401,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/assignments", className: "text-blue-900 hover:text-blue-600 font-medium text-xs sm:text-sm", children: "View All \u2192" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 402,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 400,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3 sm:space-y-4", children: mockTasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1", children: [
                getStatusIcon(task.status),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-slate-800 text-sm sm:text-base truncate", children: task.title }, void 0, false, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 411,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs sm:text-sm text-slate-500", children: [
                    "Due: ",
                    new Date(task.dueDate).toLocaleDateString()
                  ] }, void 0, true, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 412,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 410,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 408,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${task.status === "completed" ? "bg-green-100 text-green-700" : task.status === "in-progress" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`, children: getStatusText(task.status) }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 415,
                columnNumber: 21
              }, this)
            ] }, task.id, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 407,
              columnNumber: 40
            }, this)) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 406,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 399,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4 sm:mb-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg sm:text-xl font-bold text-slate-800", children: "Recent Announcements" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 425,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/announcements", className: "text-blue-900 hover:text-blue-600 font-medium text-xs sm:text-sm", children: "View All \u2192" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 426,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 424,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3 sm:space-y-4", children: mockAnnouncements.map((announcement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-4 w-4 sm:h-5 sm:w-5 text-blue-900 flex-shrink-0" }, void 0, false, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 433,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-slate-800 text-sm sm:text-base truncate", children: announcement.title }, void 0, false, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 435,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs sm:text-sm text-slate-500", children: new Date(announcement.date).toLocaleDateString() }, void 0, false, {
                    fileName: "app/routes/student.dashboard.tsx",
                    lineNumber: 436,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 434,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 432,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${announcement.type === "academic" ? "bg-blue-100 text-blue-700" : announcement.type === "event" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`, children: announcement.type }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 439,
                columnNumber: 21
              }, this)
            ] }, announcement.id, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 431,
              columnNumber: 56
            }, this)) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 430,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 423,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 397,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-20 lg:hidden" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 448,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 326,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-5 gap-1", children: navigationItems.slice(0, 5).map((item) => {
      const IconComponent = item.icon;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex flex-col items-center py-2 px-1 text-xs font-medium transition-colors ${item.current ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-blue-600"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "h-5 w-5 mb-1" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 458,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: item.name }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 459,
          columnNumber: 17
        }, this)
      ] }, item.name, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 457,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 454,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 453,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.dashboard.tsx",
    lineNumber: 202,
    columnNumber: 10
  }, this);
}
_s(StudentDashboard, "QerECOS75+B7gv+k3q7FrDf39mc=");
_c = StudentDashboard;
var _c;
$RefreshReg$(_c, "StudentDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student.dashboard-JK3GYCVM.js.map
