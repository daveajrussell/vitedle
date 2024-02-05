import { useState, useEffect, useContext } from "react";
import { RandomWordContext } from "../contexts/WordServiceProvider";

const Game = () => {
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
    </>
  );
};

export default Game;
