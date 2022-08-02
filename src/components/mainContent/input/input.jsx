import "./input.style.scss";
import React from "react";
import Icon from "./icon/icon";

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
        <button>
          <Icon />
        </button>
      </form>
    </div>
  );
};

export default Input;

// IoCheckmarkSharp
