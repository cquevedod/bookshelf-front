import React from "react";

function Button({ disabled, styleName, type, children }) {
  return (
    <button
      disabled={disabled}
      className={styleName}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
