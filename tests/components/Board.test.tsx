import { render, screen } from "@testing-library/react";
import Board from "../../src/components/Board";

describe("Board", () => {
  const rowComplete = jest.fn();
  it("renders Board component", async () => {
    render(
      <Board
        word="dummy"
        wordLength={5}
        guesses={6}
        onRowComplete={rowComplete}
      />
    );
    const input = screen.getAllByLabelText("Game row", { exact: false });
    expect(input.length).toEqual(6);
  });
});
