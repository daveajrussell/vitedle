import { RowTile } from "./Game";
import "./Tile.css";

interface TileComponentProps {
  tile: RowTile;
  onKeyDown(rowTile: RowTile): void;
}

const Tile = ({ tile, onKeyDown }: TileComponentProps) => {
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
      onKeyDown={(e) => {
        if (/^[a-zA-Z]{1}$/.test(e.key)) {
          onKeyDown({
            ...tile,
            value: e.key,
          });
        } else if (e.key === "Delete" || e.key === "Backspace") {
          onKeyDown({
            ...tile,
            value: "",
          });
        } else if (e.key !== "Tab") {
          e.preventDefault();
        }
      }}
      defaultValue={tile.value}
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
