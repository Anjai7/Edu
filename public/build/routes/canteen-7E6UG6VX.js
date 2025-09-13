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

// app/routes/canteen.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\canteen.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\canteen.tsx"
  );
  import.meta.hot.lastModified = "1757753877155.3474";
}
var meta = () => {
  return [{
    title: "Canteen - EduHub"
  }, {
    name: "description",
    content: "Order food online and track your orders"
  }];
};
function Canteen() {
  _s();
  const [cart, setCart] = (0, import_react.useState)({});
  const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
  const categories = [{
    id: "all",
    name: "All Items"
  }, {
    id: "meals",
    name: "Meals"
  }, {
    id: "snacks",
    name: "Snacks"
  }, {
    id: "beverages",
    name: "Beverages"
  }, {
    id: "desserts",
    name: "Desserts"
  }];
  const menuItems = [{
    id: 1,
    name: "Chicken Burger",
    description: "Grilled chicken patty with lettuce, tomato, and special sauce",
    price: 85,
    category: "meals",
    stock: 25,
    image: "\u{1F354}",
    available: true
  }, {
    id: 2,
    name: "Vegetable Sandwich",
    description: "Fresh vegetables with mayo and cheese",
    price: 45,
    category: "meals",
    stock: 30,
    image: "\u{1F96A}",
    available: true
  }, {
    id: 3,
    name: "Masala Tea",
    description: "Hot Indian spiced tea",
    price: 12,
    category: "beverages",
    stock: 50,
    image: "\u2615",
    available: true
  }, {
    id: 4,
    name: "Fresh Juice",
    description: "Mixed fruit juice",
    price: 25,
    category: "beverages",
    stock: 20,
    image: "\u{1F9C3}",
    available: true
  }, {
    id: 5,
    name: "Samosa",
    description: "Crispy fried pastry with potato filling",
    price: 20,
    category: "snacks",
    stock: 40,
    image: "\u{1F95F}",
    available: true
  }, {
    id: 6,
    name: "Pizza Slice",
    description: "Cheese pizza slice",
    price: 60,
    category: "meals",
    stock: 15,
    image: "\u{1F355}",
    available: true
  }, {
    id: 7,
    name: "Ice Cream",
    description: "Vanilla ice cream cup",
    price: 30,
    category: "desserts",
    stock: 0,
    image: "\u{1F368}",
    available: false
  }, {
    id: 8,
    name: "Cold Coffee",
    description: "Iced coffee with milk",
    price: 35,
    category: "beverages",
    stock: 25,
    image: "\u{1F964}",
    available: true
  }];
  const recentOrders = [{
    id: "ORD001",
    date: "2025-09-13",
    items: ["Chicken Burger", "Cold Coffee"],
    total: 120,
    status: "completed"
  }, {
    id: "ORD002",
    date: "2025-09-12",
    items: ["Samosa", "Masala Tea"],
    total: 32,
    status: "completed"
  }];
  const filteredItems = activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory);
  const addToCart = (itemId) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };
  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const newCart = {
        ...prev
      };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((i) => i.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };
  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900", children: "\u{1F37D}\uFE0F Canteen" }, void 0, false, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600 mt-2", children: "Order your favorite food online" }, void 0, false, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/canteen.tsx",
        lineNumber: 168,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-semibold", children: [
          "Cart (",
          getTotalItems(),
          " items)"
        ] }, void 0, true, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold text-green-600", children: [
          "\u20B9",
          getTotalPrice()
        ] }, void 0, true, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/canteen.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/canteen.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveCategory(category.id), className: `px-4 py-2 rounded-md transition-colors ${activeCategory === category.id ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: category.name }, category.id, false, {
      fileName: "app/routes/canteen.tsx",
      lineNumber: 181,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/canteen.tsx",
      lineNumber: 180,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/canteen.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: filteredItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-white rounded-lg shadow-md p-6 ${!item.available ? "opacity-50" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-3xl", children: item.image }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 194,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold", children: item.name }, void 0, false, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 196,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: item.description }, void 0, false, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 197,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 195,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 193,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl font-bold text-green-600", children: [
              "\u20B9",
              item.price
            ] }, void 0, true, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 201,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: item.available ? `${item.stock} left` : "Out of stock" }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 202,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 200,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 192,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 rounded-full text-xs ${item.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: item.available ? "Available" : "Out of Stock" }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 209,
            columnNumber: 19
          }, this),
          item.available && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: cart[item.id] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => removeFromCart(item.id), className: "w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300", children: "-" }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 215,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: cart[item.id] }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 218,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => addToCart(item.id), className: "w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center hover:bg-orange-700", children: "+" }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 219,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 214,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => addToCart(item.id), className: "bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors", children: "Add to Cart" }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 222,
            columnNumber: 34
          }, this) }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 213,
            columnNumber: 38
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 208,
          columnNumber: 17
        }, this)
      ] }, item.id, true, {
        fileName: "app/routes/canteen.tsx",
        lineNumber: 191,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/canteen.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/canteen.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "\u{1F6D2} Your Order" }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          Object.keys(cart).length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-center py-8", children: "Your cart is empty" }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 237,
            columnNumber: 47
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            Object.entries(cart).map(([itemId, quantity]) => {
              const item = menuItems.find((i) => i.id === parseInt(itemId));
              if (!item)
                return null;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: item.name }, void 0, false, {
                    fileName: "app/routes/canteen.tsx",
                    lineNumber: 243,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
                    "\u20B9",
                    item.price,
                    " \xD7 ",
                    quantity
                  ] }, void 0, true, {
                    fileName: "app/routes/canteen.tsx",
                    lineNumber: 244,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/canteen.tsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-bold", children: [
                  "\u20B9",
                  item.price * quantity
                ] }, void 0, true, {
                  fileName: "app/routes/canteen.tsx",
                  lineNumber: 246,
                  columnNumber: 23
                }, this)
              ] }, itemId, true, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 241,
                columnNumber: 22
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center text-lg font-bold", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total" }, void 0, false, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-green-600", children: [
                "\u20B9",
                getTotalPrice()
              ] }, void 0, true, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 253,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 251,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors", children: "Place Order" }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 257,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 237,
            columnNumber: 118
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "\u{1F4CB} Recent Orders" }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: recentOrders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-200 rounded-md p-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: [
                "#",
                order.id
              ] }, void 0, true, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 269,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs", children: order.status }, void 0, false, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 270,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 268,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600 mb-2", children: order.items.join(", ") }, void 0, false, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 274,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: new Date(order.date).toLocaleDateString() }, void 0, false, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 278,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: [
                "\u20B9",
                order.total
              ] }, void 0, true, {
                fileName: "app/routes/canteen.tsx",
                lineNumber: 279,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/canteen.tsx",
              lineNumber: 277,
              columnNumber: 19
            }, this)
          ] }, order.id, true, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 267,
            columnNumber: 42
          }, this)) }, void 0, false, {
            fileName: "app/routes/canteen.tsx",
            lineNumber: 266,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/canteen.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/canteen.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/canteen.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/canteen.tsx",
    lineNumber: 166,
    columnNumber: 10
  }, this);
}
_s(Canteen, "3f0J1JUvN4e/JJlx5YSa2zcx2fI=");
_c = Canteen;
var _c;
$RefreshReg$(_c, "Canteen");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Canteen as default,
  meta
};
//# sourceMappingURL=/build/routes/canteen-7E6UG6VX.js.map
