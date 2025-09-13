import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  AcademicCapIcon_default,
  Bars3Icon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  DocumentTextIcon_default,
  HomeIcon_default,
  TrophyIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-WATU74SL.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-PH6QN3RH.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.leaderboard.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.leaderboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.leaderboard.tsx"
  );
  import.meta.hot.lastModified = "1757761248042.6592";
}
var meta = () => {
  return [{
    title: "Leaderboard - EduHub Admin"
  }, {
    name: "description",
    content: "View student rankings based on points"
  }];
};
function AdminLeaderboard() {
  _s();
  const {
    leaderboard
  } = useLoaderData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const navigation = [{
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon_default,
    current: false
  }, {
    name: "Assignments",
    href: "/admin/assignments",
    icon: DocumentTextIcon_default,
    current: false
  }, {
    name: "Records",
    href: "/admin/records",
    icon: AcademicCapIcon_default,
    current: false
  }, {
    name: "Homework",
    href: "/admin/homework",
    icon: BookOpenIcon_default,
    current: false
  }, {
    name: "Exams",
    href: "/admin/exams",
    icon: DocumentTextIcon_default,
    current: false
  }, {
    name: "Events",
    href: "/admin/events",
    icon: CalendarDaysIcon_default,
    current: false
  }, {
    name: "Leaderboard",
    href: "/admin/leaderboard",
    icon: ChartBarIcon_default,
    current: true
  }];
  const getRankColor = (position) => {
    if (position === 1)
      return "text-yellow-600 bg-yellow-50";
    if (position === 2)
      return "text-gray-600 bg-gray-50";
    if (position === 3)
      return "text-orange-600 bg-orange-50";
    return "text-blue-600 bg-blue-50";
  };
  const getRankIcon = (position) => {
    if (position <= 3) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrophyIcon_default, { className: `h-5 w-5 ${position === 1 ? "text-yellow-500" : position === 2 ? "text-gray-500" : "text-orange-500"}` }, void 0, false, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 133,
        columnNumber: 14
      }, this);
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 148,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
        const IconComponent = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 159,
            columnNumber: 21
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 157,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.leaderboard.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.leaderboard.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 176,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 179,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 178,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 172,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 189,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 190,
              columnNumber: 25
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 188,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 185,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 171,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.leaderboard.tsx",
      lineNumber: 168,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Leaderboard" }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 203,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "Student Leaderboard" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 212,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Rankings based on points earned from assignments and activities" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 213,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        leaderboard.length >= 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: leaderboard.slice(0, 3).map((student, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `relative bg-white rounded-lg shadow-lg overflow-hidden ${index === 0 ? "ring-4 ring-yellow-400" : index === 1 ? "ring-4 ring-gray-400" : "ring-4 ring-orange-400"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute top-0 left-0 right-0 h-2 ${index === 0 ? "bg-yellow-400" : index === 1 ? "bg-gray-400" : "bg-orange-400"}` }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 219,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-4", children: getRankIcon(index + 1) }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center", children: student.avatar_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: student.avatar_url, alt: student.full_name, className: "w-full h-full rounded-full object-cover" }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 225,
              columnNumber: 45
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-600", children: student.full_name?.charAt(0) || "?" }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 225,
              columnNumber: 156
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 224,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: student.full_name }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 229,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: student.email }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 230,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRankColor(index + 1)}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-1", children: "#" }, void 0, false, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 232,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: index + 1 }, void 0, false, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 233,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 231,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900 mt-2", children: [
              student.total_points,
              " pts"
            ] }, void 0, true, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 235,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, this)
        ] }, student.student_id, true, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 218,
          columnNumber: 64
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 217,
          columnNumber: 39
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "Full Rankings" }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 243,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Rank" }, void 0, false, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 249,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Student" }, void 0, false, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Points" }, void 0, false, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 255,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Grade" }, void 0, false, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 258,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 248,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 247,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: leaderboard.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 4, className: "px-6 py-8 text-center text-gray-500", children: "No student data available yet." }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 265,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 264,
              columnNumber: 47
            }, this) : leaderboard.map((student, index) => {
              const position = index + 1;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRankColor(position)}`, children: [
                    "#",
                    position
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 273,
                    columnNumber: 31
                  }, this),
                  getRankIcon(position) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2", children: getRankIcon(position) }, void 0, false, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 276,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 272,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 271,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4", children: student.avatar_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: student.avatar_url, alt: student.full_name, className: "w-full h-full rounded-full object-cover" }, void 0, false, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 284,
                    columnNumber: 55
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-600", children: student.full_name?.charAt(0) || "?" }, void 0, false, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 284,
                    columnNumber: 166
                  }, this) }, void 0, false, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 283,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: student.full_name }, void 0, false, {
                      fileName: "app/routes/admin.leaderboard.tsx",
                      lineNumber: 289,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: student.email }, void 0, false, {
                      fileName: "app/routes/admin.leaderboard.tsx",
                      lineNumber: 290,
                      columnNumber: 33
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 288,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 282,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 281,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: student.total_points }, void 0, false, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 295,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "points" }, void 0, false, {
                    fileName: "app/routes/admin.leaderboard.tsx",
                    lineNumber: 296,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 294,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.total_points >= 90 ? "bg-green-100 text-green-800" : student.total_points >= 80 ? "bg-blue-100 text-blue-800" : student.total_points >= 70 ? "bg-yellow-100 text-yellow-800" : student.total_points >= 60 ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"}`, children: student.total_points >= 90 ? "A+" : student.total_points >= 80 ? "A" : student.total_points >= 70 ? "B" : student.total_points >= 60 ? "C" : "D" }, void 0, false, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 299,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/admin.leaderboard.tsx",
                  lineNumber: 298,
                  columnNumber: 27
                }, this)
              ] }, student.student_id, true, {
                fileName: "app/routes/admin.leaderboard.tsx",
                lineNumber: 270,
                columnNumber: 26
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/admin.leaderboard.tsx",
              lineNumber: 263,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.leaderboard.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.leaderboard.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.leaderboard.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.leaderboard.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.leaderboard.tsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s(AdminLeaderboard, "uhCfpk5H6wXIOXZZ/xU6qEqTOoo=", false, function() {
  return [useLoaderData];
});
_c = AdminLeaderboard;
var _c;
$RefreshReg$(_c, "AdminLeaderboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminLeaderboard as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.leaderboard-OLE6AH4B.js.map
