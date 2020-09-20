import React from "react";
import css from "./logoStyle.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <h1>ShareUp!</h1>
      <h6>Knowledge for everyone!</h6>
    </div>
  );
}
