import "./input.style.scss";
import React from "react";

const Input = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          onChange={props.handleValue}
          name="name"
          value={props.body}
          placeholder="Enter name of Celestial body"
          required
        />
        <input type="submit" className="submit-icon" />
      </form>
    </div>
  );
};

export default Input;
