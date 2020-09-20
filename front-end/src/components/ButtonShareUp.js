import React from "react";
import css from "./buttonStyle.module.css";

export default function ButtonShareUp({ type, newStyle, children, id }) {
  return (
    <button style={newStyle} id={id} className={css.buttonStyle} type={type}>
      {children}
    </button>
  );
}
