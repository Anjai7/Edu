import {
  AcademicCapIcon_default,
  BellIcon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  DocumentTextIcon_default,
  ExclamationCircleIcon_default,
  HomeIcon_default,
  PaperAirplaneIcon_default,
  ShoppingBagIcon_default,
  SpeakerWaveIcon_default,
  TrophyIcon_default,
  UserGroupIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-PTZFFYVS.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/StudentNavigation.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\StudentNavigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\StudentNavigation.tsx"
  );
  import.meta.hot.lastModified = "1757747940333.8877";
}
function StudentNavigation() {
  _s();
  const location = useLocation();
  const navigation = [{
    name: "Dashboard",
    href: "/student/dashboard",
    icon: HomeIcon_default
  }, {
    name: "Assignments",
    href: "/student/assignments",
    icon: DocumentTextIcon_default
  }, {
    name: "Records",
    href: "/student/records",
    icon: AcademicCapIcon_default
  }, {
    name: "Homework",
    href: "/student/homework",
    icon: BookOpenIcon_default
  }, {
    name: "Exams",
    href: "/student/exam-timetable",
    icon: CalendarDaysIcon_default
  }, {
    name: "Events",
    href: "/student/events",
    icon: UserGroupIcon_default
  }, {
    name: "Leaderboard",
    href: "/student/leaderboard",
    icon: ChartBarIcon_default
  }, {
    name: "Canteen",
    href: "/student/canteen",
    icon: ShoppingBagIcon_default
  }, {
    name: "Announcements",
    href: "/student/announcements",
    icon: SpeakerWaveIcon_default
  }, {
    name: "Leave Request",
    href: "/student/leave-request",
    icon: PaperAirplaneIcon_default
  }];
  const isActive = (href) => {
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-gradient-to-r from-blue-900 to-slate-800 shadow-xl sticky top-0 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between h-16 sm:h-18 lg:h-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 sm:space-x-6 lg:space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/dashboard", className: "text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-blue-200 transition-colors", children: "Student Portal" }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex space-x-1 lg:space-x-2 overflow-x-auto scrollbar-hide", children: navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${active ? "bg-white bg-opacity-20 text-white shadow-lg" : "text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-3 w-3 lg:h-4 lg:w-4" }, void 0, false, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden lg:inline", children: item.name }, void 0, false, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "lg:hidden", children: [
              item.name.slice(0, 8),
              item.name.length > 8 ? "..." : ""
            ] }, void 0, true, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 86,
              columnNumber: 21
            }, this)
          ] }, item.name, true, {
            fileName: "app/components/StudentNavigation.tsx",
            lineNumber: 83,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "p-2 rounded-lg text-white hover:text-blue-200 hover:bg-white hover:bg-opacity-10 transition-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden border-t border-white border-opacity-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 py-3 space-y-1 max-h-64 overflow-y-auto", children: navigation.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${active ? "bg-white bg-opacity-20 text-white" : "text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 110,
          columnNumber: 19
        }, this)
      ] }, item.name, true, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 108,
        columnNumber: 20
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/StudentNavigation.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/StudentNavigation.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(StudentNavigation, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = StudentNavigation;
var _c;
$RefreshReg$(_c, "StudentNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/student.dashboard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1757747970452.198";
}
var meta = () => {
  return [{
    title: "Student Dashboard - EduHub"
  }, {
    name: "description",
    content: "Your comprehensive student dashboard for academic success"
  }];
};
var mockTasks = [{
  id: 1,
  title: "Math Assignment - Chapter 5",
  type: "assignment",
  dueDate: "2025-09-15",
  status: "pending"
}, {
  id: 2,
  title: "History Essay",
  type: "homework",
  dueDate: "2025-09-18",
  status: "in-progress"
}, {
  id: 3,
  title: "Physics Lab Report",
  type: "assignment",
  dueDate: "2025-09-20",
  status: "completed"
}];
var mockAnnouncements = [{
  id: 1,
  title: "Sports Day Postponed",
  date: "2025-09-13",
  type: "event"
}, {
  id: 2,
  title: "Mid-term Results Published",
  date: "2025-09-12",
  type: "academic"
}, {
  id: 3,
  title: "Library Maintenance",
  date: "2025-09-11",
  type: "facility"
}];
function StudentDashboard() {
  const dashboardItems = [{
    title: "Assignments",
    description: "Track and manage your assignments",
    icon: DocumentTextIcon_default,
    href: "/student/assignments",
    stats: "8 pending",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Records",
    description: "View your academic records",
    icon: AcademicCapIcon_default,
    href: "/student/records",
    stats: "GPA: 3.8",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Homework",
    description: "Daily homework and tasks",
    icon: BookOpenIcon_default,
    href: "/student/homework",
    stats: "5 due today",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Exam Timetable",
    description: "Upcoming examinations",
    icon: CalendarDaysIcon_default,
    href: "/student/exam-timetable",
    stats: "3 this week",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Events",
    description: "School events and activities",
    icon: UserGroupIcon_default,
    href: "/student/events",
    stats: "2 upcoming",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Leaderboard",
    description: "Rankings and achievements",
    icon: ChartBarIcon_default,
    href: "/student/leaderboard",
    stats: "Rank #12",
    color: "from-slate-600 to-slate-700"
  }, {
    title: "Canteen Stock",
    description: "Available canteen items",
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
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 130,
          columnNumber: 16
        }, this);
      case "in-progress":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 132,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 134,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StudentNavigation, {}, void 0, false, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center mb-8 sm:mb-10 lg:mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gradient-to-r from-blue-900 to-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4", children: "Student Portal" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm sm:text-lg lg:text-xl text-blue-100 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed", children: "Your academic journey starts here. Manage assignments, track progress, and stay connected." }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8", children: dashboardItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: item.href, className: "group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-slate-200 active:scale-95", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300` }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 163,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative p-4 sm:p-6 lg:p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `inline-flex p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} mb-3 sm:mb-4 lg:mb-6 shadow-lg`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(item.icon, { className: "h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors", children: item.title }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2", children: item.description }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider", children: item.stats }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center text-blue-900 group-hover:text-blue-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium mr-2", children: "Open" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 183,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 185,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 184,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 182,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this)
      ] }, item.title, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 162,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 sm:mt-10 lg:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 lg:mb-8 text-center", children: "Quick Actions" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/leave-request", className: "group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg sm:rounded-xl text-white hover:from-blue-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PaperAirplaneIcon_default, { className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 198,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-sm sm:text-base lg:text-lg", children: "Request Leave" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-blue-100 text-xs sm:text-sm mt-1 sm:mt-2 text-center", children: "Submit application" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 200,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/assignments", className: "group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg sm:rounded-xl text-white hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DocumentTextIcon_default, { className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-sm sm:text-base lg:text-lg", children: "View Assignments" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-200 text-xs sm:text-sm mt-1 sm:mt-2 text-center", children: "Check pending tasks" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/announcements", className: "group flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg sm:rounded-xl text-white hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SpeakerWaveIcon_default, { className: "h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 208,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-sm sm:text-base lg:text-lg", children: "Announcements" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 209,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-200 text-xs sm:text-sm mt-1 sm:mt-2 text-center", children: "Latest updates" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between mb-4 sm:mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg sm:text-xl font-bold text-slate-800", children: "Recent Tasks" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 220,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/assignments", className: "text-blue-900 hover:text-blue-600 font-medium text-xs sm:text-sm", children: "View All \u2192" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 221,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-3 sm:space-y-4", children: mockTasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1", children: [
              getStatusIcon(task.status),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "font-medium text-slate-800 text-sm sm:text-base truncate", children: task.title }, void 0, false, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 230,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs sm:text-sm text-slate-500", children: [
                  "Due: ",
                  new Date(task.dueDate).toLocaleDateString()
                ] }, void 0, true, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 231,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 229,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 227,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${task.status === "completed" ? "bg-green-100 text-green-700" : task.status === "in-progress" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`, children: getStatusText(task.status) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 234,
              columnNumber: 19
            }, this)
          ] }, task.id, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 226,
            columnNumber: 38
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between mb-4 sm:mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg sm:text-xl font-bold text-slate-800", children: "Recent Announcements" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 244,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/announcements", className: "text-blue-900 hover:text-blue-600 font-medium text-xs sm:text-sm", children: "View All \u2192" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 245,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-3 sm:space-y-4", children: mockAnnouncements.map((announcement) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SpeakerWaveIcon_default, { className: "h-4 w-4 sm:h-5 sm:w-5 text-blue-900 flex-shrink-0" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "font-medium text-slate-800 text-sm sm:text-base truncate", children: announcement.title }, void 0, false, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 254,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs sm:text-sm text-slate-500", children: new Date(announcement.date).toLocaleDateString() }, void 0, false, {
                  fileName: "app/routes/student.dashboard.tsx",
                  lineNumber: 255,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 253,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 251,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: `px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-2 whitespace-nowrap ${announcement.type === "academic" ? "bg-blue-100 text-blue-700" : announcement.type === "event" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`, children: announcement.type }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 258,
              columnNumber: 19
            }, this)
          ] }, announcement.id, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 250,
            columnNumber: 54
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 249,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 lg:hidden z-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-4 gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/dashboard", className: "flex flex-col items-center py-2 px-1 text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BookOpenIcon_default, { className: "h-5 w-5 mb-1" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-medium", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 271,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/assignments", className: "flex flex-col items-center py-2 px-1 text-slate-600 hover:text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DocumentTextIcon_default, { className: "h-5 w-5 mb-1" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 274,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-medium", children: "Tasks" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 273,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/announcements", className: "flex flex-col items-center py-2 px-1 text-slate-600 hover:text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BellIcon_default, { className: "h-5 w-5 mb-1" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 278,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-medium", children: "Alerts" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student/leaderboard", className: "flex flex-col items-center py-2 px-1 text-slate-600 hover:text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TrophyIcon_default, { className: "h-5 w-5 mb-1" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs font-medium", children: "Rank" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 283,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 281,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 267,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-16 lg:hidden" }, void 0, false, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.dashboard.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_c2 = StudentDashboard;
var _c2;
$RefreshReg$(_c2, "StudentDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student.dashboard-LEMO3KMR.js.map
