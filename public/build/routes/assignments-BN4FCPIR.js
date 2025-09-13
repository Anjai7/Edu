import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-HSUVWMYI.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/assignments.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\assignments.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\assignments.tsx"
  );
  import.meta.hot.lastModified = "1757743443591.1277";
}
var meta = () => {
  return [{
    title: "Assignments - EduHub"
  }, {
    name: "description",
    content: "Submit assignments, track deadlines, and view grades"
  }];
};
function Assignments() {
  const assignments = [{
    id: 1,
    title: "Database Systems Project",
    description: "Design and implement a relational database for a library management system",
    subject: "Database Management",
    dueDate: "2025-09-20",
    status: "pending",
    maxPoints: 100,
    submittedAt: null,
    grade: null
  }, {
    id: 2,
    title: "Data Structures Assignment",
    description: "Implement various sorting algorithms and analyze their time complexity",
    subject: "Data Structures",
    dueDate: "2025-09-15",
    status: "submitted",
    maxPoints: 80,
    submittedAt: "2025-09-14",
    grade: 85
  }, {
    id: 3,
    title: "Web Development Portfolio",
    description: "Create a responsive portfolio website using modern web technologies",
    subject: "Web Development",
    dueDate: "2025-09-25",
    status: "graded",
    maxPoints: 120,
    submittedAt: "2025-09-23",
    grade: 110
  }, {
    id: 4,
    title: "Machine Learning Lab Report",
    description: "Analyze the performance of different classification algorithms",
    subject: "Machine Learning",
    dueDate: "2025-09-18",
    status: "late",
    maxPoints: 90,
    submittedAt: "2025-09-19",
    grade: 75
  }];
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "submitted":
        return "bg-blue-100 text-blue-800";
      case "graded":
        return "bg-green-100 text-green-800";
      case "late":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getGradeColor = (grade, maxPoints) => {
    const percentage = grade / maxPoints * 100;
    if (percentage >= 90)
      return "text-green-600";
    if (percentage >= 80)
      return "text-blue-600";
    if (percentage >= 70)
      return "text-yellow-600";
    return "text-red-600";
  };
  const getDaysUntilDue = (dueDate) => {
    const due = new Date(dueDate);
    const today = /* @__PURE__ */ new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900", children: "\u{1F4DA} Assignments" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 mt-2", children: "Track your assignments and deadlines" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors", children: "+ New Assignment" }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-yellow-600", children: assignments.filter((a) => a.status === "pending").length }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "Pending" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-blue-600", children: assignments.filter((a) => a.status === "submitted").length }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "Submitted" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-green-600", children: assignments.filter((a) => a.status === "graded").length }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "Graded" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-red-600", children: assignments.filter((a) => a.status === "late").length }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "Late" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-4 py-2 bg-blue-600 text-white rounded-md", children: "All" }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md", children: "Pending" }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md", children: "Submitted" }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md", children: "Graded" }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: assignments.map((assignment) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: assignment.title }, void 0, false, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`, children: assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1) }, void 0, false, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-2", children: assignment.description }, void 0, false, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4D6} ",
              assignment.subject
            ] }, void 0, true, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 161,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4C5} Due: ",
              new Date(assignment.dueDate).toLocaleDateString()
            ] }, void 0, true, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u2B50 ",
              assignment.maxPoints,
              " points"
            ] }, void 0, true, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 163,
              columnNumber: 19
            }, this),
            assignment.submittedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4E4} Submitted: ",
              new Date(assignment.submittedAt).toLocaleDateString()
            ] }, void 0, true, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 164,
              columnNumber: 46
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: assignment.grade !== null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-2xl font-bold ${getGradeColor(assignment.grade, assignment.maxPoints)}`, children: [
          assignment.grade,
          "/",
          assignment.maxPoints
        ] }, void 0, true, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 168,
          columnNumber: 46
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-medium text-gray-600", children: getDaysUntilDue(assignment.dueDate) > 0 ? `${getDaysUntilDue(assignment.dueDate)} days left` : getDaysUntilDue(assignment.dueDate) === 0 ? "Due today" : "Overdue" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 170,
          columnNumber: 28
        }, this) }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
          assignment.status === "pending" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700", children: "Submit Assignment" }, void 0, false, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50", children: "View Details" }, void 0, false, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 178,
            columnNumber: 53
          }, this),
          assignment.status === "submitted" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50", children: "View Submission" }, void 0, false, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 186,
            columnNumber: 55
          }, this),
          assignment.status === "graded" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50", children: "View Feedback" }, void 0, false, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50", children: "Download" }, void 0, false, {
              fileName: "app/routes/assignments.tsx",
              lineNumber: 193,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 189,
            columnNumber: 52
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        assignment.status === "pending" && getDaysUntilDue(assignment.dueDate) <= 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm font-medium", children: "\u26A0\uFE0F Due soon" }, void 0, false, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 198,
          columnNumber: 95
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this)
    ] }, assignment.id, true, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 150,
      columnNumber: 40
    }, this)) }, void 0, false, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "\u{1F4C5} Upcoming Deadlines" }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: assignments.filter((a) => a.status === "pending").sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()).map((assignment) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center p-3 border border-gray-200 rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: assignment.title }, void 0, false, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 211,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: assignment.subject }, void 0, false, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 212,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 210,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: new Date(assignment.dueDate).toLocaleDateString() }, void 0, false, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 215,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-sm ${getDaysUntilDue(assignment.dueDate) <= 3 ? "text-red-600" : "text-gray-500"}`, children: [
            getDaysUntilDue(assignment.dueDate),
            " days left"
          ] }, void 0, true, {
            fileName: "app/routes/assignments.tsx",
            lineNumber: 216,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/assignments.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this)
      ] }, assignment.id, true, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 209,
        columnNumber: 156
      }, this)) }, void 0, false, {
        fileName: "app/routes/assignments.tsx",
        lineNumber: 208,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/assignments.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/assignments.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_c = Assignments;
var _c;
$RefreshReg$(_c, "Assignments");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Assignments as default,
  meta
};
//# sourceMappingURL=/build/routes/assignments-BN4FCPIR.js.map
