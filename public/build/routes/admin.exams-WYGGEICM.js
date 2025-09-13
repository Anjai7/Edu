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
  PlusIcon_default,
  TrashIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-WATU74SL.js";
import {
  Form,
  Link,
  useActionData,
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

// app/routes/admin.exams.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.exams.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.exams.tsx"
  );
  import.meta.hot.lastModified = "1757761132776.8867";
}
var meta = () => {
  return [{
    title: "Exam Management - EduHub Admin"
  }, {
    name: "description",
    content: "Schedule and manage exams"
  }];
};
function AdminExams() {
  _s();
  const {
    exams,
    courses,
    faculty
  } = useLoaderData();
  const actionData = useActionData();
  const [showCreateForm, setShowCreateForm] = (0, import_react2.useState)(false);
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
    current: true
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
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
        const IconComponent = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 194,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 195,
            columnNumber: 21
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 193,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 190,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 189,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.exams.tsx",
      lineNumber: 176,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.exams.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 211,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 212,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 210,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 215,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 214,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 209,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 208,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 225,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 226,
              columnNumber: 25
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 224,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 221,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 220,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 207,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.exams.tsx",
      lineNumber: 204,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Exams" }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 237,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "Exams" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 249,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Schedule and manage exams" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 250,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 248,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowCreateForm(true), className: "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 253,
              columnNumber: 15
            }, this),
            "Schedule Exam"
          ] }, void 0, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 252,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg", children: actionData.error }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 258,
          columnNumber: 33
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg", children: "Exam scheduled successfully and announcement posted to students!" }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 261,
          columnNumber: 35
        }, this),
        showCreateForm && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Schedule New Exam" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 268,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowCreateForm(false), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 269,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 267,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create" }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 275,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Exam Title" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 278,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 279,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 277,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Description" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 283,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "description", rows: 3, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 284,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 282,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Course" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 288,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "course_id", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a course" }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 290,
                  columnNumber: 23
                }, this),
                courses.map((course) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: course.id, children: course.name }, course.id, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 291,
                  columnNumber: 46
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 289,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 287,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Faculty" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 298,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "faculty_id", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select faculty" }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 300,
                  columnNumber: 23
                }, this),
                faculty.map((member) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: member.id, children: member.full_name }, member.id, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 301,
                  columnNumber: 46
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 297,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Exam Date & Time" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 308,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", name: "exam_date", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 309,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 307,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Duration (minutes)" }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 314,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "duration", min: "30", max: "300", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 315,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 313,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Max Points" }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 319,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "max_points", min: "1", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 320,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 318,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 312,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Room/Location" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 325,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "room", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500", placeholder: "e.g. Room 101, Lab A" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 326,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 324,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3 pt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md", children: "Schedule Exam" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 330,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowCreateForm(false), className: "flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 333,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 329,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 274,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 265,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "Scheduled Exams" }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 343,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 342,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: exams.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 text-center text-gray-500", children: 'No exams scheduled yet. Click "Schedule Exam" to get started.' }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 346,
            columnNumber: 37
          }, this) : exams.map((exam) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 hover:bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-5 w-5 text-gray-400 mr-3" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 352,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-medium text-gray-900", children: exam.title }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 354,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                  exam.courses?.name,
                  " \u2022 ",
                  exam.users?.full_name
                ] }, void 0, true, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 355,
                  columnNumber: 29
                }, this),
                exam.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: exam.description }, void 0, false, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 358,
                  columnNumber: 50
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2 text-sm text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Date: ",
                    new Date(exam.due_date).toLocaleDateString()
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 360,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 361,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Time: ",
                    new Date(exam.due_date).toLocaleTimeString()
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 362,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 363,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    exam.max_points,
                    " points"
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 364,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 365,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs ${exam.status === "active" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`, children: exam.status }, void 0, false, {
                    fileName: "app/routes/admin.exams.tsx",
                    lineNumber: 366,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin.exams.tsx",
                  lineNumber: 359,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 353,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 351,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 350,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "delete" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 375,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: exam.id }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 376,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-red-600 hover:text-red-800", onClick: (e) => {
                if (!confirm("Are you sure you want to delete this exam?")) {
                  e.preventDefault();
                }
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-5 w-5" }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 382,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/admin.exams.tsx",
                lineNumber: 377,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 374,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.exams.tsx",
              lineNumber: 373,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 349,
            columnNumber: 21
          }, this) }, exam.id, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 348,
            columnNumber: 44
          }, this)) }, void 0, false, {
            fileName: "app/routes/admin.exams.tsx",
            lineNumber: 345,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.exams.tsx",
          lineNumber: 341,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.exams.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.exams.tsx",
      lineNumber: 236,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.exams.tsx",
    lineNumber: 173,
    columnNumber: 10
  }, this);
}
_s(AdminExams, "+1jFz8PyoDRGKM7wsPYGbb658gM=", false, function() {
  return [useLoaderData, useActionData];
});
_c = AdminExams;
var _c;
$RefreshReg$(_c, "AdminExams");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminExams as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.exams-WYGGEICM.js.map
