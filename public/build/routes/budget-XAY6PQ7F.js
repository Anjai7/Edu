import {
  Button
} from "/build/_shared/chunk-ZLZBXQUS.js";
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
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

// app/routes/budget.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\budget.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\budget.tsx"
  );
  import.meta.hot.lastModified = "1757742132206.0955";
}
var meta = () => {
  return [{
    title: "Budget Tracker - EduHub"
  }, {
    name: "description",
    content: "Manage your student finances and optimize spending"
  }];
};
function Budget() {
  _s();
  const [expenses] = (0, import_react.useState)([{
    id: "1",
    category: "textbooks",
    amount: 250,
    description: "Calculus Textbook",
    date: "2024-01-15"
  }, {
    id: "2",
    category: "food",
    amount: 45,
    description: "Campus Lunch",
    date: "2024-01-15"
  }, {
    id: "3",
    category: "supplies",
    amount: 30,
    description: "Lab Materials",
    date: "2024-01-14"
  }, {
    id: "4",
    category: "transport",
    amount: 25,
    description: "Bus Pass",
    date: "2024-01-14"
  }]);
  const [monthlyBudget] = (0, import_react.useState)({
    textbooks: {
      budget: 500,
      spent: 250
    },
    food: {
      budget: 400,
      spent: 180
    },
    supplies: {
      budget: 150,
      spent: 75
    },
    transport: {
      budget: 100,
      spent: 50
    },
    entertainment: {
      budget: 200,
      spent: 120
    }
  });
  const totalBudget = Object.values(monthlyBudget).reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = Object.values(monthlyBudget).reduce((sum, cat) => sum + cat.spent, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-2", children: "Budget Tracker" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-gray-600", children: "Manage your student finances and optimize spending" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "primary", children: "Add Expense" }, void 0, false, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/budget.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Total Budget" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-blue-600", children: [
          "$",
          totalBudget
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "This month" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Total Spent" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-red-600", children: [
          "$",
          totalSpent
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: [
          (totalSpent / totalBudget * 100).toFixed(1),
          "% of budget"
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-2", children: "Remaining" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-green-600", children: [
          "$",
          totalBudget - totalSpent
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Available to spend" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/budget.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Category Breakdown" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: Object.entries(monthlyBudget).map(([category, data]) => {
          const percentage = data.spent / data.budget * 100;
          const isOverBudget = percentage > 100;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium capitalize", children: category }, void 0, false, {
                fileName: "app/routes/budget.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `text-sm ${isOverBudget ? "text-red-600" : "text-gray-600"}`, children: [
                "$",
                data.spent,
                " / $",
                data.budget
              ] }, void 0, true, {
                fileName: "app/routes/budget.tsx",
                lineNumber: 122,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/budget.tsx",
              lineNumber: 120,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-2 rounded-full ${isOverBudget ? "bg-red-500" : "bg-blue-500"}`, style: {
              width: `${Math.min(percentage, 100)}%`
            } }, void 0, false, {
              fileName: "app/routes/budget.tsx",
              lineNumber: 127,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/budget.tsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-gray-500", children: [
              percentage.toFixed(1),
              "% used"
            ] }, void 0, true, {
              fileName: "app/routes/budget.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this)
          ] }, category, true, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 119,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Recent Expenses" }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center p-3 border border-gray-200 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: expense.description }, void 0, false, {
              fileName: "app/routes/budget.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
              expense.date,
              " \u2022 ",
              expense.category
            ] }, void 0, true, {
              fileName: "app/routes/budget.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg font-semibold text-red-600", children: [
            "-$",
            expense.amount
          ] }, void 0, true, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, this)
        ] }, expense.id, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 142,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/budget.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold mb-4", children: "Textbook Optimization" }, void 0, false, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border border-gray-200 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium mb-2", children: "Buy Used" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-2", children: "Save up to 75% on textbooks by buying used copies" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", className: "w-full", children: "Find Used Books" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 165,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border border-gray-200 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium mb-2", children: "Digital Rentals" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-2", children: "Rent digital textbooks for short-term access" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", className: "w-full", children: "Browse Rentals" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border border-gray-200 rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium mb-2", children: "Library Access" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mb-2", children: "Check if your library has the books you need" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 176,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "secondary", className: "w-full", children: "Search Library" }, void 0, false, {
            fileName: "app/routes/budget.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/budget.tsx",
          lineNumber: 174,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/budget.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/budget.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/budget.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_s(Budget, "Z91DNdjlrJexl6Q3k1xn3WK1Gl8=");
_c = Budget;
var _c;
$RefreshReg$(_c, "Budget");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Budget as default,
  meta
};
//# sourceMappingURL=/build/routes/budget-XAY6PQ7F.js.map
