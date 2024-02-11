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
  guessed: boolean;
  correctInPosition: boolean;
  correctInWrongPosition: boolean;
}

interface GameProps {
  wordLength: number;
  guesses: number;
}

const Game = ({ wordLength, guesses }: GameProps) => {
  const [word, setWord] = useState("");
  const randomWordService = useContext(RandomWordContext);
  const [game, setGame] = useState({
    inProgress: true,
    won: false,
    currentRow: 0,
  });

  useEffect(() => {
    fetchNewWord();
  }, []);

  const fetchNewWord = async () => {
    const word = await randomWordService.getRandomWordAsync();
    setWord(word);
    setGame({
      inProgress: true,
      won: false,
      currentRow: 0,
    });
  };

  const rowComplete = (row: GameRow) => {
    if (row.value === word) {
      setGame({
        inProgress: false,
        won: true,
        currentRow: row.index,
      });
    } else if (row.index === guesses - 1) {
      setGame({
        inProgress: false,
        won: false,
        currentRow: row.index,
      });
    }
  };

  if (game.inProgress) {
    return (
      <>
        <h1>vitedl!</h1>
        <Board
          word={word}
          aria-label="Game board"
          wordLength={wordLength}
          guesses={guesses}
          onRowComplete={rowComplete}
        />
      </>
    );
  }

  return (
    <>
      <h1>
        {game.won
          ? `${word} guessed correctly after ${game.currentRow + 1} guesses!`
          : `${word} not correctly guessed!`}
      </h1>
      <button onClick={() => fetchNewWord()}>Get a new word</button>
    </>
  );
};

export default Game;
