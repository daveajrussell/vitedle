import { render, screen } from "@testing-library/react";
import Row from "../../src/components/Row";

fdescribe("Row", () => {
  it("renders Row component", async () => {
    render(<Row wordLength={5} />);
    const input = screen.getAllByLabelText("game-tile");
    expect(input.length).toEqual(5);
  });
});
