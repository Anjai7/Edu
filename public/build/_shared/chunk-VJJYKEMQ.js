import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-IYO5FDN4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Button.tsx"
  );
  import.meta.hot.lastModified = "1757742132176.868";
}
function Button({
  children,
  onClick,
  variant = "primary",
  className = ""
}) {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick, className: `${baseClasses} ${variantClasses[variant]} ${className}`, children }, void 0, false, {
    fileName: "app/components/Button.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Button
};
//# sourceMappingURL=/build/_shared/chunk-VJJYKEMQ.js.map
