import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-HSUVWMYI.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/student.dashboard.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1757748574561.1538";
}
var meta = () => {
  return [{
    title: "Student Dashboard - EduHub"
  }, {
    name: "description",
    content: "Student dashboard for EduHub"
  }];
};
function StudentDashboard() {
  _s();
  const [userInfo, setUserInfo] = (0, import_react.useState)({
    email: "",
    name: "",
    type: ""
  });
  (0, import_react.useEffect)(() => {
    const userEmail = sessionStorage.getItem("userEmail") || "";
    const userName = sessionStorage.getItem("userName") || "";
    const userType = sessionStorage.getItem("userType") || "";
    setUserInfo({
      email: userEmail,
      name: userName,
      type: userType
    });
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userName");
    window.location.href = "/login";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white shadow-lg border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-blue-600", children: "EduHub" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium text-gray-700", children: "Student Portal" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 63,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: userInfo.name }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: [
            "\u{1F393} Student \u2022 ",
            userInfo.email
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium", children: userInfo.name.charAt(0).toUpperCase() || userInfo.email.charAt(0).toUpperCase() }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleLogout, className: "text-gray-700 hover:text-red-600 transition-colors text-sm font-medium", children: "Logout" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: [
          "Welcome back, ",
          userInfo.name,
          "!"
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Here's what's happening in your academic journey today." }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 bg-blue-100 rounded-lg mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 97,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Study Buddy" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 101,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Find study partners" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/study", className: "text-blue-600 hover:text-blue-700 font-medium", children: "Find Study Partner \u2192" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 bg-green-100 rounded-lg mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Notes" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 119,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Manage your notes" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 120,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 118,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/notes", className: "text-green-600 hover:text-green-700 font-medium", children: "View Notes \u2192" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 bg-yellow-100 rounded-lg mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-yellow-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Budget Tracker" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Track expenses" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 138,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 136,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/budget", className: "text-yellow-600 hover:text-yellow-700 font-medium", children: "Manage Budget \u2192" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 bg-purple-100 rounded-lg mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-purple-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Campus Info" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 155,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Campus resources" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 156,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 154,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/campus", className: "text-purple-600 hover:text-purple-700 font-medium", children: "Explore Campus \u2192" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 159,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 147,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 bg-pink-100 rounded-lg mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-pink-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 168,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 167,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Wellness" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 173,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Mental health support" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 174,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 172,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 166,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/wellness", className: "text-pink-600 hover:text-pink-700 font-medium", children: "Wellness Center \u2192" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 bg-red-100 rounded-lg mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-red-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 185,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Assignments" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 191,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Track homework" }, void 0, false, {
                fileName: "app/routes/student.dashboard.tsx",
                lineNumber: 192,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/assignments", className: "text-red-600 hover:text-red-700 font-medium", children: "View Assignments \u2192" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Recent Activity" }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 bg-blue-500 rounded-full mr-4" }, void 0, false, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Welcome to EduHub!" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: "You successfully logged in to your student dashboard" }, void 0, false, {
              fileName: "app/routes/student.dashboard.tsx",
              lineNumber: 209,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.dashboard.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.dashboard.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.dashboard.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.dashboard.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.dashboard.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(StudentDashboard, "GggZtNQlbx/KS3Ev8lUGFIERhos=");
_c = StudentDashboard;
var _c;
$RefreshReg$(_c, "StudentDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentDashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student.dashboard-7HO2FGE3.js.map
