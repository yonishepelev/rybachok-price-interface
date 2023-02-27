import React from "react";
import css from "./Button.module.css";

export const Button = ({ text, color, onClickCallback }) => {
  const cssArray = [];
  cssArray.push(css.containerButton);
  if (color === "orange") {
    cssArray.push(css.orange);
  }
  if (color === "brightCyan") {
    cssArray.push(css.brightCyan);
  }

  return (
    <button
      onClick={() => {
      
        if (typeof onClickCallback === "function") {
          onClickCallback();
        }
      }}
      className={cssArray.join(" ")}>
      {text}
    </button>
  );
};
