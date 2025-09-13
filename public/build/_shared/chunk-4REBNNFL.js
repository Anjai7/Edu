import {
  AcademicCapIcon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  DocumentTextIcon_default,
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
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/StudentNavigation.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1757747940333.8877";
}
function StudentNavigation() {
  _s();
  const location = useLocation();
  const navigation = [{
    name: "Dashboard",
    href: "/student/dashboard",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-gradient-to-r from-blue-900 to-slate-800 shadow-xl sticky top-0 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between h-16 sm:h-18 lg:h-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 sm:space-x-6 lg:space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/dashboard", className: "text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-blue-200 transition-colors", children: "Student Portal" }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex space-x-1 lg:space-x-2 overflow-x-auto scrollbar-hide", children: navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${active ? "bg-white bg-opacity-20 text-white shadow-lg" : "text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-3 w-3 lg:h-4 lg:w-4" }, void 0, false, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden lg:inline", children: item.name }, void 0, false, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "lg:hidden", children: [
              item.name.slice(0, 8),
              item.name.length > 8 ? "..." : ""
            ] }, void 0, true, {
              fileName: "app/components/StudentNavigation.tsx",
              lineNumber: 86,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "p-2 rounded-lg text-white hover:text-blue-200 hover:bg-white hover:bg-opacity-10 transition-all", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden border-t border-white border-opacity-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 py-3 space-y-1 max-h-64 overflow-y-auto", children: navigation.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${active ? "bg-white bg-opacity-20 text-white" : "text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 109,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
          fileName: "app/components/StudentNavigation.tsx",
          lineNumber: 110,
          columnNumber: 19
        }, this)
      ] }, item.name, true, {
        fileName: "app/components/StudentNavigation.tsx",
        lineNumber: 108,
        columnNumber: 20
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/StudentNavigation.tsx",
      lineNumber: 103,
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
_c = StudentNavigation;
var _c;
$RefreshReg$(_c, "StudentNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StudentNavigation
};
//# sourceMappingURL=/build/_shared/chunk-4REBNNFL.js.map
