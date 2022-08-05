import React from "react";

import Search from "./search/search";
import Result from "./result/result";

import "./mainContent.scss";

const MainContent = () => {
  const [elems, setElems] = React.useState({
    result: {},
    mass: {},
    vol: {},
    moons: [],
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
        .then((res) => {
          if (res.status >= 404) {
            alert("Celestial body not found");
            setElems({
              ...elems,
              status: false,
            });
            throw new Error("Server responds with error!");
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
        });
  }, [elems.status]);

  return (
    <div className="mainContent">
      <Search onSubmit={onSubmit} handleValue={handleValue} body={body} />
      <Result elems={elems} />
    </div>
  );
};

export default MainContent;
