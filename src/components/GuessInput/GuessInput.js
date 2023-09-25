import React from "react";

function GuessInput({ handleGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleGuess(tentativeGuess);
          setTentativeGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          value={tentativeGuess}
          onChange={(event) =>
            setTentativeGuess(event.target.value.toUpperCase())
          }
          disabled={gameStatus !== "running"}
          pattern="[a-zA-Z]{5}"
          onInvalid={(event) => {
            event.target.setCustomValidity(
              "Guess must be 5 alphabetical characters"
            );
          }}
          onInput={(event) => {
            event.target.setCustomValidity("");
          }}
          maxLength={5}
          minLength={5}
        />
      </form>
    </>
  );
}

export default GuessInput;
