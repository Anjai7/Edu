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
} from "/build/_shared/chunk-DBYJVH7L.js";
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

// app/routes/admin.events.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.events.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.events.tsx"
  );
  import.meta.hot.lastModified = "1757761189611.2583";
}
var meta = () => {
  return [{
    title: "Event Management - EduHub Admin"
  }, {
    name: "description",
    content: "Schedule and manage events"
  }];
};
function AdminEvents() {
  _s();
  const {
    events
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
    current: false
  }, {
    name: "Events",
    href: "/admin/events",
    icon: CalendarDaysIcon_default,
    current: true
  }, {
    name: "Leaderboard",
    href: "/admin/leaderboard",
    icon: ChartBarIcon_default,
    current: false
  }];
  const eventTypes = [{
    value: "academic",
    label: "Academic"
  }, {
    value: "sports",
    label: "Sports"
  }, {
    value: "cultural",
    label: "Cultural"
  }, {
    value: "workshop",
    label: "Workshop"
  }, {
    value: "seminar",
    label: "Seminar"
  }, {
    value: "meeting",
    label: "Meeting"
  }, {
    value: "other",
    label: "Other"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
        const IconComponent = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 203,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 204,
            columnNumber: 21
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 202,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 199,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.events.tsx",
      lineNumber: 185,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.events.tsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 220,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Admin Portal" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 219,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 224,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 223,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 218,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 234,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 235,
              columnNumber: 25
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 233,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 230,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.events.tsx",
      lineNumber: 213,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Events" }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 248,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 246,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "Events" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Schedule and manage events" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 259,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowCreateForm(true), className: "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 262,
              columnNumber: 15
            }, this),
            "Create Event"
          ] }, void 0, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 261,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg", children: actionData.error }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 267,
          columnNumber: 33
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg", children: "Event created successfully and announcement posted to students!" }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 270,
          columnNumber: 35
        }, this),
        showCreateForm && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Create New Event" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 277,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowCreateForm(false), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 279,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 278,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create" }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 284,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Event Title" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 287,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 288,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 286,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Description" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 292,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "description", rows: 3, required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 293,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 291,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Event Type" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 297,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "event_type", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select event type" }, void 0, false, {
                  fileName: "app/routes/admin.events.tsx",
                  lineNumber: 299,
                  columnNumber: 23
                }, this),
                eventTypes.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: type.value, children: type.label }, type.value, false, {
                  fileName: "app/routes/admin.events.tsx",
                  lineNumber: 300,
                  columnNumber: 47
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 298,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 296,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Date & Time" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 307,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "datetime-local", name: "event_date", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 308,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 306,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Location" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 312,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location", required: true, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500", placeholder: "e.g. Main Auditorium, Sports Ground" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 313,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 311,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3 pt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md", children: "Create Event" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 317,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowCreateForm(false), className: "flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 320,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 316,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 274,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "All Events" }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 330,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 329,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: events.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 text-center text-gray-500", children: 'No events scheduled yet. Click "Create Event" to get started.' }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 333,
            columnNumber: 38
          }, this) : events.map((event) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 hover:bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDaysIcon_default, { className: "h-5 w-5 text-gray-400 mr-3" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 339,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-medium text-gray-900", children: event.title }, void 0, false, {
                  fileName: "app/routes/admin.events.tsx",
                  lineNumber: 341,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 capitalize", children: [
                  event.event_type,
                  " \u2022 ",
                  event.location
                ] }, void 0, true, {
                  fileName: "app/routes/admin.events.tsx",
                  lineNumber: 342,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: event.description }, void 0, false, {
                  fileName: "app/routes/admin.events.tsx",
                  lineNumber: 345,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2 text-sm text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Date: ",
                    new Date(event.event_date).toLocaleDateString()
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.events.tsx",
                    lineNumber: 347,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.events.tsx",
                    lineNumber: 348,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Time: ",
                    new Date(event.event_date).toLocaleTimeString()
                  ] }, void 0, true, {
                    fileName: "app/routes/admin.events.tsx",
                    lineNumber: 349,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-2", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/admin.events.tsx",
                    lineNumber: 350,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs ${event.status === "active" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`, children: event.status }, void 0, false, {
                    fileName: "app/routes/admin.events.tsx",
                    lineNumber: 351,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/admin.events.tsx",
                  lineNumber: 346,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 340,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 338,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 337,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "delete" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 360,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: event.id }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 361,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-red-600 hover:text-red-800", onClick: (e) => {
                if (!confirm("Are you sure you want to delete this event?")) {
                  e.preventDefault();
                }
              }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-5 w-5" }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 367,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/admin.events.tsx",
                lineNumber: 362,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 359,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/admin.events.tsx",
              lineNumber: 358,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 336,
            columnNumber: 21
          }, this) }, event.id, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 335,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/admin.events.tsx",
            lineNumber: 332,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.events.tsx",
          lineNumber: 328,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.events.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.events.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.events.tsx",
    lineNumber: 182,
    columnNumber: 10
  }, this);
}
_s(AdminEvents, "TJ5mP8tg/bIFwc3LM4xJcLmb9oU=", false, function() {
  return [useLoaderData, useActionData];
});
_c = AdminEvents;
var _c;
$RefreshReg$(_c, "AdminEvents");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminEvents as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.events-Z7WA7Z6G.js.map
