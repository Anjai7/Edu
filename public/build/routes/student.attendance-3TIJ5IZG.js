import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Bars3Icon_default,
  BellIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  CogIcon_default,
  DocumentTextIcon_default,
  HomeIcon_default,
  TrophyIcon_default,
  UserGroupIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-DBYJVH7L.js";
import {
  Link,
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

// app/routes/student.attendance.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.attendance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.attendance.tsx"
  );
  import.meta.hot.lastModified = "1757761737715.853";
}
var meta = () => {
  return [{
    title: "Attendance - EduHub Student"
  }, {
    name: "description",
    content: "View your attendance records and statistics"
  }];
};
function StudentAttendance() {
  _s();
  const {
    attendanceRecords,
    courses,
    last7Days,
    last6Months,
    courseStats,
    totalRecords,
    presentCount,
    attendancePercentage
  } = useLoaderData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const [activeChart, setActiveChart] = (0, import_react2.useState)("daily");
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
    current: true
  }, {
    name: "Grades",
    href: "/student/grades",
    icon: ChartBarIcon_default,
    current: false
  }, {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: TrophyIcon_default,
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
  const getMaxValue = (data, key) => {
    return Math.max(...data.map((item) => item[key]), 0);
  };
  const BarChart = ({
    data,
    type
  }) => {
    const maxValue = Math.max(getMaxValue(data, "present"), getMaxValue(data, "absent"));
    const chartHeight = 200;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: [
        type === "daily" ? "Last 7 Days" : "Last 6 Months",
        " Attendance"
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", style: {
        height: chartHeight + 60
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: maxValue }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: Math.round(maxValue * 0.75) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 236,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: Math.round(maxValue * 0.5) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 237,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: Math.round(maxValue * 0.25) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "0" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 239,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-8 flex items-end justify-between h-full", style: {
          height: chartHeight
        }, children: data.map((item, index) => {
          const presentHeight = maxValue > 0 ? item.present / maxValue * chartHeight : 0;
          const absentHeight = maxValue > 0 ? item.absent / maxValue * chartHeight : 0;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center flex-1 mx-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-end", style: {
              height: chartHeight
            }, children: [
              item.absent > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-400 w-full max-w-12 rounded-t-sm", style: {
                height: `${absentHeight}px`
              }, title: `Absent: ${item.absent}` }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 254,
                columnNumber: 41
              }, this),
              item.present > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-green-400 w-full max-w-12 ${item.absent === 0 ? "rounded-t-sm" : ""}`, style: {
                height: `${presentHeight}px`
              }, title: `Present: ${item.present}` }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 258,
                columnNumber: 42
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 250,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-600 mt-2 transform -rotate-45 origin-center", children: type === "daily" ? item.dayName : item.monthName }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 263,
              columnNumber: 19
            }, this)
          ] }, index, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 249,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4 space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-4 bg-green-400 rounded mr-2" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: "Present" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-4 bg-red-400 rounded mr-2" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: "Absent" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.attendance.tsx",
      lineNumber: 226,
      columnNumber: 12
    }, this);
  };
  const CourseAttendanceChart = () => {
    const courseData = Object.entries(courseStats).map(([courseId, stats]) => {
      const course = courses.find((c) => c.id === parseInt(courseId));
      const percentage = stats.total > 0 ? Math.round(stats.present / stats.total * 100) : 0;
      return {
        courseName: course?.name || `Course ${courseId}`,
        percentage,
        present: stats.present,
        total: stats.total
      };
    });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Attendance by Course" }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 296,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: courseData.map((course, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-700", children: course.courseName }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 300,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
            course.percentage,
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 301,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 299,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-3 rounded-full ${course.percentage >= 90 ? "bg-green-500" : course.percentage >= 75 ? "bg-blue-500" : course.percentage >= 60 ? "bg-yellow-500" : "bg-red-500"}`, style: {
          width: `${course.percentage}%`
        } }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 304,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500 mt-1", children: [
          course.present,
          "/",
          course.total,
          " classes attended"
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 308,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 298,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 297,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.attendance.tsx",
      lineNumber: 295,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 322,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 323,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 321,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 326,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 325,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 320,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 319,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
        const IconComponent = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 336,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 337,
            columnNumber: 21
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 335,
          columnNumber: 22
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 331,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.attendance.tsx",
      lineNumber: 318,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.attendance.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 347,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 353,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 354,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 352,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 357,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 356,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 351,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 350,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 367,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 368,
              columnNumber: 25
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 366,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 363,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 362,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 349,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 348,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.attendance.tsx",
      lineNumber: 346,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Attendance" }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 381,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 380,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 384,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 383,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 379,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "Attendance Dashboard" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 390,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Track your attendance records and statistics" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 391,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 389,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDaysIcon_default, { className: "h-8 w-8 text-blue-600 mr-4" }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 398,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Classes" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 400,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: totalRecords }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 401,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 399,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 397,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 396,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGroupIcon_default, { className: "h-8 w-8 text-green-600 mr-4" }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 408,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Present" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 410,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: presentCount }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 411,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 409,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 407,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 406,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartBarIcon_default, { className: "h-8 w-8 text-purple-600 mr-4" }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 418,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Attendance Rate" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 420,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-2xl font-bold ${attendancePercentage >= 90 ? "text-green-600" : attendancePercentage >= 75 ? "text-blue-600" : attendancePercentage >= 60 ? "text-yellow-600" : "text-red-600"}`, children: [
                attendancePercentage,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 421,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 419,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 417,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 416,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 395,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveChart("daily"), className: `px-4 py-2 rounded-lg ${activeChart === "daily" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`, children: "Daily View" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 432,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveChart("monthly"), className: `px-4 py-2 rounded-lg ${activeChart === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`, children: "Monthly View" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 435,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 431,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 430,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [
          activeChart === "daily" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, { data: last7Days, type: "daily" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 443,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, { data: last6Months, type: "monthly" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 443,
            columnNumber: 85
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CourseAttendanceChart, {}, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 445,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 442,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "Recent Attendance" }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 451,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 450,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 457,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Course" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 460,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 463,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Remarks" }, void 0, false, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 466,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 456,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 455,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: attendanceRecords.slice(0, 10).map((record) => {
              const course = courses.find((c) => c.id === record.course_id);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: new Date(record.date).toLocaleDateString() }, void 0, false, {
                  fileName: "app/routes/student.attendance.tsx",
                  lineNumber: 475,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: course?.name || "Unknown Course" }, void 0, false, {
                  fileName: "app/routes/student.attendance.tsx",
                  lineNumber: 478,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${record.status === "present" ? "bg-green-100 text-green-800" : record.status === "absent" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`, children: record.status }, void 0, false, {
                  fileName: "app/routes/student.attendance.tsx",
                  lineNumber: 482,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.attendance.tsx",
                  lineNumber: 481,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: record.remarks || "-" }, void 0, false, {
                  fileName: "app/routes/student.attendance.tsx",
                  lineNumber: 486,
                  columnNumber: 25
                }, this)
              ] }, record.id, true, {
                fileName: "app/routes/student.attendance.tsx",
                lineNumber: 474,
                columnNumber: 26
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/student.attendance.tsx",
              lineNumber: 471,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 454,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/student.attendance.tsx",
            lineNumber: 453,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.attendance.tsx",
          lineNumber: 449,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.attendance.tsx",
        lineNumber: 388,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.attendance.tsx",
      lineNumber: 378,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.attendance.tsx",
    lineNumber: 315,
    columnNumber: 10
  }, this);
}
_s(StudentAttendance, "7n8NXCJQwEAjaWIljb+wwcOg68Y=", false, function() {
  return [useLoaderData];
});
_c = StudentAttendance;
var _c;
$RefreshReg$(_c, "StudentAttendance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentAttendance as default,
  meta
};
//# sourceMappingURL=/build/routes/student.attendance-3TIJ5IZG.js.map
