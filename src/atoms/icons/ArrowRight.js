import React from "react";
import "./styles.scss";

function ArrowRight(props) {
  return (
    <span className={props.classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        viewBox="0 0 12 12"
      >
        <path
          fill="#333"
          d="M6 .656L11.344 6 6 11.344l-.938-.938 3.72-3.75H.655V5.344h8.125l-3.719-3.75L6 .656z"
        ></path>
      </svg>
    </span>
  );
}

export default ArrowRight;
