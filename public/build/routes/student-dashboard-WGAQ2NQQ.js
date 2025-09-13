import {
  StudentNavigation
} from "/build/_shared/chunk-4REBNNFL.js";
import {
  AcademicCapIcon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  DocumentTextIcon_default,
  ExclamationCircleIcon_default,
  PaperAirplaneIcon_default,
  ShoppingBagIcon_default,
  SpeakerWaveIcon_default,
  UserGroupIcon_default
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/student-dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1757751994459.0176";
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
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 130,
          columnNumber: 16
        }, this);
      case "in-progress":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 132,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StudentNavigation, {}, void 0, false, {
      fileName: "app/routes/student-dashboard.tsx",
      lineNumber: 148,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-r from-blue-900 to-slate-800 rounded-2xl p-12 text-white shadow-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-bold mb-4", children: "Student Portal" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-blue-100 max-w-2xl mx-auto", children: "Your academic journey starts here. Manage assignments, track progress, and stay connected." }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: dashboardItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: "group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300` }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 163,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative p-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-lg`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-8 w-8 text-white" }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors", children: item.title }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-600 text-sm mb-4 leading-relaxed", children: item.description }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold text-slate-500 uppercase tracking-wider", children: item.stats }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-blue-900 group-hover:text-blue-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium mr-2", children: "Open" }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 183,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 185,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 184,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 182,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this)
      ] }, item.title, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 162,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 bg-white rounded-2xl shadow-lg p-8 border border-slate-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-slate-800 mb-8 text-center", children: "Quick Actions" }, void 0, false, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/leave-request", className: "group flex flex-col items-center p-6 bg-gradient-to-br from-blue-900 to-slate-800 rounded-xl text-white hover:from-blue-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-12 w-12 mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 198,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-lg", children: "Request Leave" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 199,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-100 text-sm mt-2", children: "Submit leave application" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 200,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/assignments", className: "group flex flex-col items-center p-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl text-white hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-12 w-12 mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-lg", children: "View Assignments" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-200 text-sm mt-2", children: "Check pending tasks" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/announcements", className: "group flex flex-col items-center p-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl text-white hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-12 w-12 mb-4 group-hover:scale-110 transition-transform" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 208,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-lg", children: "Announcements" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 209,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-200 text-sm mt-2", children: "Latest updates" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 210,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 207,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl shadow-lg p-8 border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-slate-800", children: "Recent Tasks" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 220,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/assignments", className: "text-blue-900 hover:text-blue-600 font-medium text-sm", children: "View All \u2192" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 221,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: mockTasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              getStatusIcon(task.status),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-slate-800", children: task.title }, void 0, false, {
                  fileName: "app/routes/student-dashboard.tsx",
                  lineNumber: 230,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: [
                  "Due: ",
                  new Date(task.dueDate).toLocaleDateString()
                ] }, void 0, true, {
                  fileName: "app/routes/student-dashboard.tsx",
                  lineNumber: 231,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 229,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 227,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${task.status === "completed" ? "bg-green-100 text-green-700" : task.status === "in-progress" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`, children: getStatusText(task.status) }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 234,
              columnNumber: 19
            }, this)
          ] }, task.id, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 226,
            columnNumber: 38
          }, this)) }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl shadow-lg p-8 border border-slate-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-slate-800", children: "Recent Announcements" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 244,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/announcements", className: "text-blue-900 hover:text-blue-600 font-medium text-sm", children: "View All \u2192" }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 245,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 243,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: mockAnnouncements.map((announcement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpeakerWaveIcon_default, { className: "h-5 w-5 text-blue-900" }, void 0, false, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-slate-800", children: announcement.title }, void 0, false, {
                  fileName: "app/routes/student-dashboard.tsx",
                  lineNumber: 254,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: new Date(announcement.date).toLocaleDateString() }, void 0, false, {
                  fileName: "app/routes/student-dashboard.tsx",
                  lineNumber: 255,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student-dashboard.tsx",
                lineNumber: 253,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 251,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${announcement.type === "academic" ? "bg-blue-100 text-blue-700" : announcement.type === "event" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`, children: announcement.type }, void 0, false, {
              fileName: "app/routes/student-dashboard.tsx",
              lineNumber: 258,
              columnNumber: 19
            }, this)
          ] }, announcement.id, true, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 250,
            columnNumber: 54
          }, this)) }, void 0, false, {
            fileName: "app/routes/student-dashboard.tsx",
            lineNumber: 249,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student-dashboard.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student-dashboard.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student-dashboard.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student-dashboard.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_c = StudentDashboard;
var _c;
$RefreshReg$(_c, "StudentDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student-dashboard-WGAQ2NQQ.js.map
