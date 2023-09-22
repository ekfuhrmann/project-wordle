import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <li className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {word ? word[num] : undefined}
        </span>
      ))}
    </li>
  );
}

export default Guess;
