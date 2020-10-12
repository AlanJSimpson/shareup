import React from "react";
import css from "./inputShareStyle.module.css";

export default function Input({
  type,
  placeholder,
  name,
  id,
  required,
  maxLength,
  minLength,
  style,
}) {
  return (
    <>
      <input
        className={css.inputStyle}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        style={style}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
      />
    </>
  );
}
