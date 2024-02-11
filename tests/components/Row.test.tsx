import { render, screen } from "@testing-library/react";
import Row from "../../src/components/Row";
import { GameRow } from "../../src/components/Game";

describe("Row", () => {
  const row = {
      index: 0,
      disabled: false,
      value: "",
      tiles: [
        { index: 0, value: "A" },
        { index: 1, value: "B" },
        { index: 2, value: "C" },
        { index: 3, value: "D" },
        { index: 4, value: "E" },
      ],
    } as GameRow,
    onRowCheck = jest.fn();

  it("renders Row component", async () => {
    render(<Row word="dummy" row={row} onRowCheck={onRowCheck} />);
    const input = screen.getAllByLabelText("Game tile", { exact: false });
    expect(input.length).toEqual(5);
  });

  // TODO - Unit test for Check button appearing only when all tiles are filled
});
