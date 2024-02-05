import { render, screen } from "@testing-library/react";
import Tile from "../../src/components/Tile";

describe("Tile", () => {
  it("renders Tile component", async () => {
    render(<Tile />);
    const tile = screen.findByLabelText("game-tile");
    expect(tile).toBeTruthy();
  });
});
