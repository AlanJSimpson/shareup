import React from "react";
import css from "./inputShareStyle.module.css";

export default function Input({ type, placeholder, name, id }) {
  return (
    <>
      <input
        className={css.inputStyle}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </>
  );
}
