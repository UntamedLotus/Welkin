// import "./mainContent.style.scss";

import React from "react";
import Input from "./input/input";
import Screen from "./screen/screen";

const MainContent = () => {
  const [elem, setElem] = React.useState({
    englishName: "",
    bodyType: "",
  });

  const [body, setBody] = React.useState("");

  const handleValue = function (e) {
    setBody(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    setBody("");
    setElem(body);
  };

  React.useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${elem}`)
      .then((res) => res.json())
      .then((data) => {
        setElem(data);
        console.log(data);
      });
  }, [elem]);

  return (
    <div>
      <Input body={body} onSubmit={onSubmit} handleValue={handleValue} />
      <Screen elem={elem} />
    </div>
  );
};

export default MainContent;
