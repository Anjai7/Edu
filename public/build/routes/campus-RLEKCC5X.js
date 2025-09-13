import {
  Button
} from "/build/_shared/chunk-VJJYKEMQ.js";
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

// app/routes/campus.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\campus.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\campus.tsx"
  );
  import.meta.hot.lastModified = "1757742132210.805";
}
var meta = () => {
  return [{
    title: "Campus Resources - EduHub"
  }, {
    name: "description",
    content: "Find study spots, labs, and campus amenities"
  }];
};
function Campus() {
  _s();
  const [resources] = (0, import_react.useState)([{
    id: "1",
    name: "Science Library",
    type: "study_space",
    location: "Building A, Floor 3",
    description: "Quiet study space with science journals and research materials",
    capacity: 200,
    amenities: ["WiFi", "Power Outlets", "Printing", "Silent Zone"],
    hours: "24/7",
    rating: 4.8,
    isAvailable: true
  }, {
    id: "2",
    name: "Chemistry Lab",
    type: "lab",
    location: "Building B, Floor 2",
    description: "Fully equipped chemistry laboratory for experiments",
    capacity: 30,
    amenities: ["Fume Hoods", "Equipment", "Safety Gear"],
    hours: "8 AM - 6 PM",
    rating: 4.5,
    isAvailable: false
  }, {
    id: "3",
    name: "Student Caf\xE9",
    type: "food",
    location: "Student Union, Ground Floor",
    description: "Coffee, snacks, and light meals",
    capacity: 100,
    amenities: ["WiFi", "Outdoor Seating", "Group Tables"],
    hours: "7 AM - 10 PM",
    rating: 4.2,
    isAvailable: true
  }, {
    id: "4",
    name: "Computer Lab",
    type: "lab",
    location: "Building C, Floor 1",
    description: "24/7 computer access with specialized software",
    capacity: 50,
    amenities: ["High-Speed Internet", "Printing", "Software"],
    hours: "24/7",
    rating: 4.6,
    isAvailable: true
  }]);
  const [selectedType, setSelectedType] = (0, import_react.useState)("all");
  const filteredResources = selectedType === "all" ? resources : resources.filter((resource) => resource.type === selectedType);
  const getTypeColor = (type) => {
    const colors = {
      study_space: "bg-blue-100 text-blue-800",
      lab: "bg-green-100 text-green-800",
      food: "bg-orange-100 text-orange-800",
      library: "bg-purple-100 text-purple-800",
      other: "bg-gray-100 text-gray-800"
    };
    return colors[type] || colors.other;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Campus Resources" }, void 0, false, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Find study spots, labs, and campus amenities" }, void 0, false, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/campus.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-3 justify-center", children: ["all", "study_space", "lab", "food", "library"].map((type) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedType(type), className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === type ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`, children: type === "all" ? "All" : type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase()) }, type, false, {
      fileName: "app/routes/campus.tsx",
      lineNumber: 100,
      columnNumber: 71
    }, this)) }, void 0, false, {
      fileName: "app/routes/campus.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredResources.map((resource) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: resource.name }, void 0, false, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`, children: resource.type.replace("_", " ") }, void 0, false, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mb-3", children: resource.description }, void 0, false, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Location:" }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: resource.location }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 120,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Hours:" }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 123,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: resource.hours }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 124,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: "Capacity:" }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2", children: [
              resource.capacity,
              " people"
            ] }, void 0, true, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-700 mb-2", children: "Amenities:" }, void 0, false, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-1", children: resource.amenities.map((amenity, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded", children: amenity }, index, false, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 135,
            columnNumber: 63
          }, this)) }, void 0, false, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: `w-4 h-4 ${i < Math.floor(resource.rating) ? "text-yellow-400" : "text-gray-300"}`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 145,
              columnNumber: 25
            }, this) }, i, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 144,
              columnNumber: 50
            }, this)) }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 143,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: resource.rating }, void 0, false, {
              fileName: "app/routes/campus.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 142,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `px-2 py-1 rounded-full text-xs font-medium ${resource.isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: resource.isAvailable ? "Available" : "Busy" }, void 0, false, {
            fileName: "app/routes/campus.tsx",
            lineNumber: 150,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-3 bg-gray-50 border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", className: "w-full", children: "View Details" }, void 0, false, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 157,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this)
    ] }, resource.id, true, {
      fileName: "app/routes/campus.tsx",
      lineNumber: 106,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/routes/campus.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-semibold mb-4", children: "Campus Map" }, void 0, false, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 rounded-lg h-64 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-gray-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-medium", children: "Interactive Campus Map" }, void 0, false, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: "Click on buildings to see available resources" }, void 0, false, {
          fileName: "app/routes/campus.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/campus.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/campus.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/campus.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(Campus, "GDOPLB3rKCg/8z6TdD30+pRblGQ=");
_c = Campus;
var _c;
$RefreshReg$(_c, "Campus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Campus as default,
  meta
};
//# sourceMappingURL=/build/routes/campus-RLEKCC5X.js.map
