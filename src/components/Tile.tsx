import { useState } from "react";
import { RowTile } from "./Game";
import "./Tile.css";

interface TileComponentProps {
  tile: RowTile;
  onChange(rowTile: RowTile): void;
}

const Tile = ({ tile, onChange: onChange }: TileComponentProps) => {
  const [inputValue, setInputValue] = useState(tile.value);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    onChange({
      ...tile,
      value: event.target.value || "",
    });
  };

  const handleKeyDown = (event: any) => {
    if (
      /^[a-zA-Z]{1}$/.test(event.key) ||
      event.key === "Delete" ||
      event.key === "Backspace" ||
      event.key === "Tab"
    )
      return;

    event.preventDefault();
  };

  const getAriaLabelForTile = (tile: RowTile) => {
    if (!tile.guessed) return `Game tile at position ${tile.index} not guessed`;
    const label = `Game tile at position ${tile.index} with value '${tile.value}'`;
    if (tile.correctInPosition) return `${label} guessed correctly`;
    if (tile.correctInWrongPosition)
      return `${label} guessed in wrong position`;
    return `${label} guessed incorrectly`;
  };
  return (
    <input
      type="text"
      maxLength={1}
      disabled={tile.disabled}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={inputValue}
      className={
        tile.correctInPosition
          ? "correct"
          : tile.correctInWrongPosition
          ? "partially-correct"
          : ""
      }
      aria-label={getAriaLabelForTile(tile)}
    />
  );
};

export default Tile;
