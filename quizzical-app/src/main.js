import "./App.css";
import Question from "./questions";
import data from "./data";

export default function Main(props) {
  // const question = data.results.map(() => <Question data={data.results} />);
  const value = data[0];
  return (
    <main>
      <Question data={value} />
      <button className="game-btn" onClick={props.startGame}>
        BACK
      </button>
    </main>
  );
}
