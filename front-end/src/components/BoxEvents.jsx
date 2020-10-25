import React from "react";
import Event from "./Event";
import css from "./style/boxEvents.module.css";

export default function BoxEvents({ content, children }) {
  return (
    <div className={css.eventBox}>
      <h3>{children}</h3>
      <Event {...content} />
    </div>
  );
}
