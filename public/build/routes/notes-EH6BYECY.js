import {
  Button
} from "/build/_shared/chunk-HIWYRYW3.js";
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

// app/routes/notes.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\notes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\notes.tsx"
  );
  import.meta.hot.lastModified = "1757753877155.3474";
}
var meta = () => {
  return [{
    title: "Collaborative Notes - EduHub"
  }, {
    name: "description",
    content: "Take and share notes with real-time collaboration"
  }];
};
function Notes() {
  _s();
  const [notes] = (0, import_react.useState)([{
    id: "1",
    title: "Calculus - Derivatives",
    subject: "Mathematics",
    lastModified: "2024-01-15",
    isCollaborative: true,
    collaborators: ["Alice", "Bob"]
  }, {
    id: "2",
    title: "World War II Timeline",
    subject: "History",
    lastModified: "2024-01-14",
    isCollaborative: false,
    collaborators: []
  }, {
    id: "3",
    title: "Organic Chemistry Reactions",
    subject: "Chemistry",
    lastModified: "2024-01-13",
    isCollaborative: true,
    collaborators: ["Charlie", "Diana", "Eve"]
  }]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-2", children: "Notes" }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Collaborative note-taking with real-time synthesis" }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", children: "Create New Note" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold", children: "Recent Notes" }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 hover:bg-gray-50 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-1", children: note.title }, void 0, false, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 77,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mb-2", children: note.subject }, void 0, false, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 80,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 text-sm text-gray-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Modified ",
                note.lastModified
              ] }, void 0, true, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 82,
                columnNumber: 25
              }, this),
              note.isCollaborative && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 bg-green-500 rounded-full" }, void 0, false, {
                  fileName: "app/routes/notes.tsx",
                  lineNumber: 84,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Collaborative" }, void 0, false, {
                  fileName: "app/routes/notes.tsx",
                  lineNumber: 85,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 83,
                columnNumber: 50
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 81,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          note.isCollaborative && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex -space-x-2", children: [
            note.collaborators.slice(0, 3).map((collaborator, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white", children: collaborator[0] }, index, false, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 90,
              columnNumber: 86
            }, this)),
            note.collaborators.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white", children: [
              "+",
              note.collaborators.length - 3
            ] }, void 0, true, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 93,
              columnNumber: 59
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 89,
            columnNumber: 46
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this) }, note.id, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 74,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "AI Note Synthesis" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mb-4", children: "Let AI help you synthesize and organize your notes automatically." }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", className: "w-full", children: "Synthesize Notes" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 109,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Quick Tags" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 115,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: ["Mathematics", "History", "Chemistry", "Physics", "Biology", "Literature"].map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full cursor-pointer hover:bg-blue-200", children: tag }, tag, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 117,
            columnNumber: 103
          }, this)) }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 116,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4", children: "Study Groups" }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mb-4", children: "Share notes with your study groups." }, void 0, false, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 125,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Math Study Group" }, void 0, false, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 130,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "5 members" }, void 0, false, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 131,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 129,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 border border-gray-200 rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-sm", children: "Chemistry Lab Partners" }, void 0, false, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 134,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: "3 members" }, void 0, false, {
                fileName: "app/routes/notes.tsx",
                lineNumber: 135,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/notes.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/notes.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(Notes, "5Y/J02WWyPpekEA9Q9tnkCrM4uo=");
_c = Notes;
var _c;
$RefreshReg$(_c, "Notes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Notes as default,
  meta
};
//# sourceMappingURL=/build/routes/notes-EH6BYECY.js.map
