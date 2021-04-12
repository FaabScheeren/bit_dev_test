import React, { Fragment } from 'react';
import "./style.scss";

function Checkbox(props) {
  return (
    <div>
      <input
        name={props.name}
        type="checkbox"
        className="checkbox_input"
        id={props.for}
      />
      <label htmlFor={props.for} className="checkbox_label">
        {props.labelText}
      </label>
    </div>
  );
}

export default Checkbox;