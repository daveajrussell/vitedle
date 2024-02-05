import { render, screen } from "@testing-library/react";
import Board from "../../src/components/Board";

describe("Board", () => {
  it("renders Board component", async () => {
    render(<Board wordLength={5} guesses={6} />);
    const input = screen.getAllByLabelText("Game row");
    expect(input.length).toEqual(6);
  });
});
