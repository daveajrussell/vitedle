import { useState } from "react";
import Tile from "./Tile";
import { GameRow, RowTile } from "./Game";

interface RowComponentProps {
  row: GameRow;
  onRowCheck(row: GameRow): void;
}

const Row = ({ row, onRowCheck }: RowComponentProps) => {
  let checkButtonEnabled: boolean = true;
  let checkButtonVisible: boolean = false;

  const checkButtonVisibility = () => {
    checkButtonVisible = tiles.some((t) => !t.disabled);
    checkButtonEnabled = tiles.every((t) => !!t.value);
  };

  const [tiles, setTiles] = useState(row.tiles);

  const onTileKeyDown = (e: RowTile) => {
    setTiles(
      tiles.map((tile) => {
        if (tile.index === e.index) {
          tile.value = e.value;
        }
        return tile;
      })
    );
    checkButtonVisibility();
  };

  const checkRow = () => {
    const value = tiles.reduce((p, c) => p + c.value, "");
    onRowCheck({ ...row, value });
  };

  checkButtonVisibility();

  return (
    <span aria-label="Game row">
      {tiles.map((tile) => {
        return (
          <Tile
            key={`game-tile-${tile.index}-row-${row.index}`}
            tile={tile}
            onKeyDown={onTileKeyDown}
          />
        );
      })}
      {checkButtonVisible ? (
        <button aria-label="Check row" disabled={!checkButtonEnabled} onClick={checkRow}>
          Check
        </button>
      ) : (
        ""
      )}
    </span>
  );
};

export default Row;
