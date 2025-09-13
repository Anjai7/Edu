import {
  AcademicCapIcon_default,
  ArrowLeftIcon_default,
  BellIcon_default,
  CalendarDaysIcon_default,
  ClockIcon_default,
  ExclamationTriangleIcon_default,
  InformationCircleIcon_default,
  MapPinIcon_default,
  PrinterIcon_default
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

// app/routes/student.exam-timetable.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.exam-timetable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.exam-timetable.tsx"
  );
  import.meta.hot.lastModified = "1757744599381.2688";
}
var meta = () => {
  return [{
    title: "Exam Timetable - Student Dashboard"
  }, {
    name: "description",
    content: "View your examination schedule and important dates"
  }];
};
var mockExams = [{
  id: 1,
  subject: "Mathematics",
  date: "2025-09-20",
  time: "9:00 AM - 12:00 PM",
  duration: "3 hours",
  type: "Mid-term Examination",
  venue: "Main Hall - Block A",
  instructor: "Dr. Smith",
  totalMarks: 100,
  instructions: ["Bring calculator and geometry tools", "All questions are compulsory", "Show all working clearly"],
  syllabus: ["Algebra", "Geometry", "Trigonometry"],
  status: "upcoming"
}, {
  id: 2,
  subject: "Physics",
  date: "2025-09-22",
  time: "2:00 PM - 5:00 PM",
  duration: "3 hours",
  type: "Mid-term Examination",
  venue: "Science Lab - Block B",
  instructor: "Dr. Wilson",
  totalMarks: 100,
  instructions: ["Formula sheet will be provided", "Practical demonstration required", "Scientific calculator allowed"],
  syllabus: ["Mechanics", "Thermodynamics", "Optics"],
  status: "upcoming"
}, {
  id: 3,
  subject: "Chemistry",
  date: "2025-09-24",
  time: "9:00 AM - 12:00 PM",
  duration: "3 hours",
  type: "Mid-term Examination",
  venue: "Chemistry Lab - Block C",
  instructor: "Dr. Brown",
  totalMarks: 100,
  instructions: ["Periodic table will be provided", "Lab safety equipment required", "All equations must be balanced"],
  syllabus: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"],
  status: "upcoming"
}, {
  id: 4,
  subject: "English Literature",
  date: "2025-09-25",
  time: "10:00 AM - 1:00 PM",
  duration: "3 hours",
  type: "Mid-term Examination",
  venue: "Library Hall - Block D",
  instructor: "Ms. Davis",
  totalMarks: 100,
  instructions: ["Choice between essay questions", "Reference to text required", "Proper citation format expected"],
  syllabus: ["Shakespeare", "Modern Poetry", "Literary Analysis"],
  status: "upcoming"
}, {
  id: 5,
  subject: "History",
  date: "2025-09-27",
  time: "9:00 AM - 12:00 PM",
  duration: "3 hours",
  type: "Mid-term Examination",
  venue: "Conference Room - Block A",
  instructor: "Prof. Johnson",
  totalMarks: 100,
  instructions: ["Maps and timeline analysis", "Essay-type questions", "Historical evidence required"],
  syllabus: ["World War I", "Industrial Revolution", "Renaissance"],
  status: "upcoming"
}, {
  id: 6,
  subject: "Mathematics",
  date: "2025-09-15",
  time: "9:00 AM - 11:00 AM",
  duration: "2 hours",
  type: "Unit Test",
  venue: "Classroom 101",
  instructor: "Dr. Smith",
  totalMarks: 50,
  instructions: [],
  syllabus: ["Linear Equations"],
  status: "completed",
  score: 42
}];
var mockImportantDates = [{
  date: "2025-09-18",
  event: "Exam Registration Deadline",
  type: "deadline",
  description: "Last date to register for mid-term examinations"
}, {
  date: "2025-09-19",
  event: "Exam Hall Allocation",
  type: "information",
  description: "Exam venue and seating arrangement will be announced"
}, {
  date: "2025-09-28",
  event: "Result Declaration",
  type: "information",
  description: "Mid-term examination results will be published"
}];
function ExamTimetable() {
  _s();
  const [viewType, setViewType] = (0, import_react.useState)("list");
  const [filterType, setFilterType] = (0, import_react.useState)("all");
  const examTypes = [...new Set(mockExams.map((exam) => exam.type))];
  const filteredExams = mockExams.filter((exam) => {
    if (filterType !== "all" && exam.type !== filterType)
      return false;
    return true;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const upcomingExams = filteredExams.filter((exam) => exam.status === "upcoming");
  const completedExams = filteredExams.filter((exam) => exam.status === "completed");
  const getDaysUntilExam = (examDate) => {
    const today = /* @__PURE__ */ new Date();
    const exam = new Date(examDate);
    const diffTime = exam.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays;
  };
  const getExamUrgency = (examDate) => {
    const days = getDaysUntilExam(examDate);
    if (days < 0)
      return "text-gray-500";
    if (days <= 2)
      return "text-red-600 font-bold";
    if (days <= 7)
      return "text-yellow-600 font-medium";
    return "text-green-600";
  };
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "mid-term examination":
        return "bg-red-100 text-red-800";
      case "unit test":
        return "bg-blue-100 text-blue-800";
      case "final examination":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student-dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 173,
            columnNumber: 13
          }, this),
          "Back to Dashboard"
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 172,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Exam Timetable" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 177,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "View your examination schedule and important dates" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PrinterIcon_default, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Print Schedule" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.exam-timetable.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDaysIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Total Exams" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockExams.length }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 206,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Upcoming" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: upcomingExams.length }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Completed" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: completedExams.length }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-6 w-6 text-red-600" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "This Week" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 233,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: upcomingExams.filter((exam) => getDaysUntilExam(exam.date) <= 7).length }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.exam-timetable.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BellIcon_default, { className: "h-5 w-5 text-orange-500" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-900", children: "Important Dates" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 246,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 244,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: mockImportantDates.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-4 rounded-lg border-l-4 ${item.type === "deadline" ? "border-red-500 bg-red-50" : "border-blue-500 bg-blue-50"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 mb-2", children: [
          item.type === "deadline" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 251,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-5 w-5 text-blue-500" }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 251,
            columnNumber: 108
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900", children: item.event }, void 0, false, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 252,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 250,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-1", children: new Date(item.date).toLocaleDateString() }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 254,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: item.description }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 255,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 249,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.exam-timetable.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-900", children: "Exam Schedule" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterType, onChange: (e) => setFilterType(e.target.value), className: "p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Types" }, void 0, false, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 266,
              columnNumber: 15
            }, this),
            examTypes.map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: type, children: type }, type, false, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 267,
              columnNumber: 38
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("list"), className: `px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewType === "list" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "List View" }, void 0, false, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 270,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("calendar"), className: `px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewType === "calendar" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Calendar View" }, void 0, false, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 273,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 269,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      upcomingExams.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Exams" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 282,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: upcomingExams.map((exam) => {
          const daysUntil = getDaysUntilExam(exam.date);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl font-semibold text-gray-900", children: exam.subject }, void 0, false, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 290,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exam.type)}`, children: exam.type }, void 0, false, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 291,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 289,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDaysIcon_default, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 297,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: new Date(exam.date).toLocaleDateString() }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 298,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 296,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 301,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: exam.time }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 302,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 300,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon_default, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 305,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: exam.venue }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 306,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 304,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 309,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                      "Marks: ",
                      exam.totalMarks
                    ] }, void 0, true, {
                      fileName: "app/routes/student.exam-timetable.tsx",
                      lineNumber: 310,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 308,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 295,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 288,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-lg font-bold ${getExamUrgency(exam.date)}`, children: daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : daysUntil > 0 ? `${daysUntil} days` : "Past" }, void 0, false, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 315,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
                  "Duration: ",
                  exam.duration
                ] }, void 0, true, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 318,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 314,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 287,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "font-medium text-gray-900 mb-2", children: "Syllabus Coverage" }, void 0, false, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 325,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: exam.syllabus.map((topic, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: topic }, index, false, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 327,
                  columnNumber: 66
                }, this)) }, void 0, false, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 326,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 324,
                columnNumber: 25
              }, this),
              exam.instructions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "font-medium text-gray-900 mb-2", children: "Important Instructions" }, void 0, false, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 333,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-600 space-y-1", children: exam.instructions.map((instruction, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-start space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-500 mt-1.5 flex-shrink-0", children: "\u2022" }, void 0, false, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 336,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: instruction }, void 0, false, {
                    fileName: "app/routes/student.exam-timetable.tsx",
                    lineNumber: 337,
                    columnNumber: 35
                  }, this)
                ] }, index, true, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 335,
                  columnNumber: 78
                }, this)) }, void 0, false, {
                  fileName: "app/routes/student.exam-timetable.tsx",
                  lineNumber: 334,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 332,
                columnNumber: 58
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 323,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 322,
              columnNumber: 21
            }, this)
          ] }, exam.id, true, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 286,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 281,
        columnNumber: 38
      }, this),
      completedExams.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Completed Exams" }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 350,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: completedExams.map((exam) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-lg p-6 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold text-gray-900", children: exam.subject }, void 0, false, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 356,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exam.type)}`, children: exam.type }, void 0, false, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 357,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium", children: "\u2713 Completed" }, void 0, false, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 360,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 355,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6 text-sm text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Date: ",
                new Date(exam.date).toLocaleDateString()
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 365,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Venue: ",
                exam.venue
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 366,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Duration: ",
                exam.duration
              ] }, void 0, true, {
                fileName: "app/routes/student.exam-timetable.tsx",
                lineNumber: 367,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 364,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 354,
            columnNumber: 21
          }, this),
          exam.score !== void 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold text-blue-600", children: [
              exam.score,
              "/",
              exam.totalMarks
            ] }, void 0, true, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 371,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
              (exam.score / exam.totalMarks * 100).toFixed(1),
              "%"
            ] }, void 0, true, {
              fileName: "app/routes/student.exam-timetable.tsx",
              lineNumber: 374,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.exam-timetable.tsx",
            lineNumber: 370,
            columnNumber: 50
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 353,
          columnNumber: 19
        }, this) }, exam.id, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 352,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.exam-timetable.tsx",
          lineNumber: 351,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 349,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.exam-timetable.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this),
    filteredExams.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarDaysIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 385,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No exams found" }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 386,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Try adjusting your filters to see more exams." }, void 0, false, {
        fileName: "app/routes/student.exam-timetable.tsx",
        lineNumber: 387,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.exam-timetable.tsx",
      lineNumber: 384,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.exam-timetable.tsx",
    lineNumber: 168,
    columnNumber: 10
  }, this);
}
_s(ExamTimetable, "mJa6QOxp8EQUk2+BJF8UQmWlYI8=");
_c = ExamTimetable;
var _c;
$RefreshReg$(_c, "ExamTimetable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ExamTimetable as default,
  meta
};
//# sourceMappingURL=/build/routes/student.exam-timetable-ZTCSR7J6.js.map
