import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <ul className="guess-results">
      {guesses.map(({ word, id, letterCheck }) => (
        <Guess key={id} word={word} letterCheck={letterCheck} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((index) => (
        <Guess key={index} />
      ))}
    </ul>
  );
}

export default GuessResults;
