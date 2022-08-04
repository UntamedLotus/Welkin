import React from "react";
import "./search.scss";
import { IoCheckmarkSharp } from "react-icons/io5";

const Search = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        onChange={props.handleValue}
        name="body"
        value={props.body}
        placeholder="Enter name of Celestial body"
        required
      />
      <button>
        <IoCheckmarkSharp color={"#000"} />
      </button>
    </form>
  );
};

export default Search;
