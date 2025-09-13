import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/leaderboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\leaderboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\leaderboard.tsx"
  );
  import.meta.hot.lastModified = "1757742697133.0742";
}
var meta = () => {
  return [{
    title: "Leaderboard - EduHub"
  }, {
    name: "description",
    content: "Student rankings and gamified points system"
  }];
};
function Leaderboard() {
  const students = [{
    rank: 1,
    name: "Alice Johnson",
    department: "Computer Science",
    year: 3,
    points: 2450,
    gpa: 3.95,
    change: "+5"
  }, {
    rank: 2,
    name: "Bob Smith",
    department: "Computer Science",
    year: 3,
    points: 2380,
    gpa: 3.87,
    change: "-1"
  }, {
    rank: 3,
    name: "Carol Davis",
    department: "Electronics",
    year: 4,
    points: 2340,
    gpa: 3.92,
    change: "+2"
  }, {
    rank: 4,
    name: "David Wilson",
    department: "Computer Science",
    year: 2,
    points: 2280,
    gpa: 3.75,
    change: "0"
  }, {
    rank: 5,
    name: "Emma Brown",
    department: "Mechanical",
    year: 3,
    points: 2250,
    gpa: 3.68,
    change: "-2"
  }, {
    rank: 6,
    name: "Frank Miller",
    department: "Civil",
    year: 4,
    points: 2200,
    gpa: 3.82,
    change: "+1"
  }, {
    rank: 7,
    name: "Grace Lee",
    department: "Electronics",
    year: 2,
    points: 2150,
    gpa: 3.78,
    change: "+3"
  }, {
    rank: 8,
    name: "Henry Taylor",
    department: "Computer Science",
    year: 4,
    points: 2100,
    gpa: 3.71,
    change: "-1"
  }];
  const getChangeColor = (change) => {
    if (change.startsWith("+"))
      return "text-green-600";
    if (change.startsWith("-"))
      return "text-red-600";
    return "text-gray-600";
  };
  const getRankBadge = (rank) => {
    if (rank === 1)
      return "\u{1F947}";
    if (rank === 2)
      return "\u{1F948}";
    if (rank === 3)
      return "\u{1F949}";
    return `#${rank}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "\u{1F3C6} Leaderboard" }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Compete with your peers in academics and skills" }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "All Departments" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Computer Science" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Electronics" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Mechanical" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Civil" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "All Years" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "1st Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "2nd Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "3rd Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "4th Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Overall Ranking" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Academic Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Skill Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Participation Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: students.slice(0, 3).map((student, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-white rounded-lg shadow-md p-6 text-center ${index === 0 ? "ring-2 ring-yellow-400" : index === 1 ? "ring-2 ring-gray-400" : "ring-2 ring-orange-400"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl mb-2", children: getRankBadge(student.rank) }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: student.name }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
        student.department,
        " - Year ",
        student.year
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold text-purple-600", children: student.points }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-semibold text-blue-600", children: student.gpa }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "GPA" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this)
    ] }, student.rank, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 142,
      columnNumber: 55
    }, this)) }, void 0, false, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Full Rankings" }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Rank" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Student" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Department" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Year" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Points" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "GPA" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Change" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: students.map((student) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium", children: getRankBadge(student.rank) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 193,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 192,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 191,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: student.name }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 197,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600", children: student.department }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 200,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 199,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600", children: student.year }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 203,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-bold text-purple-600", children: student.points }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 206,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 205,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-semibold text-blue-600", children: student.gpa }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 208,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-sm font-medium ${getChangeColor(student.change)}`, children: student.change !== "0" ? student.change : "\u2014" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 212,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 211,
            columnNumber: 19
          }, this)
        ] }, student.rank, true, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 190,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F4DA}" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Academic Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Earned from assignments, exams, and academic achievements" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F6E0}\uFE0F" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 230,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Skill Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Gained from certifications, projects, and skill demonstrations" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 232,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 229,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F3AF}" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Participation" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Earned from events, competitions, and active participation" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 237,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F31F}" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Special Achievements" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Bonus points for exceptional contributions and leadership" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 242,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 223,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/leaderboard.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_c = Leaderboard;
var _c;
$RefreshReg$(_c, "Leaderboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Leaderboard as default,
  meta
};
//# sourceMappingURL=/build/routes/leaderboard-ZJIJHFBD.js.map
