import "./App.css";
import Start from "./Start";
import React from "react";
import Main from "./main";

export default function App() {
  const [start, setStart] = React.useState(false);

  function startGame() {
    setStart((prevStart) => !prevStart);
  }

  return (
    <div>
      {start ? <Start startGame={startGame} /> : <Main startGame={startGame} />}
    </div>
  );
}
