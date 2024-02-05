import { useState, useEffect, useContext } from "react";
import { RandomWordContext } from "../contexts/WordServiceProvider";
import Board from "./Board";

export interface GameRow {
  index: number;
  disabled: boolean;
  value: string;
  tiles: RowTile[];
}

export interface RowTile {
  index: number;
  disabled: boolean;
  value: string;
}

const Game = () => {
  const wordLength = 5;
  const guesses = 6;
  const [word, setWord] = useState("");
  const randomWordService = useContext(RandomWordContext);

  useEffect(() => {
    fetchNewWord();
  }, []);

  const fetchNewWord = async () => {
    const word = await randomWordService.getRandomWordAsync();
    setWord(word);
  };

  return (
    <>
      <h1>{word}</h1>
      <button onClick={() => fetchNewWord()}>Get a new word</button>
      <Board
        aria-label="Game board"
        wordLength={wordLength}
        guesses={guesses}
      />
    </>
  );
};

export default Game;
