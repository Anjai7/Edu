import {
  AcademicCapIcon_default,
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
  UserGroupIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-FPSUGEKY.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/DashboardCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\DashboardCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\DashboardCard.tsx"
  );
  import.meta.hot.lastModified = "1757742132178.7764";
}
function DashboardCard({
  title,
  description,
  icon: Icon,
  href,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: href, className: "block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${color} p-3 rounded-lg`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-6 w-6 text-white" }, void 0, false, {
      fileName: "app/components/DashboardCard.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/DashboardCard.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/DashboardCard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: title }, void 0, false, {
      fileName: "app/components/DashboardCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: description }, void 0, false, {
      fileName: "app/components/DashboardCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DashboardCard.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = DashboardCard;
var _c;
$RefreshReg$(_c, "DashboardCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/StudentNavigation.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1757745075424.5276";
}
function StudentNavigation() {
  _s();
  const location = useLocation();
  const navigation = [{
    name: "Dashboard",
    href: "/student-dashboard",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/student-dashboard", className: "text-xl font-bold text-blue-600", children: "Student Portal" }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:flex space-x-6 overflow-x-auto", children: navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: item.href, className: `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${active ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 85,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 95,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 94,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden border-t border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-2 py-3 space-y-1 max-h-64 overflow-y-auto", children: navigation.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: item.href, className: `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 108,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: item.name }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this)
      ] }, item.name, true, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 107,
        columnNumber: 20
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 102,
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
_c2 = StudentNavigation;
var _c2;
$RefreshReg$(_c2, "StudentNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/student-dashboard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student-dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student-dashboard.tsx"
  );
  import.meta.hot.lastModified = "1757745105695.172";
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
    description: "View and track your assignments and submissions",
    icon: DocumentTextIcon_default,
    href: "/student/assignments",
    color: "bg-blue-500"
  }, {
    title: "Academic Records",
    description: "Check your grades, transcripts, and academic progress",
    icon: AcademicCapIcon_default,
    href: "/student/records",
    color: "bg-green-500"
  }, {
    title: "Homework",
    description: "Manage your daily homework and practice tasks",
    icon: BookOpenIcon_default,
    href: "/student/homework",
    color: "bg-purple-500"
  }, {
    title: "Exam Timetable",
    description: "View upcoming exams and examination schedules",
    icon: CalendarDaysIcon_default,
    href: "/student/exam-timetable",
    color: "bg-red-500"
  }, {
    title: "Events",
    description: "Stay updated with school events and activities",
    icon: UserGroupIcon_default,
    href: "/student/events",
    color: "bg-yellow-500"
  }, {
    title: "Leaderboard",
    description: "Check your ranking and achievements",
    icon: ChartBarIcon_default,
    href: "/student/leaderboard",
    color: "bg-indigo-500"
  }, {
    title: "Canteen Stock",
    description: "View available items and stock in the canteen",
    icon: ShoppingBagIcon_default,
    href: "/student/canteen",
    color: "bg-orange-500"
  }, {
    title: "Announcements",
    description: "Read important announcements from administration",
    icon: SpeakerWaveIcon_default,
    href: "/student/announcements",
    color: "bg-pink-500"
  }];
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 123,
          columnNumber: 16
        }, this);
      case "in-progress":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 125,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 127,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StudentNavigation, {}, void 0, false, {
      fileName: "app/routes/student-dashboard.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto px-4 py-8 space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Student Dashboard" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 145,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Your comprehensive hub for academic tasks, announcements, and school activities." }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 148,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900", children: "Quick Actions" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 155,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/student/leave-request", className: "flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PaperAirplaneIcon_default, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 160,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Request Leave" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 161,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 159,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/student/assignments", className: "flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DocumentTextIcon_default, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 164,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "View Assignments" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 163,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/student/announcements", className: "flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SpeakerWaveIcon_default, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 168,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Latest Announcements" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 169,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 167,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 158,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 154,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900", children: "Recent Tasks" }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 177,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/student/assignments", className: "text-blue-600 hover:text-blue-800 font-medium", children: "View All" }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 178,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 176,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-3", children: mockTasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            getStatusIcon(task.status),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "font-medium text-gray-900", children: task.title }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 187,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
                "Due: ",
                new Date(task.dueDate).toLocaleDateString()
              ] }, void 0, true, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 188,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${task.status === "completed" ? "bg-green-100 text-green-800" : task.status === "in-progress" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, children: getStatusText(task.status) }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, task.id, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 183,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 182,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 175,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-semibold text-gray-900", children: "Recent Announcements" }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 201,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/student/announcements", className: "text-blue-600 hover:text-blue-800 font-medium", children: "View All" }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 202,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 200,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-3", children: mockAnnouncements.map((announcement) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SpeakerWaveIcon_default, { className: "h-5 w-5 text-blue-500" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "font-medium text-gray-900", children: announcement.title }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 211,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: new Date(announcement.date).toLocaleDateString() }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 212,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 210,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${announcement.type === "academic" ? "bg-blue-100 text-blue-800" : announcement.type === "event" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: announcement.type }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 215,
            columnNumber: 15
          }, this)
        ] }, announcement.id, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 207,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 206,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 199,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: dashboardItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DashboardCard, { title: item.title, description: item.description, icon: item.icon, href: item.href, color: item.color }, item.title, false, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 224,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 223,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student-dashboard.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student-dashboard.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_c3 = StudentDashboard;
var _c3;
$RefreshReg$(_c3, "StudentDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student-dashboard-CZJYMCCS.js.map
