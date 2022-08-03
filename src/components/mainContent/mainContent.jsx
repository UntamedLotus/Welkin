import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const MainContent = () => {
  const [elems, setElems] = React.useState({
    result: {},
    query: "",
    status: false,
  });

  const [body, setBody] = React.useState("");

  const handleValue = function (e) {
    const val = e.target.value;
    console.log(val);
    setBody(val);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    setElems({
      ...elems,
      query: body,
      status: true,
    });
    setBody("");
  };

  React.useEffect(() => {
    elems.status &&
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${elems.query}`)
        .then((res) => res.json())
        .then((data) => {
          setElems({
            result: data,
          });
          console.log(data);
        });
  }, [elems.status]);

  const pageIntro = function () {
    return (
      <div className="page-intro">
        <h1 className="pageintro-title">Welkin</h1>
        <p className="pageintro-text">
          Enter the name of the Celestial body of solar sstem and get basic
          information about it!
        </p>
        <p className="text">
          This app is made by using <span className="underlined">React</span>.
        </p>
      </div>
    );
  };

  const Information = function () {
    return (
      <div className="">
        <h2>Basic Properties:</h2>
        <li>
          <ul>Name:{elems.result.name}</ul>
          <ul>Body Type:{elems.result.bodyType}</ul>
        </li>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={handleValue}
          name="body"
          value={body}
          placeholder="Enter name of Celestial body"
          required
        />
        <button>
          <IoCheckmarkSharp color={"#000"} />
        </button>
      </form>
      {elems.status === false ? pageIntro() : Information()}
    </div>
  );
};

export default MainContent;
