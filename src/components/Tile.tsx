import { RowTile } from "./Game";
import "./Tile.css";

interface TileComponentProps {
  tile: RowTile;
  onKeyDown(rowTile: RowTile): void;
}

const Tile = ({ tile, onKeyDown }: TileComponentProps) => {
  return (
    <input
      type="text"
      maxLength={1}
      aria-label="Game tile"
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
    />
  );
};

export default Tile;
