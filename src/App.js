import "./App.scss";
import React from "react";

function App() {
  const [elem, setElem] = React.useState({
    englishName: "",
    bodyType: "",
  });

  React.useEffect(() => {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/sun")
      .then((res) => res.json())
      .then((data) => {
        setElem(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>HelloWorld</h1>
        <h2>{elem.englishName}</h2>
        <p>{elem.bodyType}</p>
      </header>
    </div>
  );
}

export default App;
