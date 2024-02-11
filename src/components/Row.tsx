import { useState } from "react";
import Tile from "./Tile";
import { GameRow, RowTile } from "./Game";

interface RowComponentProps {
  row: GameRow;
  onRowCheck(row: GameRow): void;
  word: string;
}

const Row = ({ row, onRowCheck, word }: RowComponentProps) => {
  let checkButtonEnabled: boolean = true;
  let checkButtonVisible: boolean = false;

  const checkButtonVisibility = () => {
    checkButtonVisible = tiles.some((t) => !t.disabled);
    checkButtonEnabled = tiles.every((t) => !!t.value);
  };

  const [tiles, setTiles] = useState(row.tiles);

  const letters = [...word].map((value, index) => {
    return { index: index, value: value, guessed: false };
  });

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
    setTileGuesses();
    const value = tiles.reduce((p, c) => p + c.value, "");
    onRowCheck({ ...row, value });
  };

  const setTileGuesses = () => {
    [...letters].forEach((letter) => {
      let tile = tiles[letter.index];
      tile.guessed = true;
      if (tile.value === letter.value) {
        tile.correctInPosition = letter.guessed = true;
      } else {
        const tile = tiles.filter(
          (tile) =>
            !tile.correctInPosition &&
            !tile.correctInWrongPosition &&
            tile.value === letter.value
        )[0];
        if (tile && !letter.guessed) {
          tile.correctInWrongPosition = letter.guessed = true;
        }
      }
    });
  };

  checkButtonVisibility();

  return (
    <span aria-label={`Game row ${row.index}`}>
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
        <button
          aria-label={`Check row ${row.index}`}
          disabled={!checkButtonEnabled}
          onClick={checkRow}
        >
          Check
        </button>
      ) : (
        ""
      )}
    </span>
  );
};

export default Row;
