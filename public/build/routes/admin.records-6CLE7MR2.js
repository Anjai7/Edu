import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  AcademicCapIcon_default,
  Bars3Icon_default,
  PlusIcon_default,
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

// app/routes/admin.records.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.records.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.records.tsx"
  );
  import.meta.hot.lastModified = "1757758895737.0244";
}
var meta = () => {
  return [{
    title: "Student Records - EduHub Admin"
  }, {
    name: "description",
    content: "View and manage student academic records"
  }];
};
function AdminRecords() {
  _s();
  const {
    students,
    courses,
    records
  } = useLoaderData();
  const actionData = useActionData();
  const [showAddForm, setShowAddForm] = (0, import_react2.useState)(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const navigation = [{
    name: "Dashboard",
    href: "/admin/dashboard"
  }, {
    name: "Assignments",
    href: "/admin/assignments"
  }, {
    name: "Records",
    href: "/admin/records",
    current: true
  }, {
    name: "Homework",
    href: "/admin/homework"
  }, {
    name: "Exams",
    href: "/admin/exams"
  }, {
    name: "Events",
    href: "/admin/events"
  }, {
    name: "Leaderboard",
    href: "/admin/leaderboard"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 169,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 177,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 178,
          columnNumber: 19
        }, this)
      ] }, item.name, true, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 176,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.records.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.records.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 193,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 194,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 192,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 197,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 191,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 205,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 206,
            columnNumber: 23
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 204,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 203,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 202,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.records.tsx",
      lineNumber: 186,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Student Records" }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 218,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 217,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "Student Records" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 228,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "View and manage student academic records" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 229,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 227,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowAddForm(true), className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 232,
              columnNumber: 15
            }, this),
            "Add Record"
          ] }, void 0, true, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 231,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg", children: actionData.error }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 238,
          columnNumber: 33
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg", children: "Record added successfully!" }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 241,
          columnNumber: 35
        }, this),
        showAddForm && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Add Student Record" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 249,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowAddForm(false), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 250,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 248,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "add_record" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Student" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 259,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "student_id", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a student" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 263,
                  columnNumber: 23
                }, this),
                students.map((student) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: student.id, children: student.full_name }, student.id, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 264,
                  columnNumber: 48
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 262,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 258,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Course" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 271,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "course_id", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select a course" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 275,
                  columnNumber: 23
                }, this),
                courses.map((course) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: course.id, children: course.name }, course.id, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 276,
                  columnNumber: 46
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 274,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 270,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Record Title" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 283,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500", placeholder: "e.g. Midterm Exam, Project Submission" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 286,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 282,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Description" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 290,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "description", rows: 3, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 293,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 289,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Grade (%)" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 298,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "grade", min: "0", max: "100", step: "0.1", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 301,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 297,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Points" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 305,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "points", min: "0", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 304,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 296,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3 pt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md", children: "Add Record" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 313,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowAddForm(false), className: "flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 316,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 312,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 247,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 246,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "All Records" }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 326,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: records.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 text-center text-gray-500", children: 'No records found. Click "Add Record" to get started.' }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 330,
            columnNumber: 39
          }, this) : records.map((record) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 hover:bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-5 w-5 text-gray-400 mr-3" }, void 0, false, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 336,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-medium text-gray-900", children: record.assignments?.title || "Manual Record" }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 338,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                  record.users?.full_name,
                  " \u2022 ",
                  record.courses?.name
                ] }, void 0, true, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 341,
                  columnNumber: 29
                }, this),
                record.content && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: record.content }, void 0, false, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 344,
                  columnNumber: 48
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2 text-sm text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Grade: ",
                    record.grade,
                    "%"
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.records.tsx",
                    lineNumber: 346,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.records.tsx",
                    lineNumber: 347,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Points: ",
                    record.points_earned
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.records.tsx",
                    lineNumber: 348,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.records.tsx",
                    lineNumber: 349,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: new Date(record.created_at).toLocaleDateString() }, void 0, false, {
                    fileName: "app/routes/admin.records.tsx",
                    lineNumber: 350,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin.records.tsx",
                  lineNumber: 345,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.records.tsx",
                lineNumber: 337,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 335,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 334,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${record.grade >= 90 ? "bg-green-100 text-green-800" : record.grade >= 80 ? "bg-blue-100 text-blue-800" : record.grade >= 70 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, children: record.grade >= 90 ? "A" : record.grade >= 80 ? "B" : record.grade >= 70 ? "C" : "D" }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 356,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.records.tsx",
              lineNumber: 355,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 333,
            columnNumber: 21
          }, this) }, record.id, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 332,
            columnNumber: 48
          }, this)) }, void 0, false, {
            fileName: "app/routes/admin.records.tsx",
            lineNumber: 329,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.records.tsx",
          lineNumber: 325,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.records.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.records.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.records.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
}
_s(AdminRecords, "10TjX6lWIlUarTxqY0uJs8WvTUQ=", false, function() {
  return [useLoaderData, useActionData];
});
_c = AdminRecords;
var _c;
$RefreshReg$(_c, "AdminRecords");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminRecords as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.records-6CLE7MR2.js.map
