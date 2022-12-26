import "./App.css";

export default function Start(props) {
  return (
    <div className="start-screen-container">
      <img src="./images/blob-top.png" alt="" className="decoration-1" />
      <img src="./images/blob-bot.png" alt="" className="decoration-2" />
      <h1 className="game-title">Quizzical</h1>
      <button className="game-btn" onClick={props.startGame}>
        Start quiz
      </button>
    </div>
  );
}
