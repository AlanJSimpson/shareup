import React from 'react';
import css from './style/buttonStyle.module.css';

// eslint-disable-next-line react/prop-types
export default function ButtonShareUp({ type, newStyle, children, id }) {
  return (
    <button style={newStyle} id={id} className={css.buttonStyle} type={type}>
      {children}
    </button>
  );
}
