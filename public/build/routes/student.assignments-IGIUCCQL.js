import {
  ArrowLeftIcon_default,
  CalendarIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  DocumentTextIcon_default,
  ExclamationCircleIcon_default,
  EyeIcon_default,
  FunnelIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link
} from "/build/_shared/chunk-PTZFFYVS.js";
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

// app/routes/student.assignments.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.assignments.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.assignments.tsx"
  );
  import.meta.hot.lastModified = "1757744352868.1372";
}
var meta = () => {
  return [{
    title: "Assignments - Student Dashboard"
  }, {
    name: "description",
    content: "View and manage your assignments"
  }];
};
var mockAssignments = [{
  id: 1,
  title: "Mathematics - Linear Algebra Problems",
  subject: "Mathematics",
  description: "Solve problems 1-15 from Chapter 8: Linear Equations and Matrix Operations",
  dueDate: "2025-09-15",
  assignedDate: "2025-09-10",
  status: "pending",
  priority: "high",
  totalMarks: 50,
  instructor: "Dr. Smith",
  attachments: ["linear_algebra_problems.pdf"]
}, {
  id: 2,
  title: "History Essay - World War II Impact",
  subject: "History",
  description: "Write a 1500-word essay on the social and economic impact of World War II",
  dueDate: "2025-09-18",
  assignedDate: "2025-09-08",
  status: "in-progress",
  priority: "medium",
  totalMarks: 100,
  instructor: "Prof. Johnson",
  attachments: ["essay_guidelines.pdf", "reference_materials.pdf"]
}, {
  id: 3,
  title: "Physics Lab Report - Pendulum Experiment",
  subject: "Physics",
  description: "Complete lab report on simple pendulum motion analysis",
  dueDate: "2025-09-20",
  assignedDate: "2025-09-12",
  status: "completed",
  priority: "low",
  totalMarks: 75,
  instructor: "Dr. Wilson",
  attachments: ["lab_template.docx"],
  submittedDate: "2025-09-14",
  grade: 72
}, {
  id: 4,
  title: "English Literature - Poetry Analysis",
  subject: "English",
  description: "Analyze three poems by Robert Frost focusing on themes and literary devices",
  dueDate: "2025-09-22",
  assignedDate: "2025-09-11",
  status: "pending",
  priority: "medium",
  totalMarks: 80,
  instructor: "Ms. Davis",
  attachments: ["poetry_collection.pdf"]
}, {
  id: 5,
  title: "Chemistry - Organic Compounds Study",
  subject: "Chemistry",
  description: "Research and present findings on 5 different organic compounds",
  dueDate: "2025-09-25",
  assignedDate: "2025-09-13",
  status: "pending",
  priority: "high",
  totalMarks: 90,
  instructor: "Dr. Brown",
  attachments: ["compound_list.pdf", "research_template.docx"]
}];
function StudentAssignments() {
  _s();
  const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
  const [filterSubject, setFilterSubject] = (0, import_react.useState)("all");
  const [sortBy, setSortBy] = (0, import_react.useState)("dueDate");
  const subjects = [...new Set(mockAssignments.map((assignment) => assignment.subject))];
  const filteredAssignments = mockAssignments.filter((assignment) => {
    if (filterStatus !== "all" && assignment.status !== filterStatus)
      return false;
    if (filterSubject !== "all" && assignment.subject !== filterSubject)
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (sortBy === "priority") {
      const priorityOrder = {
        high: 3,
        medium: 2,
        low: 1
      };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    if (sortBy === "subject") {
      return a.subject.localeCompare(b.subject);
    }
    return 0;
  });
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 128,
          columnNumber: 16
        }, this);
      case "in-progress":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 130,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 132,
          columnNumber: 16
        }, this);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };
  const getDaysUntilDue = (dueDate) => {
    const today = /* @__PURE__ */ new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student-dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        "Back to Dashboard"
      ] }, void 0, true, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Assignments" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "View and manage your assignments" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.assignments.tsx",
      lineNumber: 165,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.assignments.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: "Filters & Sort" }, void 0, false, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 185,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Status" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 187,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 188,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 189,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Subject" }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 194,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterSubject, onChange: (e) => setFilterSubject(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Subjects" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 196,
              columnNumber: 15
            }, this),
            subjects.map((subject) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: subject, children: subject }, subject, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 197,
              columnNumber: 40
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort By" }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "dueDate", children: "Due Date" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 203,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "priority", children: "Priority" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 204,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "subject", children: "Subject" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 205,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 202,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.assignments.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: filteredAssignments.map((assignment) => {
      const daysUntilDue = getDaysUntilDue(assignment.dueDate);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 220,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 219,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 218,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: assignment.title }, void 0, false, {
                fileName: "app/routes/student.assignments.tsx",
                lineNumber: 224,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-3", children: assignment.description }, void 0, false, {
                fileName: "app/routes/student.assignments.tsx",
                lineNumber: 225,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6 text-sm text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/student.assignments.tsx",
                    lineNumber: 228,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    "Due: ",
                    new Date(assignment.dueDate).toLocaleDateString()
                  ] }, void 0, true, {
                    fileName: "app/routes/student.assignments.tsx",
                    lineNumber: 229,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 227,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Subject: ",
                  assignment.subject
                ] }, void 0, true, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 232,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 231,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Instructor: ",
                  assignment.instructor
                ] }, void 0, true, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 235,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 234,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Marks: ",
                  assignment.totalMarks
                ] }, void 0, true, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 238,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/student.assignments.tsx",
                  lineNumber: 237,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.assignments.tsx",
                lineNumber: 226,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 217,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/student/assignments/${assignment.id}`, className: "flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 245,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View" }, void 0, false, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 246,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 244,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 243,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 216,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
              getStatusIcon(assignment.status),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`, children: assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1).replace("-", " ") }, void 0, false, {
                fileName: "app/routes/student.assignments.tsx",
                lineNumber: 255,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 253,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(assignment.priority)}`, children: [
              assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1),
              " Priority"
            ] }, void 0, true, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 259,
              columnNumber: 19
            }, this),
            assignment.status === "completed" && assignment.grade && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium", children: [
              "Grade: ",
              assignment.grade,
              "/",
              assignment.totalMarks
            ] }, void 0, true, {
              fileName: "app/routes/student.assignments.tsx",
              lineNumber: 262,
              columnNumber: 77
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 252,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: assignment.status === "completed" && assignment.submittedDate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "Submitted: ",
            new Date(assignment.submittedDate).toLocaleDateString()
          ] }, void 0, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 267,
            columnNumber: 84
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: daysUntilDue < 0 ? "text-red-600 font-medium" : daysUntilDue <= 3 ? "text-yellow-600 font-medium" : "", children: daysUntilDue < 0 ? `Overdue by ${Math.abs(daysUntilDue)} days` : daysUntilDue === 0 ? "Due today" : `${daysUntilDue} days remaining` }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 267,
            columnNumber: 168
          }, this) }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 266,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 251,
          columnNumber: 15
        }, this),
        assignment.attachments && assignment.attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-4 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments:" }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 274,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: assignment.attachments.map((attachment, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md", children: [
            "\u{1F4CE} ",
            attachment
          ] }, index, true, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 276,
            columnNumber: 72
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.assignments.tsx",
            lineNumber: 275,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.assignments.tsx",
          lineNumber: 273,
          columnNumber: 79
        }, this)
      ] }, assignment.id, true, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 215,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/student.assignments.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    filteredAssignments.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 286,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No assignments found" }, void 0, false, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 287,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Try adjusting your filters to see more assignments." }, void 0, false, {
        fileName: "app/routes/student.assignments.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.assignments.tsx",
      lineNumber: 285,
      columnNumber: 44
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.assignments.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
}
_s(StudentAssignments, "5SxTThSxJ22omOTAL7yeIHwmd8c=");
_c = StudentAssignments;
var _c;
$RefreshReg$(_c, "StudentAssignments");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentAssignments as default,
  meta
};
//# sourceMappingURL=/build/routes/student.assignments-IGIUCCQL.js.map
