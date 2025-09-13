import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  AcademicCapIcon_default,
  ArrowRightOnRectangleIcon_default,
  Bars3Icon_default,
  BellIcon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  ChartPieIcon_default,
  CogIcon_default,
  DocumentTextIcon_default,
  HomeIcon_default,
  StarIcon_default,
  TrophyIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-DBYJVH7L.js";
import {
  Link,
  useLoaderData,
  useNavigate
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

// app/routes/student.performance.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.performance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.performance.tsx"
  );
  import.meta.hot.lastModified = "1757763759167.921";
}
var meta = () => {
  return [{
    title: "Academic Performance - EduHub Student"
  }, {
    name: "description",
    content: "Track your academic performance and progress"
  }];
};
function StudentAcademicPerformance() {
  _s();
  const {
    performanceData,
    last6Months,
    overallPercentage,
    totalPoints,
    totalEarned,
    totalAssignments,
    courses
  } = useLoaderData();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const [selectedCourse, setSelectedCourse] = (0, import_react2.useState)("all");
  const handleLogout = async () => {
    try {
      localStorage.removeItem("student_session");
      sessionStorage.clear();
      navigate("/", {
        replace: true
      });
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/", {
        replace: true
      });
    }
  };
  const navigation = [{
    name: "Dashboard",
    href: "/student/dashboard",
    icon: HomeIcon_default,
    current: false
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
    name: "Performance",
    href: "/student/academic-performance",
    icon: ChartBarIcon_default,
    current: true
  }, {
    name: "Leaderboard",
    href: "/student/leaderboard",
    icon: TrophyIcon_default,
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
    name: "Profile",
    href: "/student/profile",
    icon: CogIcon_default,
    current: false
  }];
  const getGradeColor = (percentage) => {
    if (percentage >= 90)
      return "text-green-600 bg-green-50";
    if (percentage >= 80)
      return "text-blue-600 bg-blue-50";
    if (percentage >= 70)
      return "text-yellow-600 bg-yellow-50";
    if (percentage >= 60)
      return "text-orange-600 bg-orange-50";
    return "text-red-600 bg-red-50";
  };
  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90)
      return {
        level: "Excellent",
        emoji: "\u{1F31F}"
      };
    if (percentage >= 80)
      return {
        level: "Good",
        emoji: "\u{1F44D}"
      };
    if (percentage >= 70)
      return {
        level: "Average",
        emoji: "\u{1F44C}"
      };
    if (percentage >= 60)
      return {
        level: "Below Average",
        emoji: "\u{1F4C8}"
      };
    return {
      level: "Needs Improvement",
      emoji: "\u{1F4DA}"
    };
  };
  const performanceLevel = getPerformanceLevel(overallPercentage);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 256,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 259,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 253,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 252,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: [
        navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 269,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 268,
            columnNumber: 22
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleLogout, className: "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightOnRectangleIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Logout" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 277,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 265,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.performance.tsx",
      lineNumber: 251,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.performance.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 292,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 291,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 296,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 290,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 289,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: [
          navigation.map((item) => {
            const IconComponent = item.icon;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 306,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 307,
                columnNumber: 25
              }, this)
            ] }, item.name, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 305,
              columnNumber: 24
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setIsMobileMenuOpen(false);
            handleLogout();
          }, className: "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightOnRectangleIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 316,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Logout" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 317,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 302,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 301,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 288,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 287,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.performance.tsx",
      lineNumber: 285,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Academic Performance" }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 329,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 328,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 331,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "\u{1F4CA} Academic Performance" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 338,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Track your academic progress and performance metrics" }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-6 text-white mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: [
                performanceLevel.emoji,
                " Overall Performance"
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 346,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-purple-100", children: "Current Academic Standing" }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 347,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 345,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl font-bold", children: [
                overallPercentage,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 350,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-purple-100", children: performanceLevel.level }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 351,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 344,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-8 w-8 mr-3" }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 358,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: totalAssignments }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 360,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-purple-100", children: "Total Assignments" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 361,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 359,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 357,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 356,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "h-8 w-8 mr-3" }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 368,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: totalEarned }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 370,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-purple-100", children: "Points Earned" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 371,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 369,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 367,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 366,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartPieIcon_default, { className: "h-8 w-8 mr-3" }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 378,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: totalPoints }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 380,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-purple-100", children: "Total Points" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 381,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 379,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 376,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 355,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 343,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "\u{1F4C8} Monthly Performance Trend" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 391,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Your performance over the last 6 months" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 392,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 390,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end justify-between h-64", children: last6Months.map((month, index) => {
            const height = month.percentage > 0 ? Math.max(month.percentage / 100 * 200, 20) : 20;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center flex-1 mx-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-full max-w-12 rounded-t-lg ${month.percentage >= 80 ? "bg-green-500" : month.percentage >= 60 ? "bg-blue-500" : month.percentage >= 40 ? "bg-yellow-500" : "bg-red-500"}`, style: {
                height: `${height}px`
              }, title: `${month.monthName}: ${month.percentage}%` }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 399,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-600 mt-2 transform -rotate-45 origin-center", children: month.monthName }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 402,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-semibold text-gray-700 mt-1", children: [
                month.percentage,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 405,
                columnNumber: 23
              }, this)
            ] }, index, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 398,
              columnNumber: 24
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 395,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 394,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 389,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "\u{1F4DA} Course Performance" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 417,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Detailed performance breakdown by course" }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 418,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 416,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: Object.values(performanceData).map((course, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-6 w-6 text-blue-500 mr-3" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 424,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm font-medium text-gray-900", children: course.courseName }, void 0, false, {
                    fileName: "app/routes/student.performance.tsx",
                    lineNumber: 426,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                    course.completedAssignments,
                    " assignments completed"
                  ] }, void 0, true, {
                    fileName: "app/routes/student.performance.tsx",
                    lineNumber: 427,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 425,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 423,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(course.averageScore)}`, children: [
                course.averageScore,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 431,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 430,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 422,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 rounded-full ${course.averageScore >= 80 ? "bg-green-500" : course.averageScore >= 60 ? "bg-blue-500" : course.averageScore >= 40 ? "bg-yellow-500" : "bg-red-500"}`, style: {
              width: `${course.averageScore}%`
            } }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 438,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 437,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Points Earned" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 445,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: [
                  course.earnedPoints,
                  "/",
                  course.totalPoints
                ] }, void 0, true, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 446,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 444,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Assignments" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 449,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: course.completedAssignments }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 450,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 448,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Average Score" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 453,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: [
                  course.averageScore,
                  "%"
                ] }, void 0, true, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 454,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 452,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Performance" }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 457,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: getPerformanceLevel(course.averageScore).level }, void 0, false, {
                  fileName: "app/routes/student.performance.tsx",
                  lineNumber: 458,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.performance.tsx",
                lineNumber: 456,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.performance.tsx",
              lineNumber: 443,
              columnNumber: 19
            }, this)
          ] }, index, true, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 421,
            columnNumber: 70
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.performance.tsx",
            lineNumber: 420,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.performance.tsx",
          lineNumber: 415,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.performance.tsx",
        lineNumber: 336,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.performance.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.performance.tsx",
    lineNumber: 248,
    columnNumber: 10
  }, this);
}
_s(StudentAcademicPerformance, "8z6Ab45C24TYFBG23YiYH0yN29M=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = StudentAcademicPerformance;
var _c;
$RefreshReg$(_c, "StudentAcademicPerformance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentAcademicPerformance as default,
  meta
};
//# sourceMappingURL=/build/routes/student.performance-SABA5YRX.js.map
