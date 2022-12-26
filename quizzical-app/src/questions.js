import React from "react";

export default function Question(props) {
  return (
    <React.Fragment>
      <h1 className="question">{props.data.question}</h1>
      <div className="answers-position">
        <div className="answers">Answers</div>
        <div className="answers">Answers</div>
        <div className="answers">Answers</div>
        <div className="answers">Answers</div>
      </div>
      <hr />
    </React.Fragment>
  );
}
