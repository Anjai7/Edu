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

// app/routes/study.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\study.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\study.tsx"
  );
  import.meta.hot.lastModified = "1757740003937.4272";
}
var meta = () => {
  return [{
    title: "AI Study Buddy - EduHub"
  }, {
    name: "description",
    content: "Your personalized AI-powered study companion"
  }];
};
function StudyBuddy() {
  _s();
  const [learningStyle, setLearningStyle] = (0, import_react.useState)("");
  const [currentTopic, setCurrentTopic] = (0, import_react.useState)("");
  const [recommendations, setRecommendations] = (0, import_react.useState)([]);
  const generateRecommendations = () => {
    const mockRecommendations = {
      visual: ["Create mind maps for complex concepts", "Use diagrams and flowcharts to break down information", "Watch educational videos on the topic", "Create visual flashcards with images"],
      auditory: ["Record yourself explaining concepts", "Join study groups for discussion", "Listen to educational podcasts", "Use text-to-speech for reading materials"],
      kinesthetic: ["Create physical models or demonstrations", "Take frequent breaks while studying", "Use hands-on activities and experiments", "Walk while reviewing notes"],
      reading: ["Summarize text in your own words", "Create detailed written notes", "Use highlighting and annotation techniques", "Read multiple sources on the same topic"]
    };
    if (learningStyle && currentTopic) {
      setRecommendations(mockRecommendations[learningStyle] || []);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "AI Study Buddy" }, void 0, false, {
        fileName: "app/routes/study.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Get personalized study recommendations based on your learning style" }, void 0, false, {
        fileName: "app/routes/study.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/study.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-6", children: "Learning Style Assessment" }, void 0, false, {
        fileName: "app/routes/study.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4 mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "What's your preferred learning style?" }, void 0, false, {
            fileName: "app/routes/study.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: learningStyle, onChange: (e) => setLearningStyle(e.target.value), className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select your learning style" }, void 0, false, {
              fileName: "app/routes/study.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "visual", children: "Visual (Learn through seeing)" }, void 0, false, {
              fileName: "app/routes/study.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "auditory", children: "Auditory (Learn through hearing)" }, void 0, false, {
              fileName: "app/routes/study.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "kinesthetic", children: "Kinesthetic (Learn through doing)" }, void 0, false, {
              fileName: "app/routes/study.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "reading", children: "Reading/Writing (Learn through text)" }, void 0, false, {
              fileName: "app/routes/study.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/study.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/study.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "What topic are you studying today?" }, void 0, false, {
            fileName: "app/routes/study.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value: currentTopic, onChange: (e) => setCurrentTopic(e.target.value), placeholder: "e.g., Calculus derivatives, World War II, Organic Chemistry", className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" }, void 0, false, {
            fileName: "app/routes/study.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/study.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/study.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: generateRecommendations, variant: "primary", children: "Get Study Recommendations" }, void 0, false, {
        fileName: "app/routes/study.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/study.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    recommendations.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: [
        "Recommended Study Techniques for ",
        currentTopic
      ] }, void 0, true, {
        fileName: "app/routes/study.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-3", children: recommendations.map((rec, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium", children: index + 1 }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-700", children: rec }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "app/routes/study.tsx",
        lineNumber: 92,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/study.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/study.tsx",
      lineNumber: 87,
      columnNumber: 38
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Spaced Repetition" }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "Review your flashcards based on your performance and retention rates." }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", children: "Start Flashcard Review" }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/study.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Focus Session" }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "Start a distraction-free study session with gamified focus tracking." }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", children: "Start Focus Session" }, void 0, false, {
          fileName: "app/routes/study.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/study.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/study.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/study.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(StudyBuddy, "OB99UFn5IiurarRZKzzy2dDcyI0=");
_c = StudyBuddy;
var _c;
$RefreshReg$(_c, "StudyBuddy");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudyBuddy as default,
  meta
};
//# sourceMappingURL=/build/routes/study-MBFGAKDL.js.map
