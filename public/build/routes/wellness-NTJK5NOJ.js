import {
  Button
} from "/build/_shared/chunk-QCUIEYWL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/wellness.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\wellness.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\wellness.tsx"
  );
  import.meta.hot.lastModified = "1757740142135.5002";
}
var meta = () => {
  return [{
    title: "Wellness Tracker - EduHub"
  }, {
    name: "description",
    content: "Monitor your mental health and academic stress"
  }];
};
function Wellness() {
  _s();
  const [todayEntry, setTodayEntry] = (0, import_react.useState)({
    mood: 7,
    stress: 4,
    sleep: 7.5,
    exercise: 30,
    notes: ""
  });
  const [weeklyData] = (0, import_react.useState)([{
    date: "Mon",
    mood: 6,
    stress: 6,
    sleep: 6,
    exercise: 0
  }, {
    date: "Tue",
    mood: 7,
    stress: 5,
    sleep: 7,
    exercise: 30
  }, {
    date: "Wed",
    mood: 8,
    stress: 3,
    sleep: 8,
    exercise: 45
  }, {
    date: "Thu",
    mood: 6,
    stress: 7,
    sleep: 6,
    exercise: 0
  }, {
    date: "Fri",
    mood: 9,
    stress: 2,
    sleep: 8,
    exercise: 60
  }, {
    date: "Sat",
    mood: 8,
    stress: 3,
    sleep: 9,
    exercise: 90
  }, {
    date: "Sun",
    mood: 7,
    stress: 4,
    sleep: 7.5,
    exercise: 30
  }]);
  const averages = {
    mood: weeklyData.reduce((sum, day) => sum + day.mood, 0) / weeklyData.length,
    stress: weeklyData.reduce((sum, day) => sum + day.stress, 0) / weeklyData.length,
    sleep: weeklyData.reduce((sum, day) => sum + day.sleep, 0) / weeklyData.length,
    exercise: weeklyData.reduce((sum, day) => sum + day.exercise, 0) / weeklyData.length
  };
  const getStressColor = (level) => {
    if (level <= 3)
      return "text-green-600";
    if (level <= 6)
      return "text-yellow-600";
    return "text-red-600";
  };
  const getMoodColor = (level) => {
    if (level >= 8)
      return "text-green-600";
    if (level >= 6)
      return "text-yellow-600";
    return "text-red-600";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Wellness Tracker" }, void 0, false, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Monitor your mental health and academic stress" }, void 0, false, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wellness.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Average Mood" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-3xl font-bold ${getMoodColor(averages.mood)}`, children: [
          averages.mood.toFixed(1),
          "/10"
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "This week" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Stress Level" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-3xl font-bold ${getStressColor(averages.stress)}`, children: [
          averages.stress.toFixed(1),
          "/10"
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Average this week" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Sleep Average" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-blue-600", children: [
          averages.sleep.toFixed(1),
          "h"
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Per night" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Exercise" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-purple-600", children: [
          Math.round(averages.exercise),
          "min"
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Daily average" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 135,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wellness.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Today's Check-in" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Mood (1-10): ",
              todayEntry.mood
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "range", min: "1", max: "10", value: todayEntry.mood, onChange: (e) => setTodayEntry({
              ...todayEntry,
              mood: parseInt(e.target.value)
            }), className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 147,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Stress Level (1-10): ",
              todayEntry.stress
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 153,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "range", min: "1", max: "10", value: todayEntry.stress, onChange: (e) => setTodayEntry({
              ...todayEntry,
              stress: parseInt(e.target.value)
            }), className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Sleep Hours: ",
              todayEntry.sleep
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 162,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "range", min: "3", max: "12", step: "0.5", value: todayEntry.sleep, onChange: (e) => setTodayEntry({
              ...todayEntry,
              sleep: parseFloat(e.target.value)
            }), className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 165,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Exercise Minutes: ",
              todayEntry.exercise
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "range", min: "0", max: "120", step: "15", value: todayEntry.exercise, onChange: (e) => setTodayEntry({
              ...todayEntry,
              exercise: parseInt(e.target.value)
            }), className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 174,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Notes (optional)" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 180,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: todayEntry.notes, onChange: (e) => setTodayEntry({
              ...todayEntry,
              notes: e.target.value
            }), placeholder: "How are you feeling today? Any particular stressors?", className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", rows: 3 }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 183,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", className: "w-full", children: "Save Today's Entry" }, void 0, false, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 188,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Weekly Trends" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: weeklyData.map((day, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-3 border border-gray-200 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-gray-700", children: day.date }, void 0, false, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 198,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `font-medium ${getMoodColor(day.mood)}`, children: [
              "Mood: ",
              day.mood
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 200,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `font-medium ${getStressColor(day.stress)}`, children: [
              "Stress: ",
              day.stress
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 203,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-600", children: [
              "Sleep: ",
              day.sleep,
              "h"
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-purple-600", children: [
              "Exercise: ",
              day.exercise,
              "min"
            ] }, void 0, true, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 209,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 199,
            columnNumber: 17
          }, this)
        ] }, index, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 197,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wellness.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Stress Management" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Deep Breathing" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 223,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "5-minute guided session" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 224,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Meditation" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 227,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "10-minute mindfulness" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 228,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Take a Walk" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 231,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "Get some fresh air" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 232,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 230,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 221,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Academic Support" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Counseling Services" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 241,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "Free student support" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 242,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 240,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Study Groups" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 245,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "Connect with peers" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 246,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Office Hours" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 249,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "Get help from professors" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 250,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 248,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 239,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 237,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Emergency Resources" }, void 0, false, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-red-200 rounded-md bg-red-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm text-red-800", children: "Crisis Hotline" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 259,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-red-600", children: "Available 24/7" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 260,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 258,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Campus Security" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 263,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "Emergency assistance" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 264,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 262,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Health Center" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 267,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "Medical support" }, void 0, false, {
              fileName: "app/routes/wellness.tsx",
              lineNumber: 268,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/wellness.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/wellness.tsx",
          lineNumber: 257,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wellness.tsx",
        lineNumber: 255,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wellness.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/wellness.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_s(Wellness, "f+H9qTATAk65jQoS/eKs/VhFBMQ=");
_c = Wellness;
var _c;
$RefreshReg$(_c, "Wellness");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Wellness as default,
  meta
};
//# sourceMappingURL=/build/routes/wellness-NTJK5NOJ.js.map
