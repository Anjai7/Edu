import {
  AcademicCapIcon_default,
  ArrowDownIcon_default,
  ArrowLeftIcon_default,
  ArrowUpIcon_default,
  FireIcon_default,
  StarIcon_default,
  TrophyIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link
} from "/build/_shared/chunk-FPSUGEKY.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/student.leaderboard.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.leaderboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.leaderboard.tsx"
  );
  import.meta.hot.lastModified = "1757745455868.9128";
}
var meta = () => {
  return [{
    title: "Leaderboard - Student Dashboard"
  }, {
    name: "description",
    content: "View your ranking and achievements compared to other students"
  }];
};
var mockLeaderboard = [{
  rank: 1,
  studentName: "Alice Johnson",
  studentId: "STU2025002",
  class: "12th A",
  totalPoints: 2850,
  gpa: 4,
  achievements: 15,
  streak: 45,
  trend: "up",
  avatar: "AJ",
  specialBadges: ["Top Performer", "Consistent Achiever", "Academic Star"]
}, {
  rank: 2,
  studentName: "Bob Smith",
  studentId: "STU2025005",
  class: "12th B",
  totalPoints: 2720,
  gpa: 3.9,
  achievements: 12,
  streak: 32,
  trend: "up",
  avatar: "BS",
  specialBadges: ["Science Champion", "Problem Solver"]
}, {
  rank: 3,
  studentName: "Carol Davis",
  studentId: "STU2025008",
  class: "12th A",
  totalPoints: 2680,
  gpa: 3.8,
  achievements: 14,
  streak: 28,
  trend: "stable",
  avatar: "CD",
  specialBadges: ["Creative Thinker", "Team Player"]
}, {
  rank: 4,
  studentName: "David Wilson",
  studentId: "STU2025012",
  class: "12th C",
  totalPoints: 2550,
  gpa: 3.7,
  achievements: 10,
  streak: 21,
  trend: "down",
  avatar: "DW",
  specialBadges: ["Math Wizard"]
}, {
  rank: 5,
  studentName: "Eva Brown",
  studentId: "STU2025015",
  class: "12th B",
  totalPoints: 2480,
  gpa: 3.6,
  achievements: 11,
  streak: 19,
  trend: "up",
  avatar: "EB",
  specialBadges: ["Literature Expert", "Debate Champion"]
}, {
  rank: 15,
  studentName: "John Doe",
  // Current user
  studentId: "STU2025001",
  class: "12th A",
  totalPoints: 2150,
  gpa: 3.2,
  achievements: 8,
  streak: 12,
  trend: "up",
  avatar: "JD",
  specialBadges: ["Rising Star"],
  isCurrentUser: true
}];
var mockSubjectLeaderboards = [{
  subject: "Mathematics",
  leaders: [{
    name: "Alice Johnson",
    score: 98,
    class: "12th A"
  }, {
    name: "David Wilson",
    score: 96,
    class: "12th C"
  }, {
    name: "Bob Smith",
    score: 94,
    class: "12th B"
  }]
}, {
  subject: "Physics",
  leaders: [{
    name: "Bob Smith",
    score: 97,
    class: "12th B"
  }, {
    name: "Alice Johnson",
    score: 95,
    class: "12th A"
  }, {
    name: "Carol Davis",
    score: 93,
    class: "12th A"
  }]
}, {
  subject: "Chemistry",
  leaders: [{
    name: "Carol Davis",
    score: 96,
    class: "12th A"
  }, {
    name: "Eva Brown",
    score: 94,
    class: "12th B"
  }, {
    name: "Alice Johnson",
    score: 92,
    class: "12th A"
  }]
}];
var mockAchievements = [{
  id: 1,
  title: "Perfect Attendance",
  description: "100% attendance for the semester",
  icon: "\u{1F3AF}",
  rarity: "rare",
  pointsAwarded: 500,
  recipients: 23
}, {
  id: 2,
  title: "Academic Excellence",
  description: "GPA above 3.8 for consecutive semesters",
  icon: "\u2B50",
  rarity: "legendary",
  pointsAwarded: 1e3,
  recipients: 8
}, {
  id: 3,
  title: "Problem Solver",
  description: "Solved 100+ math problems this month",
  icon: "\u{1F9EE}",
  rarity: "common",
  pointsAwarded: 200,
  recipients: 156
}, {
  id: 4,
  title: "Team Leader",
  description: "Successfully led 5+ group projects",
  icon: "\u{1F465}",
  rarity: "uncommon",
  pointsAwarded: 350,
  recipients: 45
}];
function StudentLeaderboard() {
  _s();
  const [viewType, setViewType] = (0, import_react.useState)("overall");
  const [timeframe, setTimeframe] = (0, import_react.useState)("semester");
  const currentUser = mockLeaderboard.find((student) => student.isCurrentUser);
  const topStudents = mockLeaderboard.filter((student) => !student.isCurrentUser).slice(0, 10);
  const getRankColor = (rank) => {
    if (rank === 1)
      return "text-yellow-600";
    if (rank === 2)
      return "text-gray-500";
    if (rank === 3)
      return "text-amber-600";
    return "text-gray-700";
  };
  const getRankIcon = (rank) => {
    if (rank === 1)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrophyIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 202,
        columnNumber: 28
      }, this);
    if (rank === 2)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "h-6 w-6 text-gray-500" }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 203,
        columnNumber: 28
      }, this);
    if (rank === 3)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "h-6 w-6 text-amber-600" }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 204,
        columnNumber: 28
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-bold text-gray-700", children: [
      "#",
      rank
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 205,
      columnNumber: 12
    }, this);
  };
  const getTrendIcon = (trend) => {
    if (trend === "up")
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpIcon_default, { className: "h-4 w-4 text-green-500" }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 208,
        columnNumber: 32
      }, this);
    if (trend === "down")
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon_default, { className: "h-4 w-4 text-red-500" }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 209,
        columnNumber: 34
      }, this);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-4" }, void 0, false, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 210,
      columnNumber: 12
    }, this);
  };
  const getBadgeColor = (rarity) => {
    switch (rarity) {
      case "legendary":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "rare":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "uncommon":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student-dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        "Back to Dashboard"
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Leaderboard" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Track your ranking and achievements" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 234,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 232,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 227,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this),
    currentUser && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white bg-opacity-20 p-4 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-lg font-bold", children: currentUser.avatar }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 244,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 243,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: currentUser.studentName }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 249,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "opacity-90", children: [
              currentUser.class,
              " \u2022 ",
              currentUser.studentId
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrophyIcon_default, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 253,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Rank #",
                  currentUser.rank
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 254,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 252,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 257,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  currentUser.totalPoints,
                  " pts"
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 258,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FireIcon_default, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 261,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  currentUser.streak,
                  " day streak"
                ] }, void 0, true, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 262,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 260,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 248,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold", children: currentUser.gpa }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "opacity-90", children: "GPA" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 269,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-end mt-2", children: [
            getTrendIcon(currentUser.trend),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-sm", children: currentUser.trend === "up" ? "Improving" : currentUser.trend === "down" ? "Declining" : "Stable" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 272,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 241,
        columnNumber: 11
      }, this),
      currentUser.specialBadges && currentUser.specialBadges.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-4 border-t border-white border-opacity-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: currentUser.specialBadges.map((badge, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm", children: badge }, index, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 280,
        columnNumber: 66
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 279,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 278,
        columnNumber: 81
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 240,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("overall"), className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewType === "overall" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Overall Rankings" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("subject"), className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewType === "subject" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Subject Leaders" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 294,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("achievements"), className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${viewType === "achievements" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Achievements" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 297,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 290,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: timeframe, onChange: (e) => setTimeframe(e.target.value), className: "p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "week", children: "This Week" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 302,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "month", children: "This Month" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "semester", children: "This Semester" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 304,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "year", children: "This Year" }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 305,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, this),
      viewType === "overall" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Top Students" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: topStudents.map((student, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex items-center justify-between p-4 rounded-lg ${student.rank <= 3 ? "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200" : "bg-gray-50"}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-12 h-12", children: getRankIcon(student.rank) }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 315,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium", children: student.avatar }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 318,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-gray-900", children: student.studentName }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 322,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
                student.class,
                " \u2022 ",
                student.studentId
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 323,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 321,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 314,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-gray-900", children: student.totalPoints }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 328,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "Points" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 329,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 327,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-gray-900", children: student.gpa }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 332,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "GPA" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 333,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 331,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-gray-900", children: student.achievements }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 336,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "Achievements" }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 337,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 335,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: getTrendIcon(student.trend) }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 339,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 326,
            columnNumber: 19
          }, this)
        ] }, student.studentId, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 313,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 312,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 310,
        columnNumber: 36
      }, this),
      viewType === "subject" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Subject Leaderboards" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 349,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: mockSubjectLeaderboards.map((subject, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border border-gray-200 rounded-lg p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-6 w-6 text-blue-500" }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 353,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold text-gray-900", children: subject.subject }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 354,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 352,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: subject.leaders.map((leader, leaderIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${leaderIndex === 0 ? "bg-yellow-100 text-yellow-800" : leaderIndex === 1 ? "bg-gray-100 text-gray-800" : "bg-amber-100 text-amber-800"}`, children: leaderIndex + 1 }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 359,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-gray-900", children: leader.name }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 363,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: leader.class }, void 0, false, {
                  fileName: "app/routes/student.leaderboard.tsx",
                  lineNumber: 364,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 362,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 358,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-blue-600", children: [
              leader.score,
              "%"
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 367,
              columnNumber: 25
            }, this)
          ] }, leaderIndex, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 357,
            columnNumber: 67
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 356,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 351,
          columnNumber: 64
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 350,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 348,
        columnNumber: 36
      }, this),
      viewType === "achievements" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: "Available Achievements" }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 376,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: mockAchievements.map((achievement) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `border-2 rounded-lg p-6 ${getBadgeColor(achievement.rarity)}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl", children: achievement.icon }, void 0, false, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 380,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold", children: achievement.title }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 382,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm opacity-80", children: achievement.description }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 383,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 381,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 379,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: [
                "+",
                achievement.pointsAwarded,
                " pts"
              ] }, void 0, true, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 388,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize font-medium", children: achievement.rarity }, void 0, false, {
                fileName: "app/routes/student.leaderboard.tsx",
                lineNumber: 389,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 387,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "opacity-80", children: [
              achievement.recipients,
              " earned"
            ] }, void 0, true, {
              fileName: "app/routes/student.leaderboard.tsx",
              lineNumber: 391,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leaderboard.tsx",
            lineNumber: 386,
            columnNumber: 19
          }, this)
        ] }, achievement.id, true, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 378,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.leaderboard.tsx",
          lineNumber: 377,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leaderboard.tsx",
        lineNumber: 375,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leaderboard.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.leaderboard.tsx",
    lineNumber: 224,
    columnNumber: 10
  }, this);
}
_s(StudentLeaderboard, "HyRyleSbMFI1DqppfJiSCGy8H/I=");
_c = StudentLeaderboard;
var _c;
$RefreshReg$(_c, "StudentLeaderboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentLeaderboard as default,
  meta
};
//# sourceMappingURL=/build/routes/student.leaderboard-3LJHKKMC.js.map
