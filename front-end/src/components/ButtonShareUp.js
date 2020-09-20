import React from "react";
import css from "./buttonStyle.module.css";

export default function ButtonShareUp({ type, newStyle, children }) {
  return (
    <button style={newStyle} className={css.buttonStyle} type={type}>
      {children}
    </button>
  );
}
