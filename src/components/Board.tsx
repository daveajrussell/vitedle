import { useState } from "react";
import "./Board.css";
import Row from "./Row";
import { GameRow, RowTile } from "./Game";

interface BoardComponentProps {
  word: string;
  guesses: number;
  wordLength: number;
  onRowComplete(updatedRow: GameRow): void;
}

const Board = ({ word, guesses, wordLength, onRowComplete }: BoardComponentProps) => {
  const initialRows = Array.from({ length: guesses }).map((_, i) => {
    const disabled = i > 0;
    return {
      index: i,
      disabled: disabled,
      tiles: Array.from({ length: wordLength }).map((_, j) => {
        return {
          index: j,
          disabled: disabled,
          value: "",
        } as RowTile;
      }),
    } as GameRow;
  });

  const [rows, setRows] = useState(initialRows);

  const checkRow = (updatedRow: GameRow) => {
    setRows(
      rows.map((row) => {
        if (row.index === updatedRow.index) {
          row.value = updatedRow.value;
          row.disabled = true;
          row.tiles.forEach((t) => (t.disabled = true));
        } else if (row.index === updatedRow.index + 1) {
          row.disabled = false;
          row.tiles.forEach((t) => (t.disabled = false));
        }
        return row;
      })
    );

    onRowComplete(updatedRow);
  };

  return (
    <div id="board">
      {rows.map((row) => {
        return (
          <Row key={`game-row-${row.index}`} row={row} onRowCheck={checkRow} word={word} />
        );
      })}
    </div>
  );
};

export default Board;
