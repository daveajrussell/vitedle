import "./App.css";
import Game from "./components/Game";
import { RandomWordProvider } from "./contexts/WordServiceProvider";

function App() {
  return (
    <>
      <RandomWordProvider>
        <Game guesses={2} wordLength={5}></Game>
      </RandomWordProvider>
    </>
  );
}

export default App;
