import "./App.css";
import Game from "./components/Game";
import { RandomWordProvider } from "./contexts/WordServiceProvider";

interface AppSearchParams extends URLSearchParams {
  guesses: number;
  words: string;
}

function App() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop: string) => searchParams.get(prop),
  }) as AppSearchParams;
  const guesses = params.guesses || 5;
  const words = params.words?.split(",") || [];
  const wordLength = words[0]?.length || 5;

  return (
    <>
      <RandomWordProvider>
        <Game guesses={guesses} words={words} wordLength={wordLength}></Game>
      </RandomWordProvider>
    </>
  );
}

export default App;
