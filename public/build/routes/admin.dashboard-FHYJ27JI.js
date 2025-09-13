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

// app/routes/admin.dashboard.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1757760878597.514";
}
var meta = () => {
  return [{
    title: "Admin Dashboard - EduHub"
  }, {
    name: "description",
    content: "Admin dashboard for EduHub platform"
  }];
};
function AdminDashboard() {
  _s();
  const data = useLoaderData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const navigation = [{
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon_default,
    current: true
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
    current: false
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 106,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
        const IconComponent = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 117,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 118,
            columnNumber: 21
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 116,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 134,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 135,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 133,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 138,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 137,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 148,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 149,
              columnNumber: 25
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 147,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 127,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Admin Dashboard" }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 164,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "Admin Dashboard" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 171,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Manage your educational platform" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Students" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-blue-600", children: data.totalStudents }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 177,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 176,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Assignments" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-green-600", children: data.totalAssignments }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Pending Submissions" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 195,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-yellow-600", children: data.pendingSubmissions }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 196,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 194,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 192,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Today's Attendance" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 203,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-purple-600", children: data.todayAttendance }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 202,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 200,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/assignments", className: "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-8 w-8 text-blue-600 mr-4" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 213,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Manage Assignments" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 215,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: "Create and manage student assignments" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 216,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 211,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/records", className: "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-8 w-8 text-green-600 mr-4" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 223,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Student Records" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 225,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: "View and manage student records" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 226,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 221,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/homework", className: "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpenIcon_default, { className: "h-8 w-8 text-orange-600 mr-4" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 233,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Homework" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 235,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: "Assign and track homework" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 236,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/exams", className: "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-8 w-8 text-red-600 mr-4" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Exams" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 245,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: "Schedule and manage exams" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 246,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 244,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/events", className: "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDaysIcon_default, { className: "h-8 w-8 text-purple-600 mr-4" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Events" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 255,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: "Schedule and manage events" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 254,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 252,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 251,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/leaderboard", className: "bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartBarIcon_default, { className: "h-8 w-8 text-indigo-600 mr-4" }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 263,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Leaderboard" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 265,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: "View student rankings" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 266,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 264,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 262,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 261,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 210,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.dashboard.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s(AdminDashboard, "cJP3vElugx/PF/IIyR7qKusM5lk=", false, function() {
  return [useLoaderData];
});
_c = AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.dashboard-FHYJ27JI.js.map
