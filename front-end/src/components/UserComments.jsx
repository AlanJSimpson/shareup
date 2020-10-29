import React from "react";
import css from "./style/userCommentStyle.module.css";

export default function UserComments({ name, photo, comment, rows, cols }) {
  return (
    <>
      <div className={css.userComment}>
        <div className={css.userIdentity}>
          <img src={photo} alt="Moça bonita" />
          <span>{name}</span>
        </div>
        <div className={css.comments}>
          <textarea
            rows={rows}
            cols={cols}
            disabled="disabled"
            placeholder="Escreva algo..."
          >
            {comment}
          </textarea>
        </div>
      </div>
    </>
  );
}
