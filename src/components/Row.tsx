import { useEffect, useState } from "react";
import Tile from "./Tile";
import { GameRow, RowTile } from "./Game";

interface RowComponentProps {
  row: GameRow;
  onRowCheck(row: GameRow): void;
  word: string;
}

const Row = ({ row, onRowCheck, word }: RowComponentProps) => {
  const [checkButtonVisible, setCheckButtonVisible] = useState(false);
  const [checkButtonEnabled, setCheckButtonEnabled] = useState(false);
  const [tiles, setTiles] = useState(row.tiles);

  const letters = [...word].map((value, index) => {
    return { index: index, value: value, guessed: false };
  });

  const checkButtonVisibility = () => {
    setCheckButtonVisible(tiles.some((t) => !t.disabled));
    setCheckButtonEnabled(tiles.every((t) => !!t.value));
  };

  const onTileChange = (e: RowTile) => {
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

  useEffect(() => checkButtonVisibility(), [row.disabled]);

  return (
    <span aria-label={`Game row ${row.index}`}>
      {tiles.map((tile) => {
        return (
          <Tile
            key={`game-tile-${tile.index}-row-${row.index}`}
            tile={tile}
            onChange={onTileChange}
          />
        );
      })}
      {checkButtonVisible ? (
        <button
          aria-label={`Check row ${row.index}`}
          disabled={!checkButtonEnabled}
          aria-disabled={!checkButtonEnabled}
          onClick={() => checkButtonEnabled && checkRow()}
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
