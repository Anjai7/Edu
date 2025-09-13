import {
  AcademicCapIcon_default,
  ArrowLeftIcon_default,
  CalendarIcon_default,
  ChartBarIcon_default,
  StarIcon_default,
  TrophyIcon_default
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

// app/routes/student.records.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.records.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.records.tsx"
  );
  import.meta.hot.lastModified = "1757752669280.7761";
}
var meta = () => {
  return [{
    title: "Academic Records - Student Dashboard"
  }, {
    name: "description",
    content: "View your academic records and performance"
  }];
};
var mockStudentInfo = {
  name: "John Doe",
  studentId: "STU2025001",
  class: "12th Grade",
  section: "A",
  rollNumber: "15",
  academicYear: "2024-2025"
};
var mockGrades = [{
  subject: "Mathematics",
  teacher: "Dr. Smith",
  grades: [{
    type: "Quiz 1",
    score: 85,
    maxScore: 100,
    date: "2025-08-15",
    weight: 10
  }, {
    type: "Mid-term",
    score: 78,
    maxScore: 100,
    date: "2025-08-30",
    weight: 30
  }, {
    type: "Assignment 1",
    score: 92,
    maxScore: 100,
    date: "2025-09-05",
    weight: 15
  }, {
    type: "Quiz 2",
    score: 88,
    maxScore: 100,
    date: "2025-09-10",
    weight: 10
  }],
  currentGrade: "B+",
  gpa: 3.3,
  attendance: 95
}, {
  subject: "Physics",
  teacher: "Dr. Wilson",
  grades: [{
    type: "Lab Report 1",
    score: 90,
    maxScore: 100,
    date: "2025-08-20",
    weight: 20
  }, {
    type: "Mid-term",
    score: 82,
    maxScore: 100,
    date: "2025-09-01",
    weight: 30
  }, {
    type: "Quiz 1",
    score: 75,
    maxScore: 100,
    date: "2025-09-08",
    weight: 15
  }],
  currentGrade: "B",
  gpa: 3,
  attendance: 92
}, {
  subject: "Chemistry",
  teacher: "Dr. Brown",
  grades: [{
    type: "Quiz 1",
    score: 95,
    maxScore: 100,
    date: "2025-08-18",
    weight: 15
  }, {
    type: "Lab Practical",
    score: 88,
    maxScore: 100,
    date: "2025-08-25",
    weight: 25
  }, {
    type: "Mid-term",
    score: 91,
    maxScore: 100,
    date: "2025-09-02",
    weight: 30
  }],
  currentGrade: "A-",
  gpa: 3.7,
  attendance: 98
}, {
  subject: "English Literature",
  teacher: "Ms. Davis",
  grades: [{
    type: "Essay 1",
    score: 87,
    maxScore: 100,
    date: "2025-08-22",
    weight: 20
  }, {
    type: "Mid-term",
    score: 84,
    maxScore: 100,
    date: "2025-09-03",
    weight: 30
  }, {
    type: "Presentation",
    score: 93,
    maxScore: 100,
    date: "2025-09-12",
    weight: 15
  }],
  currentGrade: "B+",
  gpa: 3.3,
  attendance: 94
}, {
  subject: "History",
  teacher: "Prof. Johnson",
  grades: [{
    type: "Research Paper",
    score: 89,
    maxScore: 100,
    date: "2025-08-28",
    weight: 25
  }, {
    type: "Mid-term",
    score: 86,
    maxScore: 100,
    date: "2025-09-04",
    weight: 30
  }, {
    type: "Quiz 1",
    score: 92,
    maxScore: 100,
    date: "2025-09-11",
    weight: 10
  }],
  currentGrade: "B+",
  gpa: 3.3,
  attendance: 96
}];
var mockSemesterGPAs = [{
  semester: "Fall 2024",
  gpa: 3.4,
  credits: 24
}, {
  semester: "Spring 2024",
  gpa: 3.2,
  credits: 24
}, {
  semester: "Fall 2023",
  gpa: 3.1,
  credits: 22
}, {
  semester: "Spring 2023",
  gpa: 3,
  credits: 22
}];
var mockAchievements = [{
  title: "Honor Roll",
  date: "Fall 2024",
  description: "Achieved GPA above 3.5"
}, {
  title: "Science Fair Winner",
  date: "March 2024",
  description: "1st place in Chemistry category"
}, {
  title: "Perfect Attendance",
  date: "Spring 2024",
  description: "100% attendance for the semester"
}, {
  title: "Math Olympiad",
  date: "February 2024",
  description: "School representative"
}];
function StudentRecords() {
  _s();
  const [selectedSubject, setSelectedSubject] = (0, import_react.useState)(null);
  const [viewType, setViewType] = (0, import_react.useState)("overview");
  const overallGPA = mockGrades.reduce((sum, subject) => sum + subject.gpa, 0) / mockGrades.length;
  const overallAttendance = mockGrades.reduce((sum, subject) => sum + subject.attendance, 0) / mockGrades.length;
  const getGradeColor = (grade) => {
    switch (grade[0]) {
      case "A":
        return "text-green-600 bg-green-100";
      case "B":
        return "text-blue-600 bg-blue-100";
      case "C":
        return "text-yellow-600 bg-yellow-100";
      case "D":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-red-600 bg-red-100";
    }
  };
  const getScoreColor = (score, maxScore) => {
    const percentage = score / maxScore * 100;
    if (percentage >= 90)
      return "text-green-600";
    if (percentage >= 80)
      return "text-blue-600";
    if (percentage >= 70)
      return "text-yellow-600";
    if (percentage >= 60)
      return "text-orange-600";
    return "text-red-600";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student/dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 242,
          columnNumber: 13
        }, this),
        "Back to Dashboard"
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 241,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Academic Records" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "View your grades, GPA, and academic performance" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 240,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-900", children: "Student Information" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("overview"), className: `px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewType === "overview" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Overview" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("detailed"), className: `px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewType === "detailed" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Detailed" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 260,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setViewType("transcript"), className: `px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewType === "transcript" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: "Transcript" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 263,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-500", children: "Student Name" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 271,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-900", children: mockStudentInfo.name }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 272,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 270,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-500", children: "Student ID" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-900", children: mockStudentInfo.studentId }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 276,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 274,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-500", children: "Class & Section" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 279,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-900", children: [
            mockStudentInfo.class,
            " - ",
            mockStudentInfo.section
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 278,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-500", children: "Academic Year" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-gray-900", children: mockStudentInfo.academicYear }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 282,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartBarIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 294,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Overall GPA" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 297,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: overallGPA.toFixed(2) }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 298,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 296,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcademicCapIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 306,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 305,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Subjects" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 309,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockGrades.length }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 310,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 304,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 318,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Attendance" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 321,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: [
            overallAttendance.toFixed(1),
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 322,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 320,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 316,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 315,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrophyIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 330,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 329,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Achievements" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 333,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockAchievements.length }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 334,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 332,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 328,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 327,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    viewType === "overview" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Current Grades" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 344,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: mockGrades.map((subject, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: subject.subject }, void 0, false, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 348,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: subject.teacher }, void 0, false, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 349,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 347,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.currentGrade)}`, children: subject.currentGrade }, void 0, false, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 352,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mt-1", children: [
              "GPA: ",
              subject.gpa
            ] }, void 0, true, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 355,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 351,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 346,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 345,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 343,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Recent Achievements" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: mockAchievements.map((achievement, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-3 p-4 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 366,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: achievement.title }, void 0, false, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 368,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-1", children: achievement.date }, void 0, false, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 369,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: achievement.description }, void 0, false, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 370,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 367,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 365,
          columnNumber: 61
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 364,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 362,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 341,
      columnNumber: 35
    }, this),
    viewType === "detailed" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: mockGrades.map((subject, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: subject.subject }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 381,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
            "Instructor: ",
            subject.teacher
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 382,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 380,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(subject.currentGrade)}`, children: subject.currentGrade }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 385,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mt-1", children: [
            "GPA: ",
            subject.gpa,
            " | Attendance: ",
            subject.attendance,
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 388,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 384,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 379,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-2 px-4 font-medium text-gray-700", children: "Assessment" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 398,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-2 px-4 font-medium text-gray-700", children: "Score" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 399,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-2 px-4 font-medium text-gray-700", children: "Date" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 400,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-2 px-4 font-medium text-gray-700", children: "Weight" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 401,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 397,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 396,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: subject.grades.map((grade, gradeIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-gray-100", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4", children: grade.type }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 406,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: `py-3 px-4 font-medium ${getScoreColor(grade.score, grade.maxScore)}`, children: [
            grade.score,
            "/",
            grade.maxScore,
            " (",
            (grade.score / grade.maxScore * 100).toFixed(1),
            "%)"
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 407,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-gray-600", children: new Date(grade.date).toLocaleDateString() }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 410,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-gray-600", children: [
            grade.weight,
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 411,
            columnNumber: 25
          }, this)
        ] }, gradeIndex, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 405,
          columnNumber: 64
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 404,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 395,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 394,
        columnNumber: 15
      }, this)
    ] }, index, true, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 378,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 377,
      columnNumber: 35
    }, this),
    viewType === "transcript" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: "Academic Transcript" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 421,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors", children: "Download PDF" }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 422,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 420,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: mockSemesterGPAs.map((semester, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-200 pb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-medium text-gray-900", children: semester.semester }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 430,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: [
              "GPA: ",
              semester.gpa
            ] }, void 0, true, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 432,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
              "Credits: ",
              semester.credits
            ] }, void 0, true, {
              fileName: "app/routes/student.records.tsx",
              lineNumber: 433,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 431,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 429,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: mockGrades.map((subject, subjectIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-3 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-gray-900", children: subject.subject }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 438,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
            "Grade: ",
            subject.currentGrade
          ] }, void 0, true, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 439,
            columnNumber: 23
          }, this)
        ] }, subjectIndex, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 437,
          columnNumber: 62
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 436,
          columnNumber: 17
        }, this)
      ] }, index, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 428,
        columnNumber: 56
      }, this)) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 427,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: "Cumulative GPA" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 448,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Based on all completed semesters" }, void 0, false, {
            fileName: "app/routes/student.records.tsx",
            lineNumber: 449,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 447,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-blue-600", children: (mockSemesterGPAs.reduce((sum, sem) => sum + sem.gpa, 0) / mockSemesterGPAs.length).toFixed(2) }, void 0, false, {
          fileName: "app/routes/student.records.tsx",
          lineNumber: 451,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 446,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.records.tsx",
        lineNumber: 445,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.records.tsx",
      lineNumber: 419,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.records.tsx",
    lineNumber: 237,
    columnNumber: 10
  }, this);
}
_s(StudentRecords, "IBzDhwWISw8xC2nLrLS83mK6AgA=");
_c = StudentRecords;
var _c;
$RefreshReg$(_c, "StudentRecords");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentRecords as default,
  meta
};
//# sourceMappingURL=/build/routes/student.records-SIWWE73I.js.map
