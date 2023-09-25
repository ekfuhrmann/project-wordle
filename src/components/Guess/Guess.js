import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }, index) {
  const className = status ? `cell ${status}` : `cell`;

  return (
    <span key={crypto.randomUUID()} className={className}>
      {letter ? letter : undefined}
    </span>
  );
}

function Guess({ word, letterCheck }) {
  return (
    <li className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={word && word[num]}
          status={letterCheck && letterCheck[num].status}
        />
      ))}
    </li>
  );
}

export default Guess;
