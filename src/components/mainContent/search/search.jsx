import React from "react";
import "./search.scss";
import { IoCheckmarkSharp } from "react-icons/io5";

// Handling SearchQuery
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
        <IoCheckmarkSharp className="icon" color={"#21504a"} size={"1.5rem"} />
      </button>
    </form>
  );
};

export default Search;
