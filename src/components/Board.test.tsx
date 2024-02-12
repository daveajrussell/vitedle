import { render, screen } from "@testing-library/react";
import Board from "./Board";

describe("Board", () => {
  const rowComplete = jest.fn();
  [5, 6, 2, 4].forEach((guesses) => {
    it("renders Board component with correct number of rows for guesses param", async () => {
      render(
        <Board
          word="dummy"
          wordLength={5}
          guesses={guesses}
          onRowComplete={rowComplete}
        />
      );
      const rows = screen.getAllByLabelText("Game row", { exact: false });
      expect(rows.length).toEqual(guesses);
    });
  });

  [5, 6, 2, 4].forEach((wordLength) => {
    it("renders Board component with correct number of tiles for wordLength param", async () => {
      render(
        <Board
          word="dummy"
          wordLength={wordLength}
          guesses={1}
          onRowComplete={rowComplete}
        />
      );
      const tiles = screen.getAllByLabelText("Game tile", { exact: false });
      expect(tiles.length).toEqual(wordLength);
    });
  });
});
