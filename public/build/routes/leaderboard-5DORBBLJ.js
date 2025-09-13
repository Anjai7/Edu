import {
  createClient
} from "/build/_shared/chunk-PF235JI7.js";
import "/build/_shared/chunk-PH7FC7E6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/leaderboard.tsx
var import_node = __toESM(require_node(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\leaderboard.tsx"
  );
  import.meta.hot.lastModified = "1757753877155.3474";
}
var supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
var meta = () => {
  return [{
    title: "Leaderboard - EduHub"
  }, {
    name: "description",
    content: "Student rankings and gamified points system"
  }];
};
function Leaderboard() {
  _s();
  const {
    students
  } = useLoaderData();
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
  const studentsWithChange = students.map((student, index) => ({
    ...student,
    rank: student.rank_position || index + 1,
    points: student.total_points || 0,
    change: index % 3 === 0 ? "+2" : index % 2 === 0 ? "-1" : "0"
    // Mock data
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "\u{1F3C6} Leaderboard" }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Compete with your peers in academics and skills" }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "All Departments" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Computer Science" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Electronics" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Mechanical" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Civil" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "All Years" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "1st Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "2nd Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "3rd Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "4th Year" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Overall Ranking" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Academic Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Skill Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Participation Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: studentsWithChange.slice(0, 3).map((student, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-white rounded-lg shadow-md p-6 text-center ${index === 0 ? "ring-2 ring-yellow-400" : index === 1 ? "ring-2 ring-gray-400" : "ring-2 ring-orange-400"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl mb-2", children: getRankBadge(student.rank) }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: student.name }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
        student.department,
        " - Year ",
        student.year
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold text-purple-600", children: student.points }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 157,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 155,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-semibold text-blue-600", children: student.gpa?.toFixed(2) || "N/A" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "GPA" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    ] }, student.rank, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 151,
      columnNumber: 65
    }, this)) }, void 0, false, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: "Full Rankings" }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Rank" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Student" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Department" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Year" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Points" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "GPA" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Change" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: studentsWithChange.map((student) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-medium", children: getRankBadge(student.rank) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 202,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 201,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 200,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: student.name }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 206,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 205,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600", children: student.department || "N/A" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 208,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600", children: student.year || "N/A" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 212,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 211,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-bold text-purple-600", children: student.points }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 215,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 214,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-semibold text-blue-600", children: student.gpa?.toFixed(2) || "N/A" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 218,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 217,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-sm font-medium ${getChangeColor(student.change)}`, children: student.change !== "0" ? student.change : "\u2014" }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 221,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/leaderboard.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, this)
        ] }, student.rank, true, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 199,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 198,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F4DA}" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Academic Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Earned from assignments, exams, and academic achievements" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F6E0}\uFE0F" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 239,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Skill Points" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Gained from certifications, projects, and skill demonstrations" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 238,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F3AF}" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Participation" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Earned from events, competitions, and active participation" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl mb-2", children: "\u{1F31F}" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 249,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold mb-2", children: "Special Achievements" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 250,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Bonus points for exceptional contributions and leadership" }, void 0, false, {
          fileName: "app/routes/leaderboard.tsx",
          lineNumber: 251,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/leaderboard.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/leaderboard.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/leaderboard.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_s(Leaderboard, "puVxrEZdYTa5c2N7ZGpA8x4NEH8=", false, function() {
  return [useLoaderData];
});
_c = Leaderboard;
var _c;
$RefreshReg$(_c, "Leaderboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Leaderboard as default,
  meta
};
//# sourceMappingURL=/build/routes/leaderboard-5DORBBLJ.js.map
