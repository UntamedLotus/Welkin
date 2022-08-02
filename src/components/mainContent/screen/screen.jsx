// import "./screen.style.scss";

import React from "react";

const Screen = (props) => {
  // const pageIntro = function () {
  //   return (
  //     <div className="page-intro">
  //       <h1 className="pageintro-title">Welkin</h1>
  //       <p className="pageintro-text">
  //         Enter the name of the Celestial body of solar sstem and get basic
  //         information about it!
  //       </p>
  //       <p className="text">
  //         This app is made by using <span className="underlined">React</span>.
  //       </p>
  //     </div>
  //   );
  // };

  return (
    <div>
      <div className="information">
        <h2>Basic Properties:</h2>
        <li>
          <ul>Name:{props.elem.name}</ul>
          <ul>Body Type:{props.elem.bodyType}</ul>
          <ul></ul>
        </li>
      </div>
    </div>
  );
};

export default Screen;
