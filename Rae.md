import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const MainContent = () => {
const API_URL = `https://api.le-systeme-solaire.net/rest/bodies/`;

const [body, setBody] = React.useState({
results: [],
query: "",
});

const handleValue = function (e) {
const val = e.target.value;
setBody({
query: val,
});
};

displayResult = (e) => {
e.preventDefault();
React.useEffect(() => {
fetch(`https://api.le-systeme-solaire.net/rest/bodies/${query}`);
}).then((res) => {
const data = res.data;
data.map((item) => {
console.log(data);
setBody({
results: data,
});
});
});
};

// React.useEffect(() => {
// fetch(`https://api.le-systeme-solaire.net/rest/bodies/${elem}`)
// .then((res) => res.json())
// .then((data) => {
// setElem(data);
// console.log(data);
// });
// }, [elem]);

const Input = () => {
return (
<div>
<form onSubmit={displayResult}>
<input
            type="text"
            onChange={handleValue}
            name="name"
            value={body}
            placeholder="Enter name of Celestial body"
            required
          />
<button>
<IoCheckmarkSharp color={"#000"} />
</button>
</form>
</div>
);
};

return (
<div>
<Input />
<h2>Basic Properties:</h2>
<li>
<ul>Name:{elem.name}</ul>
<ul>Body Type:{elem.bodyType}</ul>
</li>
</div>
);
};

export default MainContent;

// const pageIntro = function () {
// return (
// <div className="page-intro">
// <h1 className="pageintro-title">Welkin</h1>
// <p className="pageintro-text">
// Enter the name of the Celestial body of solar sstem and get basic
// information about it!
// </p>
// <p className="text">
// This app is made by using <span className="underlined">React</span>.
// </p>
// </div>
// );
// };

// React.useEffect(() => {
// async function search(query) {
// try {
// const res = await fetch(`${API_URL}${query}`);
// const data = await res.json();
// setBody(data);
// } catch (err) {
// console.log(err);
// throw err;
// }
// }
// }, [elem]);

// englishName: "",
// bodyType: "",
// density: 1,
// dimension: "",
// discoveredBy: "",
// discoveryDate: "",
// eccentricity: "",
// equaRadius: "",
// flattening: "",
// gravity: "",
// massExponent: "",
// massValue: "",
// meanRadius: "",
// name: "",
// perihelion: "",
// polarRadius: "",
// semimajorAxis: "",
// sideralOrbit: "",
// sideralRotation: "",
// volExponent: "",
// volValue: "",


/*************************************************************************************************************************************************************************************************************************/

import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const MainContent = () => {
  const [elem, setElem] = React.useState({
    englishName: "",
    bodyType: "",
    query: "",
  });

  const [body, setBody] = React.useState("");

  const handleValue = function (e) {
    setBody(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    setBody("");
    setElem({
      query: body,
    });
  };

  React.useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/${elem}`)
      .then((res) => res.json())
      .then((data) => {
        setElem(data);
        console.log(data);
      });
  }, [elem]);

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
          <ul>Name:{elem.name}</ul>
          <ul>Body Type:{elem.bodyType}</ul>
        </li>
      </div>
    );
  };

  const Input = () => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={handleValue}
            name="query"
            value={elem.query}
            placeholder="Enter name of Celestial body"
            required
          />
          <button>
            <IoCheckmarkSharp color={"#000"} />
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Input />
      {elem.query === "" ? pageIntro() : Information()}
    </div>
  );
};

export default MainContent;