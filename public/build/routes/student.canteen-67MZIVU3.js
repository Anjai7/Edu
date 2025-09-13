import {
  ArrowLeftIcon_default,
  CheckCircleIcon_default,
  ClockIcon_default,
  ExclamationTriangleIcon_default,
  FunnelIcon_default,
  ShoppingBagIcon_default,
  ShoppingCartIcon_default,
  StarIcon_default,
  XCircleIcon_default
} from "/build/_shared/chunk-RPU4KNDY.js";
import {
  Link
} from "/build/_shared/chunk-362WUEPV.js";
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

// app/routes/student.canteen.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\student.canteen.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\student.canteen.tsx"
  );
  import.meta.hot.lastModified = "1757744845288.6753";
}
var meta = () => {
  return [{
    title: "Canteen Stock - Student Dashboard"
  }, {
    name: "description",
    content: "View available canteen items and stock levels"
  }];
};
var mockCanteenItems = [{
  id: 1,
  name: "Vegetable Sandwich",
  category: "Snacks",
  price: 3.5,
  originalPrice: 4,
  description: "Fresh vegetables with whole wheat bread and mayo",
  image: "\u{1F96A}",
  stockLevel: 25,
  maxStock: 50,
  availability: "available",
  preparationTime: "5 mins",
  isVegetarian: true,
  isVegan: false,
  allergens: ["Gluten", "Dairy"],
  rating: 4.2,
  reviews: 156,
  nutritionalInfo: {
    calories: 280,
    protein: 8,
    carbs: 35,
    fat: 12
  }
}, {
  id: 2,
  name: "Chicken Burger",
  category: "Main Course",
  price: 6.5,
  originalPrice: 6.5,
  description: "Grilled chicken patty with lettuce, tomato, and special sauce",
  image: "\u{1F354}",
  stockLevel: 3,
  maxStock: 30,
  availability: "low_stock",
  preparationTime: "12 mins",
  isVegetarian: false,
  isVegan: false,
  allergens: ["Gluten", "Dairy"],
  rating: 4.7,
  reviews: 243,
  nutritionalInfo: {
    calories: 520,
    protein: 28,
    carbs: 42,
    fat: 26
  }
}, {
  id: 3,
  name: "Fresh Orange Juice",
  category: "Beverages",
  price: 2,
  originalPrice: 2.5,
  description: "Freshly squeezed orange juice with no added sugar",
  image: "\u{1F34A}",
  stockLevel: 0,
  maxStock: 40,
  availability: "out_of_stock",
  preparationTime: "2 mins",
  isVegetarian: true,
  isVegan: true,
  allergens: [],
  rating: 4.5,
  reviews: 89,
  nutritionalInfo: {
    calories: 110,
    protein: 2,
    carbs: 26,
    fat: 0
  }
}, {
  id: 4,
  name: "Caesar Salad",
  category: "Salads",
  price: 4.75,
  originalPrice: 4.75,
  description: "Crisp romaine lettuce with Caesar dressing and croutons",
  image: "\u{1F957}",
  stockLevel: 18,
  maxStock: 25,
  availability: "available",
  preparationTime: "8 mins",
  isVegetarian: true,
  isVegan: false,
  allergens: ["Dairy", "Eggs"],
  rating: 4.1,
  reviews: 124,
  nutritionalInfo: {
    calories: 220,
    protein: 6,
    carbs: 12,
    fat: 18
  }
}, {
  id: 5,
  name: "Chocolate Chip Cookies",
  category: "Desserts",
  price: 1.5,
  originalPrice: 2,
  description: "Freshly baked cookies with chocolate chips",
  image: "\u{1F36A}",
  stockLevel: 45,
  maxStock: 60,
  availability: "available",
  preparationTime: "Ready",
  isVegetarian: true,
  isVegan: false,
  allergens: ["Gluten", "Dairy", "Eggs"],
  rating: 4.8,
  reviews: 312,
  nutritionalInfo: {
    calories: 180,
    protein: 3,
    carbs: 24,
    fat: 8
  }
}, {
  id: 6,
  name: "Iced Coffee",
  category: "Beverages",
  price: 2.75,
  originalPrice: 2.75,
  description: "Cold brew coffee with ice and optional milk",
  image: "\u2615",
  stockLevel: 32,
  maxStock: 40,
  availability: "available",
  preparationTime: "3 mins",
  isVegetarian: true,
  isVegan: true,
  allergens: [],
  rating: 4.3,
  reviews: 198,
  nutritionalInfo: {
    calories: 15,
    protein: 1,
    carbs: 2,
    fat: 0
  }
}, {
  id: 7,
  name: "Margherita Pizza Slice",
  category: "Main Course",
  price: 3.25,
  originalPrice: 3.25,
  description: "Classic pizza with tomato sauce, mozzarella, and basil",
  image: "\u{1F355}",
  stockLevel: 12,
  maxStock: 36,
  availability: "available",
  preparationTime: "Ready",
  isVegetarian: true,
  isVegan: false,
  allergens: ["Gluten", "Dairy"],
  rating: 4.4,
  reviews: 267,
  nutritionalInfo: {
    calories: 310,
    protein: 14,
    carbs: 35,
    fat: 14
  }
}, {
  id: 8,
  name: "Fruit Smoothie",
  category: "Beverages",
  price: 3,
  originalPrice: 3.5,
  description: "Mixed fruit smoothie with banana, berries, and yogurt",
  image: "\u{1F964}",
  stockLevel: 8,
  maxStock: 20,
  availability: "low_stock",
  preparationTime: "4 mins",
  isVegetarian: true,
  isVegan: false,
  allergens: ["Dairy"],
  rating: 4.6,
  reviews: 145,
  nutritionalInfo: {
    calories: 195,
    protein: 6,
    carbs: 42,
    fat: 2
  }
}];
function StudentCanteen() {
  _s();
  const [filterCategory, setFilterCategory] = (0, import_react.useState)("all");
  const [filterAvailability, setFilterAvailability] = (0, import_react.useState)("all");
  const [filterDietary, setFilterDietary] = (0, import_react.useState)("all");
  const [sortBy, setSortBy] = (0, import_react.useState)("name");
  const [cart, setCart] = (0, import_react.useState)({});
  const categories = [...new Set(mockCanteenItems.map((item) => item.category))];
  const filteredItems = mockCanteenItems.filter((item) => {
    if (filterCategory !== "all" && item.category !== filterCategory)
      return false;
    if (filterAvailability !== "all" && item.availability !== filterAvailability)
      return false;
    if (filterDietary === "vegetarian" && !item.isVegetarian)
      return false;
    if (filterDietary === "vegan" && !item.isVegan)
      return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "name")
      return a.name.localeCompare(b.name);
    if (sortBy === "price")
      return a.price - b.price;
    if (sortBy === "rating")
      return b.rating - a.rating;
    if (sortBy === "stock")
      return b.stockLevel - a.stockLevel;
    return 0;
  });
  const getAvailabilityIcon = (availability) => {
    switch (availability) {
      case "available":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-500" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 244,
          columnNumber: 16
        }, this);
      case "low_stock":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-5 w-5 text-yellow-500" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 246,
          columnNumber: 16
        }, this);
      case "out_of_stock":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "h-5 w-5 text-red-500" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 248,
          columnNumber: 16
        }, this);
      default:
        return null;
    }
  };
  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800";
      case "low_stock":
        return "bg-yellow-100 text-yellow-800";
      case "out_of_stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getStockPercentage = (current, max) => {
    return current / max * 100;
  };
  const addToCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };
  const removeFromCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1)
    }));
  };
  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0);
  };
  const getTotalCartPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, count]) => {
      const item = mockCanteenItems.find((i) => i.id === parseInt(itemId));
      return total + (item ? item.price * count : 0);
    }, 0);
  };
  const renderStars = (rating) => {
    return Array.from({
      length: 5
    }, (_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StarIcon_default, { className: `h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}` }, i, false, {
      fileName: "app/routes/student.canteen.tsx",
      lineNumber: 292,
      columnNumber: 18
    }, this));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/student-dashboard", className: "flex items-center text-gray-600 hover:text-gray-900 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftIcon_default, { className: "h-5 w-5 mr-2" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 299,
            columnNumber: 13
          }, this),
          "Back to Dashboard"
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Canteen Stock" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "View available items and place orders" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 304,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 297,
        columnNumber: 9
      }, this),
      getTotalCartItems() > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCartIcon_default, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 309,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            getTotalCartItems(),
            " items"
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 310,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "$",
            getTotalCartPrice().toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 311,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 308,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors", children: "Checkout" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 313,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 307,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.canteen.tsx",
      lineNumber: 296,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBagIcon_default, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 324,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 323,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Total Items" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockCanteenItems.length }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 328,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 326,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 322,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 321,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-6 w-6 text-green-600" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 336,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 335,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Available" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 339,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockCanteenItems.filter((item) => item.availability === "available").length }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 340,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 338,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 334,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-yellow-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationTriangleIcon_default, { className: "h-6 w-6 text-yellow-600" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 350,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 349,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Low Stock" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 353,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockCanteenItems.filter((item) => item.availability === "low_stock").length }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 354,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 352,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 348,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 347,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-100 p-3 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "h-6 w-6 text-red-600" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 364,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500", children: "Out of Stock" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 367,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: mockCanteenItems.filter((item) => item.availability === "out_of_stock").length }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 368,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 366,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 362,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 361,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.canteen.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 379,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: "Filters & Sort" }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 380,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 378,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Category" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 384,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterCategory, onChange: (e) => setFilterCategory(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Categories" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 386,
              columnNumber: 15
            }, this),
            categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category, children: category }, category, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 387,
              columnNumber: 43
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 385,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 383,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Availability" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 391,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterAvailability, onChange: (e) => setFilterAvailability(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Items" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 393,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "available", children: "Available" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 394,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "low_stock", children: "Low Stock" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 395,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "out_of_stock", children: "Out of Stock" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 396,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 392,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 390,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Dietary" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 400,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: filterDietary, onChange: (e) => setFilterDietary(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Options" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 402,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "vegetarian", children: "Vegetarian" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 403,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "vegan", children: "Vegan" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 404,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 401,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 399,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort By" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 408,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "name", children: "Name" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 410,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "price", children: "Price" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 411,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "rating", children: "Rating" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 412,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "stock", children: "Stock Level" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 413,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 409,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 407,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 382,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.canteen.tsx",
      lineNumber: 377,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredItems.map((item) => {
      const stockPercentage = getStockPercentage(item.stockLevel, item.maxStock);
      const cartQuantity = cart[item.id] || 0;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl", children: item.image }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 427,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: getAvailabilityIcon(item.availability) }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 428,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 426,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: item.name }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 433,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-3", children: item.description }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 434,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(item.availability)}`, children: item.availability.replace("_", " ").toUpperCase() }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 437,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium", children: item.category }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 440,
            columnNumber: 19
          }, this),
          item.isVegetarian && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium", children: "\u{1F331} VEG" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 443,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 436,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
            renderStars(item.rating),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600 ml-1", children: [
              item.rating,
              " (",
              item.reviews,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 451,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 449,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-1 text-sm text-gray-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 456,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.preparationTime }, void 0, false, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 457,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 455,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 448,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-sm text-gray-600 mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "Stock: ",
              item.stockLevel,
              "/",
              item.maxStock
            ] }, void 0, true, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 463,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              stockPercentage.toFixed(0),
              "%"
            ] }, void 0, true, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 464,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 462,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 rounded-full ${stockPercentage > 50 ? "bg-green-500" : stockPercentage > 20 ? "bg-yellow-500" : "bg-red-500"}`, style: {
            width: `${stockPercentage}%`
          } }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 467,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 466,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 461,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-bold text-gray-900", children: [
              "$",
              item.price
            ] }, void 0, true, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 475,
              columnNumber: 21
            }, this),
            item.originalPrice > item.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500 line-through", children: [
              "$",
              item.originalPrice
            ] }, void 0, true, {
              fileName: "app/routes/student.canteen.tsx",
              lineNumber: 476,
              columnNumber: 57
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 474,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600", children: [
            item.nutritionalInfo.calories,
            " cal"
          ] }, void 0, true, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 478,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 473,
          columnNumber: 17
        }, this),
        item.availability !== "out_of_stock" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: cartQuantity > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 bg-gray-100 rounded-lg p-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => removeFromCart(item.id), className: "w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-red-600 transition-colors", children: "-" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 485,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-8 text-center font-medium", children: cartQuantity }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 488,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => addToCart(item.id), className: "w-8 h-8 bg-white rounded-md flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors", children: "+" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 489,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 484,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => addToCart(item.id), className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingCartIcon_default, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 493,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Add to Cart" }, void 0, false, {
            fileName: "app/routes/student.canteen.tsx",
            lineNumber: 494,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 492,
          columnNumber: 32
        }, this) }, void 0, false, {
          fileName: "app/routes/student.canteen.tsx",
          lineNumber: 483,
          columnNumber: 58
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 425,
        columnNumber: 15
      }, this) }, item.id, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 424,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/student.canteen.tsx",
      lineNumber: 420,
      columnNumber: 7
    }, this),
    filteredItems.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBagIcon_default, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 503,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No items found" }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 504,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Try adjusting your filters to see more items." }, void 0, false, {
        fileName: "app/routes/student.canteen.tsx",
        lineNumber: 505,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/student.canteen.tsx",
      lineNumber: 502,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/student.canteen.tsx",
    lineNumber: 294,
    columnNumber: 10
  }, this);
}
_s(StudentCanteen, "k8gGDQskJNfbaWOsFGEUlJQnmkE=");
_c = StudentCanteen;
var _c;
$RefreshReg$(_c, "StudentCanteen");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  StudentCanteen as default,
  meta
};
//# sourceMappingURL=/build/routes/student.canteen-67MZIVU3.js.map
