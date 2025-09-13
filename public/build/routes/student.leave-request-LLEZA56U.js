import {
  ArrowLeftIcon_default,
  CalendarIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  DocumentTextIcon_default,
  ExclamationTriangleIcon_default,
  EyeIcon_default,
  PaperAirplaneIcon_default,
  PlusIcon_default,
  UserIcon_default,
  XCircleIcon_default
} from "/build/_shared/chunk-WATU74SL.js";
import {
  Link
} from "/build/_shared/chunk-PH6QN3RH.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/student.leave-request.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.leave-request.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.leave-request.tsx"
  );
  import.meta.hot.lastModified = "1757752669278.2788";
}
var meta = () => {
  return [{
    title: "Leave Request - Student Dashboard"
  }, {
    name: "description",
    content: "Request leave and view your leave history"
  }];
};
var mockLeaveRequests = [{
  id: 1,
  startDate: "2025-09-20",
  endDate: "2025-09-22",
  type: "Medical Leave",
  reason: "Fever and flu symptoms, need to rest and recover",
  status: "approved",
  submittedDate: "2025-09-15",
  approvedBy: "Dr. Johnson - Academic Coordinator",
  approvedDate: "2025-09-16",
  attachments: ["medical_certificate.pdf"],
  comments: "Approved. Please ensure to catch up on missed assignments.",
  dayCount: 3
}, {
  id: 2,
  startDate: "2025-09-25",
  endDate: "2025-09-25",
  type: "Personal Leave",
  reason: "Family wedding ceremony attendance",
  status: "pending",
  submittedDate: "2025-09-13",
  approvedBy: null,
  approvedDate: null,
  attachments: ["wedding_invitation.jpg"],
  comments: null,
  dayCount: 1
}, {
  id: 3,
  startDate: "2025-08-15",
  endDate: "2025-08-17",
  type: "Emergency Leave",
  reason: "Family emergency - grandmother hospitalized",
  status: "approved",
  submittedDate: "2025-08-14",
  approvedBy: "Prof. Smith - Department Head",
  approvedDate: "2025-08-14",
  attachments: ["hospital_admission.pdf"],
  comments: "Emergency leave approved. Contact academic office for missed work.",
  dayCount: 3
}, {
  id: 4,
  startDate: "2025-07-10",
  endDate: "2025-07-12",
  type: "Medical Leave",
  reason: "Dental surgery recovery",
  status: "rejected",
  submittedDate: "2025-07-08",
  approvedBy: "Dr. Johnson - Academic Coordinator",
  approvedDate: "2025-07-09",
  attachments: ["dental_appointment.pdf"],
  comments: "Insufficient medical documentation. Please provide detailed medical certificate.",
  dayCount: 3
}];
var leaveTypes = ["Medical Leave", "Personal Leave", "Emergency Leave", "Family Leave", "Academic Leave", "Other"];
function StudentLeaveRequest() {
  _s();
  const [showForm, setShowForm] = (0, import_react.useState)(false);
  const [formData, setFormData] = (0, import_react.useState)({
    startDate: "",
    endDate: "",
    type: "",
    reason: "",
    attachments: []
  });
  const [filterStatus, setFilterStatus] = (0, import_react.useState)("all");
  const [sortBy, setSortBy] = (0, import_react.useState)("date");
  const filteredRequests = mockLeaveRequests.filter((request) => {
    if (filterStatus !== "all" && request.status !== filterStatus)
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime();
    }
    if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowForm(false);
    setFormData({
      startDate: "",
      endDate: "",
      type: "",
      reason: "",
      attachments: []
    });
  };
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        attachments: Array.from(e.target.files || [])
      }));
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 147,
          columnNumber: 16
        }, this);
      case "rejected":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 149,
          columnNumber: 16
        }, this);
      case "pending":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 151,
          columnNumber: 16
        }, this);
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 153,
          columnNumber: 16
        }, this);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "medical leave":
        return "bg-red-100 text-red-800";
      case "personal leave":
        return "bg-blue-100 text-blue-800";
      case "emergency leave":
        return "bg-orange-100 text-orange-800";
      case "family leave":
        return "bg-purple-100 text-purple-800";
      case "academic leave":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24)) + 1;
    return diffDays;
  };
  const pendingCount = mockLeaveRequests.filter((req) => req.status === "pending").length;
  const approvedCount = mockLeaveRequests.filter((req) => req.status === "approved").length;
  const totalDaysUsed = mockLeaveRequests.filter((req) => req.status === "approved").reduce((total, req) => total + req.dayCount, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this),
          "Back to Dashboard"
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Leave Request" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 203,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Request leave and manage your leave applications" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowForm(true), className: "flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "h-5 w-5" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Request" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 209,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leave-request.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Total Requests" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockLeaveRequests.length }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Pending" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 233,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: pendingCount }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Approved" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: approvedCount }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 240,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Days Used" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 257,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: totalDaysUsed }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 258,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 252,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 251,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leave-request.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900", children: "New Leave Request" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 269,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowForm(false), className: "text-gray-400 hover:text-gray-600", children: "\u2715" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 270,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 268,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleFormSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Start Date ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 279,
                columnNumber: 34
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 278,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "startDate", value: formData.startDate, onChange: handleInputChange, required: true, className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 281,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 277,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "End Date ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 285,
                columnNumber: 32
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 284,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "endDate", value: formData.endDate, onChange: handleInputChange, required: true, className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 287,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 283,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 276,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            "Leave Type ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 293,
              columnNumber: 32
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 292,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "type", value: formData.type, onChange: handleInputChange, required: true, className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select leave type" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 296,
              columnNumber: 21
            }, this),
            leaveTypes.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: type, children: type }, type, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 297,
              columnNumber: 45
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 291,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            "Reason for Leave ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "*" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 303,
              columnNumber: 38
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 302,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "reason", value: formData.reason, onChange: handleInputChange, rows: 4, required: true, placeholder: "Please provide a detailed reason for your leave request...", className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 305,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 301,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Supporting Documents" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 309,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", onChange: handleFileChange, multiple: true, accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx", className: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1", children: "Accepted formats: PDF, JPG, PNG, DOC, DOCX (Max 5MB each)" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 313,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 308,
          columnNumber: 17
        }, this),
        formData.startDate && formData.endDate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-50 p-4 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Duration:" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 320,
            columnNumber: 23
          }, this),
          " ",
          calculateDays(formData.startDate, formData.endDate),
          " day(s)"
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 319,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 318,
          columnNumber: 60
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-end space-x-4 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowForm(false), className: "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors", children: "Cancel" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 325,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 329,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Submit Request" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 330,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 328,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 324,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 275,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leave-request.tsx",
      lineNumber: 267,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/student.leave-request.tsx",
      lineNumber: 266,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/student.leave-request.tsx",
      lineNumber: 265,
      columnNumber: 20
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: "Leave History" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 341,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterStatus, onChange: (e) => setFilterStatus(e.target.value), className: "p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Status" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 344,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 345,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "approved", children: "Approved" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 346,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "rejected", children: "Rejected" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 347,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 343,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "date", children: "Sort by Date" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 350,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "status", children: "Sort by Status" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 351,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 349,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 342,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 340,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: filteredRequests.map((request) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900", children: [
              new Date(request.startDate).toLocaleDateString(),
              " - ",
              new Date(request.endDate).toLocaleDateString()
            ] }, void 0, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 362,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`, children: request.type }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 365,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`, children: request.status.toUpperCase() }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 368,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 361,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 374,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Duration: ",
                request.dayCount,
                " day(s)"
              ] }, void 0, true, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 375,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 373,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 378,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Submitted: ",
                new Date(request.submittedDate).toLocaleDateString()
              ] }, void 0, true, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 379,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 377,
              columnNumber: 21
            }, this),
            request.approvedBy && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserIcon_default, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 382,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "By: ",
                request.approvedBy.split(" - ")[0]
              ] }, void 0, true, {
                fileName: "app/routes/student.leave-request.tsx",
                lineNumber: 383,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 381,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 372,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 mb-3", children: request.reason }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 386,
            columnNumber: 19
          }, this),
          request.comments && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-3 rounded-md mb-3 ${request.status === "approved" ? "bg-green-50 border border-green-200" : request.status === "rejected" ? "bg-red-50 border border-red-200" : "bg-yellow-50 border border-yellow-200"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-700 mb-1", children: "Comments:" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 389,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: request.comments }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 390,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 388,
            columnNumber: 40
          }, this),
          request.attachments && request.attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments:" }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 394,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: request.attachments.map((attachment, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200", children: [
              "\u{1F4CE} ",
              attachment
            ] }, index, true, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 396,
              columnNumber: 73
            }, this)) }, void 0, false, {
              fileName: "app/routes/student.leave-request.tsx",
              lineNumber: 395,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 393,
            columnNumber: 77
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 360,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 ml-6", children: [
          getStatusIcon(request.status),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/student/leave-request/${request.id}`, className: "p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-md transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 405,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.leave-request.tsx",
            lineNumber: 404,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 402,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 359,
        columnNumber: 15
      }, this) }, request.id, false, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 358,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 357,
        columnNumber: 9
      }, this),
      filteredRequests.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DocumentTextIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 413,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No leave requests found" }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 414,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: filterStatus === "all" ? "You haven't submitted any leave requests yet." : `No ${filterStatus} leave requests found.` }, void 0, false, {
          fileName: "app/routes/student.leave-request.tsx",
          lineNumber: 415,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.leave-request.tsx",
        lineNumber: 412,
        columnNumber: 43
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.leave-request.tsx",
      lineNumber: 339,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.leave-request.tsx",
    lineNumber: 194,
    columnNumber: 10
  }, this);
}
_s(StudentLeaveRequest, "DKQPBLI1NTkpih+WGg4l1+oh0qc=");
_c = StudentLeaveRequest;
var _c;
$RefreshReg$(_c, "StudentLeaveRequest");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentLeaveRequest as default,
  meta
};
//# sourceMappingURL=/build/routes/student.leave-request-LLEZA56U.js.map
