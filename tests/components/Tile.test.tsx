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

  beforeEach(() => {
    tile.guessed = false;
    tile.correctInPosition = false;
    tile.correctInWrongPosition = false;
  });

  it("renders Tile component", async () => {
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const gameTile = screen.findByLabelText("Game tile at position 0", {
      exact: false,
    });
    expect(gameTile).toBeTruthy();
  });

  it("emits an event when a character is entered", async () => {
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const input = screen.getByLabelText("Game tile at position 0", {
      exact: false,
    }) as HTMLInputElement;
    await userEvent.type(input, "B");
    expect(onKeyDown).toHaveBeenCalledWith({
      index: 0,
      disabled: false,
      value: "B",
      guessed: false,
      correctInPosition: false,
      correctInWrongPosition: false
    });
  });

  it("renders correct aria description for correct guess", async () => {
    tile.correctInPosition = tile.guessed = true;
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const gameTile = await screen.findByLabelText(
      "Game tile at position 0 with value 'A' guessed correctly"
    );
    expect(gameTile).toBeTruthy();
  });

  it("renders correct aria description for partially correct guess", async () => {
    tile.correctInWrongPosition = tile.guessed = true;
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const gameTile = await screen.findByLabelText(
      "Game tile at position 0 with value 'A' guessed in wrong position"
    );
    expect(gameTile).toBeTruthy();
  });

  it("renders correct aria description for incorrect guess", async () => {
    tile.guessed = true;
    render(<Tile tile={tile} onKeyDown={onKeyDown} />);
    const gameTile = await screen.findByLabelText(
      "Game tile at position 0 with value 'A' guessed incorrectly"
    );
    expect(gameTile).toBeTruthy();
  });
});
