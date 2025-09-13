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
  CogIcon_default,
  DocumentTextIcon_default,
  FireIcon_default,
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

// app/routes/student.leaderboard.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/@heroicons/react/24/solid/esm/StarIcon.js
var React = __toESM(require_react(), 1);
function StarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = /* @__PURE__ */ React.forwardRef(StarIcon);
var StarIcon_default2 = ForwardRef;

// app/routes/student.leaderboard.tsx
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.leaderboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.leaderboard.tsx"
  );
  import.meta.hot.lastModified = "1757764209508.6582";
}
var meta = () => {
  return [{
    title: "Leaderboard - EduHub Student"
  }, {
    name: "description",
    content: "Track your progress and compete with classmates"
  }];
};
function StudentLeaderboard() {
  _s();
  const {
    leaderboardData,
    currentStudent,
    currentRank,
    courseStats,
    recentAchievements,
    totalEarnedPoints,
    overallProgress,
    currentStudentId
  } = useLoaderData();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const [activeTab, setActiveTab] = (0, import_react2.useState)("overall");
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
    current: false
  }, {
    name: "Leaderboard",
    href: "/student/leaderboard",
    icon: TrophyIcon_default,
    current: true
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
  const getRankBadge = (rank) => {
    if (rank === 1)
      return {
        icon: TrophyIcon_default,
        color: "text-yellow-500",
        bg: "bg-yellow-50"
      };
    if (rank === 2)
      return {
        icon: TrophyIcon_default,
        color: "text-gray-400",
        bg: "bg-gray-50"
      };
    if (rank === 3)
      return {
        icon: TrophyIcon_default,
        color: "text-orange-500",
        bg: "bg-orange-50"
      };
    return {
      icon: StarIcon_default,
      color: "text-blue-500",
      bg: "bg-blue-50"
    };
  };
  const getProgressColor = (progress) => {
    if (progress >= 90)
      return "bg-green-500";
    if (progress >= 75)
      return "bg-blue-500";
    if (progress >= 60)
      return "bg-yellow-500";
    return "bg-red-500";
  };
  const getStreakLevel = (points) => {
    if (points >= 1e3)
      return {
        level: "Expert",
        color: "text-purple-600",
        fires: 5
      };
    if (points >= 500)
      return {
        level: "Advanced",
        color: "text-blue-600",
        fires: 4
      };
    if (points >= 250)
      return {
        level: "Intermediate",
        color: "text-green-600",
        fires: 3
      };
    if (points >= 100)
      return {
        level: "Beginner",
        color: "text-yellow-600",
        fires: 2
      };
    return {
      level: "Starter",
      color: "text-gray-600",
      fires: 1
    };
  };
  const currentStudentStreak = getStreakLevel(currentStudent?.points || 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 256,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 259,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 253,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 252,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: [
        navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 269,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 268,
            columnNumber: 22
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleLogout, className: "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightOnRectangleIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Logout" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 277,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 265,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 251,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 250,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 292,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 291,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 296,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 290,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 289,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: [
          navigation.map((item) => {
            const IconComponent = item.icon;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 306,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 307,
                columnNumber: 25
              }, this)
            ] }, item.name, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 305,
              columnNumber: 24
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setIsMobileMenuOpen(false);
            handleLogout();
          }, className: "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightOnRectangleIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 316,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Logout" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 317,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 302,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 301,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 288,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 287,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 285,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Leaderboard" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 329,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 328,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 331,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "\u{1F3C6} Progress Leaderboard" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 338,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Track your progress and compete with your classmates" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 339,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "\u{1F31F} Your Progress" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 346,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-blue-100", children: "Keep up the great work!" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 347,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 345,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold", children: totalEarnedPoints }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 350,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-blue-100", children: "Total Points" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 351,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 349,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 344,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrophyIcon_default, { className: "h-8 w-8 mr-3" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 358,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: [
                  "#",
                  currentRank || "N/A"
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 360,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-blue-100", children: "Current Rank" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 361,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 359,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 357,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 356,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartBarIcon_default, { className: "h-8 w-8 mr-3" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 368,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: [
                  overallProgress,
                  "%"
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 370,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-blue-100", children: "Overall Progress" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 371,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 369,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 367,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 366,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FireIcon_default, { className: "h-8 w-8 mr-3" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 378,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-bold", children: currentStudentStreak.level }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 380,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-blue-100", children: "Achievement Level" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 381,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mt-1", children: [...Array(currentStudentStreak.fires)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FireIcon_default, { className: "h-4 w-4 text-orange-300" }, i, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 383,
                  columnNumber: 77
                }, this)) }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 382,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 379,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 376,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 355,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 343,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 border-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab("overall"), className: `pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === "overall" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`, children: "\u{1F3C6} Overall Leaderboard" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 394,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab("courses"), className: `pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === "courses" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`, children: "\u{1F4DA} Course Progress" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 397,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab("achievements"), className: `pb-2 px-1 border-b-2 font-medium text-sm ${activeTab === "achievements" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`, children: "\u{1F31F} Recent Achievements" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 400,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 393,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 392,
          columnNumber: 11
        }, this),
        activeTab === "overall" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "\u{1F947} Class Rankings" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 409,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Based on total points earned from assignments and activities" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 410,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 408,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: leaderboardData.slice(0, 20).map((student, index) => {
            const rank = index + 1;
            const isCurrentStudent = student.student_id === currentStudentId;
            const badge = getRankBadge(rank);
            const IconComponent = badge.icon;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `px-6 py-4 flex items-center justify-between ${isCurrentStudent ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center justify-center w-10 h-10 rounded-full ${badge.bg} mr-4`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: `h-6 w-6 ${badge.color}` }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 421,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 420,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-sm font-medium ${isCurrentStudent ? "text-blue-900" : "text-gray-900"}`, children: [
                    student.users?.name || "Unknown Student",
                    isCurrentStudent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-blue-600", children: "\u{1F464} (You)" }, void 0, false, {
                      fileName: "app/routes/student.leaderboard.tsx",
                      lineNumber: 426,
                      columnNumber: 50
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 424,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                    "Rank #",
                    rank
                  ] }, void 0, true, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 428,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 423,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 419,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-900", children: student.points }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 432,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "points" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 433,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 431,
                columnNumber: 23
              }, this)
            ] }, student.id, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 418,
              columnNumber: 22
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 412,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 407,
          columnNumber: 39
        }, this),
        activeTab === "courses" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: Object.entries(courseStats).map(([courseId, stats]) => {
          const progressPercentage = stats.totalPoints > 0 ? Math.round(stats.earnedPoints / stats.totalPoints * 100) : 0;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: [
                "\u{1F4D6} ",
                stats.name
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 445,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-6 w-6 text-blue-500" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 446,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 444,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm text-gray-600 mb-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Progress" }, void 0, false, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 452,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    progressPercentage,
                    "%"
                  ] }, void 0, true, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 453,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 451,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 rounded-full ${getProgressColor(progressPercentage)}`, style: {
                  width: `${progressPercentage}%`
                } }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 456,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 455,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 450,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Points Earned" }, void 0, false, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 464,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: [
                    stats.earnedPoints,
                    "/",
                    stats.totalPoints
                  ] }, void 0, true, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 465,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 463,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Assignments" }, void 0, false, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 468,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: stats.assignments }, void 0, false, {
                    fileName: "app/routes/student.leaderboard.tsx",
                    lineNumber: 469,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 467,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 462,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 449,
              columnNumber: 21
            }, this)
          ] }, courseId, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 443,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 440,
          columnNumber: 39
        }, this),
        activeTab === "achievements" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "\u2B50 Recent High Scores" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Your best performances in the last 30 days" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 480,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 478,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: recentAchievements.length > 0 ? recentAchievements.map((achievement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default2, { className: "h-6 w-6 text-yellow-500" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 486,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 485,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: [
                  "\u{1F3AF} ",
                  achievement.assignments?.title || "Assignment"
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 489,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                  achievement.courses?.name || "Course",
                  " \u2022 ",
                  new Date(achievement.submitted_at).toLocaleDateString()
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 492,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 488,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 484,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-yellow-600", children: [
                achievement.points_earned,
                "/",
                achievement.assignments?.points || 10
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 498,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "points" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 501,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 497,
              columnNumber: 23
            }, this)
          ] }, achievement.id, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 483,
            columnNumber: 88
          }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-12 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "mx-auto h-12 w-12 text-gray-400" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 504,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "No recent achievements" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 505,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Complete assignments with high scores to see them here! \u{1F680}" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 506,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 503,
            columnNumber: 31
          }, this) }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 482,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 477,
          columnNumber: 44
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 336,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.leaderboard.tsx",
    lineNumber: 248,
    columnNumber: 10
  }, this);
}
_s(StudentLeaderboard, "dYo7Ld7/KSlo1J5OqPfx4Gaq4x4=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = StudentLeaderboard;
var _c;
$RefreshReg$(_c, "StudentLeaderboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentLeaderboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student.leaderboard-3HYM2HZR.js.map
