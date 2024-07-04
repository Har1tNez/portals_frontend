// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ children, onClick }) => {
  return /* @__PURE__ */ jsx("button", { onClick, className: "px-4 py-2 bg-blue-500 text-white rounded", children });
};
export {
  Button
};
