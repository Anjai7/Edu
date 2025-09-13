import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  ArrowRightOnRectangleIcon_default,
  Bars3Icon_default,
  BellIcon_default,
  BookOpenIcon_default,
  CalendarDaysIcon_default,
  ChartBarIcon_default,
  CogIcon_default,
  DocumentTextIcon_default,
  HomeIcon_default,
  MagnifyingGlassIcon_default,
  PencilIcon_default,
  PlusIcon_default,
  StarIcon_default,
  TagIcon_default,
  TrashIcon_default,
  TrophyIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-DBYJVH7L.js";
import {
  Link,
  useFetcher,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-PH6QN3RH.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/student.notes.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.notes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.notes.tsx"
  );
  import.meta.hot.lastModified = "1757763834170.718";
}
var meta = () => {
  return [{
    title: "Notes - EduHub Student"
  }, {
    name: "description",
    content: "Manage your study notes and materials"
  }];
};
function StudentNotes() {
  _s();
  const {
    notes,
    courses
  } = useLoaderData();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, import_react2.useState)(false);
  const [showCreateModal, setShowCreateModal] = (0, import_react2.useState)(false);
  const [editingNote, setEditingNote] = (0, import_react2.useState)(null);
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  const [selectedCourse, setSelectedCourse] = (0, import_react2.useState)("all");
  const [selectedTag, setSelectedTag] = (0, import_react2.useState)("all");
  const handleLogout = async () => {
    try {
      localStorage.removeItem("student_session");
      sessionStorage.clear();
      navigate("/", {
        replace: true
      });
    } catch (error) {
      console.error("Logout error:", error);
      navigate("/", {
        replace: true
      });
    }
  };
  const navigation = [{
    name: "Dashboard",
    href: "/student/dashboard",
    icon: HomeIcon_default,
    current: false
  }, {
    name: "Assignments",
    href: "/student/assignments",
    icon: DocumentTextIcon_default,
    current: false
  }, {
    name: "Attendance",
    href: "/student/attendance",
    icon: CalendarDaysIcon_default,
    current: false
  }, {
    name: "Performance",
    href: "/student/academic-performance",
    icon: ChartBarIcon_default,
    current: false
  }, {
    name: "Leaderboard",
    href: "/student/leaderboard",
    icon: TrophyIcon_default,
    current: false
  }, {
    name: "Notes",
    href: "/student/notes",
    icon: BookOpenIcon_default,
    current: true
  }, {
    name: "Announcements",
    href: "/student/announcements",
    icon: BellIcon_default,
    current: false
  }, {
    name: "Profile",
    href: "/student/profile",
    icon: CogIcon_default,
    current: false
  }];
  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === "all" || note.course_id?.toString() === selectedCourse;
    const matchesTag = selectedTag === "all" || note.tags && note.tags.includes(selectedTag);
    return matchesSearch && matchesCourse && matchesTag;
  });
  const allTags = [...new Set(notes.flatMap((note) => note.tags || []))];
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (editingNote) {
      formData.append("intent", "update");
      formData.append("noteId", editingNote.id.toString());
    } else {
      formData.append("intent", "create");
    }
    fetcher.submit(formData, {
      method: "post"
    });
    setShowCreateModal(false);
    setEditingNote(null);
  };
  const handleDelete = (noteId) => {
    if (confirm("Are you sure you want to delete this note?")) {
      const formData = new FormData();
      formData.append("intent", "delete");
      formData.append("noteId", noteId.toString());
      fetcher.submit(formData, {
        method: "post"
      });
    }
  };
  const handleFavorite = (noteId, isFavorite) => {
    const formData = new FormData();
    formData.append("intent", "favorite");
    formData.append("noteId", noteId.toString());
    formData.append("isFavorite", isFavorite.toString());
    fetcher.submit(formData, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed right-0 top-0 h-full w-72 bg-slate-800 shadow-2xl transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 lg:z-30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 279,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 280,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "lg:hidden text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 283,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 282,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 277,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: [
        navigation.map((item) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 294,
              columnNumber: 21
            }, this)
          ] }, item.name, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 292,
            columnNumber: 22
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleLogout, className: "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightOnRectangleIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 300,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Logout" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 301,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 299,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 289,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.notes.tsx",
      lineNumber: 275,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/student.notes.tsx",
      lineNumber: 274,
      columnNumber: 7
    }, this),
    isMobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gray-600 bg-opacity-75", onClick: () => setIsMobileMenuOpen(false) }, void 0, false, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 310,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto h-full w-72 bg-slate-800 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-bold text-white", children: "EduHub" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 316,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-300", children: "Student Portal" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 317,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 315,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(false), className: "text-slate-300 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 320,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 319,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 314,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 313,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "space-y-2", children: [
          navigation.map((item) => {
            const IconComponent = item.icon;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${item.current ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`, onClick: () => setIsMobileMenuOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconComponent, { className: "mr-3 h-5 w-5" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 330,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.name }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 331,
                columnNumber: 25
              }, this)
            ] }, item.name, true, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 329,
              columnNumber: 24
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            setIsMobileMenuOpen(false);
            handleLogout();
          }, className: "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors text-slate-300 hover:bg-red-600 hover:text-white mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightOnRectangleIcon_default, { className: "mr-3 h-5 w-5" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 340,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Logout" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 341,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 336,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 326,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 325,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 312,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.notes.tsx",
      lineNumber: 309,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 lg:mr-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-semibold text-gray-900", children: "Notes" }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 353,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 352,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setIsMobileMenuOpen(true), className: "text-gray-500 hover:text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6" }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 356,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 355,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900 hidden lg:block", children: "\u{1F4DD} My Notes" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 364,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Organize and manage your study notes" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 365,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 363,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowCreateModal(true), className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlusIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 368,
              columnNumber: 17
            }, this),
            "New Note"
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 367,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 361,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg p-6 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MagnifyingGlassIcon_default, { className: "h-5 w-5 absolute left-3 top-3 text-gray-400" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 378,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search notes...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 379,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 377,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: selectedCourse, onChange: (e) => setSelectedCourse(e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Courses" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 383,
              columnNumber: 17
            }, this),
            courses.map((course) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: course.id.toString(), children: course.name }, course.id, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 384,
              columnNumber: 40
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 382,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: selectedTag, onChange: (e) => setSelectedTag(e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Tags" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, this),
            allTags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: tag, children: tag }, tag, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 391,
              columnNumber: 37
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 389,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 self-center", children: [
            filteredNotes.length,
            " of ",
            notes.length,
            " notes"
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 396,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 376,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 375,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredNotes.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 truncate flex-1 mr-2", children: note.title }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 406,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleFavorite(note.id, note.is_favorite), className: `p-1 rounded ${note.is_favorite ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: "h-5 w-5" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 411,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 410,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
                setEditingNote(note);
                setShowCreateModal(true);
              }, className: "p-1 text-gray-400 hover:text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PencilIcon_default, { className: "h-5 w-5" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 417,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 413,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDelete(note.id), className: "p-1 text-gray-400 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-5 w-5" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 420,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 419,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 409,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 405,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mb-3 line-clamp-3", children: note.content }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 425,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: note.courses?.name || "No course" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 430,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: new Date(note.created_at).toLocaleDateString() }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 433,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 429,
            columnNumber: 17
          }, this),
          note.tags && note.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 flex flex-wrap gap-1", children: note.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TagIcon_default, { className: "h-3 w-3 mr-1" }, void 0, false, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 440,
              columnNumber: 25
            }, this),
            tag
          ] }, index, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 439,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 438,
            columnNumber: 55
          }, this)
        ] }, note.id, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 404,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 403,
          columnNumber: 11
        }, this),
        filteredNotes.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpenIcon_default, { className: "mx-auto h-12 w-12 text-gray-400" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 448,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900", children: "No notes found" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 449,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: notes.length === 0 ? "Get started by creating your first note." : "Try adjusting your search or filters." }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 450,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 447,
          columnNumber: 42
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 360,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.notes.tsx",
      lineNumber: 350,
      columnNumber: 7
    }, this),
    showCreateModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", onClick: () => {
        setShowCreateModal(false);
        setEditingNote(null);
      } }, void 0, false, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 460,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: editingNote ? "Edit Note" : "Create New Note" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 468,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-medium text-gray-700", children: "Title" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 474,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", id: "title", required: true, defaultValue: editingNote?.title || "", className: "mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 477,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 473,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "course_id", className: "block text-sm font-medium text-gray-700", children: "Course (Optional)" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 481,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "course_id", id: "course_id", defaultValue: editingNote?.course_id || "", className: "mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "No course" }, void 0, false, {
                  fileName: "app/routes/student.notes.tsx",
                  lineNumber: 485,
                  columnNumber: 25
                }, this),
                courses.map((course) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: course.id, children: course.name }, course.id, false, {
                  fileName: "app/routes/student.notes.tsx",
                  lineNumber: 486,
                  columnNumber: 48
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 484,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 480,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", className: "block text-sm font-medium text-gray-700", children: "Content" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 493,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", id: "content", rows: 6, required: true, defaultValue: editingNote?.content || "", className: "mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 496,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 492,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tags", className: "block text-sm font-medium text-gray-700", children: "Tags (comma-separated)" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 500,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "tags", id: "tags", defaultValue: editingNote?.tags?.join(", ") || "", placeholder: "e.g. important, exam, review", className: "mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" }, void 0, false, {
                fileName: "app/routes/student.notes.tsx",
                lineNumber: 503,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/student.notes.tsx",
              lineNumber: 499,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 472,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 467,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm", children: editingNote ? "Update" : "Create" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 509,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => {
            setShowCreateModal(false);
            setEditingNote(null);
          }, className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm", children: "Cancel" }, void 0, false, {
            fileName: "app/routes/student.notes.tsx",
            lineNumber: 512,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.notes.tsx",
          lineNumber: 508,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 466,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/student.notes.tsx",
        lineNumber: 465,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.notes.tsx",
      lineNumber: 459,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/student.notes.tsx",
      lineNumber: 458,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.notes.tsx",
    lineNumber: 272,
    columnNumber: 10
  }, this);
}
_s(StudentNotes, "dkHGAUQ/YfsfZ3Srers8c2hHbhA=", false, function() {
  return [useLoaderData, useNavigate, useFetcher];
});
_c = StudentNotes;
var _c;
$RefreshReg$(_c, "StudentNotes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentNotes as default,
  meta
};
//# sourceMappingURL=/build/routes/student.notes-RSMCYZEA.js.map
