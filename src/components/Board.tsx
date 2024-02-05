import "./Board.css";
import Row from "./Row";

interface BoardComponentProps {
  guesses: number;
  wordLength: number;
}

const Board = ({ guesses, wordLength }: BoardComponentProps) => {
  return (
    <div id="board" aria-label="game-board">
      {Array.from({ length: guesses }).map((_, i) => {
        return <Row key={i} wordLength={wordLength} />;
      })}
    </div>
  );
};

export default Board;
