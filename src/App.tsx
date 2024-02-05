import "./App.css";
import Game from "./components/Game";
import { RandomWordProvider } from "./contexts/WordServiceProvider";

function App() {
  return (
    <>
      <RandomWordProvider>
        <Game></Game>
      </RandomWordProvider>
    </>
  );
}

export default App;
