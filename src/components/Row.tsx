import Tile from "./Tile";

interface RowComponentProps {
  wordLength: number;
}

const Row = ({ wordLength }: RowComponentProps) => {
  return (
    <span aria-label="game-row">
      {Array.from({ length: wordLength }).map((_, i) => {
        return <Tile key={i} />;
      })}
    </span>
  );
};

export default Row;
