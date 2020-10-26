import React from "react";
import css from "./style/inputShareStyle.module.css";

export default function Input({
  type,
  placeholder,
  name,
  id,
  required,
  maxLength,
  minLength,
  style,
  icon
}) {
  return (
    <>
      <div className={css.inputContainer}>
        <div className={css.inputIcon}><i className={icon}></i></div>
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
      </div>
    </>
  );
}
