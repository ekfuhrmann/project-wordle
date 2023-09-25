import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running"); // ['playing', 'won', 'lost'
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(tentativeGuess) {
    if (NUM_OF_GUESSES_ALLOWED === guesses.length) {
      return;
    }

    const nextGuesses = [
      ...guesses,
      {
        word: tentativeGuess,
        letterCheck: checkGuess(tentativeGuess, answer),
        id: crypto.randomUUID(),
      },
    ];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
