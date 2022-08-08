import React from "react";

import Search from "./search/search";
import Result from "./result/result";

import "./mainContent.scss";

const MainContent = () => {
  // Setting state to initialize values
  const [elems, setElems] = React.useState({
    result: {},
    mass: {},
    vol: {},
    moons: [],
    query: "",
    status: false,
  });

  // State to store temporary input values
  const [body, setBody] = React.useState("");

  // Targeting the input value
  const handleValue = function (e) {
    const val = e.target.value;
    console.log(val);
    setBody(val);
  };

  // Setting values and rendering results + Deciding state by boolean
  const onSubmit = function (e) {
    e.preventDefault();
    setElems({
      ...elems,
      query: body,
      status: true,
    });
    setBody("");
  };

  const closeScreen = function () {
    setElems({
      ...elems,
      status: false,
    });
  };

  // Fetching API & getting Data

  React.useEffect(() => {
    elems.status &&
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${elems.query}`)
        .then((res) => {
          if (res.status >= 404) {
            alert("Celestial body not found");
            setElems({
              ...elems,
              status: false,
            });
            throw new Error("Server responds with error!"); // Error Handling
          }
          return res.json();
        })
        .then((data) => {
          setElems({
            result: data,
            mass: data.mass,
            vol: data.vol,
            moons: data.moons,
          });
          //  Processing Data for Result
        });
  }, [elems.status]);

  return (
    <div className="mainContent">
      <Search onSubmit={onSubmit} handleValue={handleValue} body={body} />
      <Result elems={elems} closeScreen={closeScreen} />
    </div>
  );
};

export default MainContent;
