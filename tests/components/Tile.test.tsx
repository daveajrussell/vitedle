import { render, screen } from "@testing-library/react";
import Tile from "../../src/components/Tile";
import { RowTile } from "../../src/components/Game";
import userEvent from "@testing-library/user-event";

describe("Tile", () => {
  const tile = {
      index: 0,
      disabled: false,
      value: "A",
    } as RowTile,
    onKeyDown = jest.fn();

  it("renders Tile component", async () => {
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const gameTile = screen.findByLabelText("Game tile");
    expect(gameTile).toBeTruthy();
  });

  it("emits an event when a character is entered", async () => {
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const input = screen.getByLabelText("Game tile") as HTMLInputElement;
    await userEvent.type(input, "B");
    expect(onKeyDown).toHaveBeenCalledWith({
      index: 0,
      disabled: false,
      value: "B",
    });
  });
});
