import { fireEvent, render } from "@testing-library/react";
import Row from "./Row";
import { GameRow } from "./Game";

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
  } as GameRow;

  it("renders Row component", async () => {
    const { getAllByLabelText } = render(
      <Row word="dummy" row={row} onRowCheck={jest.fn()} />
    );
    const input = getAllByLabelText("Game tile", { exact: false });
    expect(input.length).toEqual(5);
  });

  it("disables row check button by default", async () => {
    const row = {
      index: 0,
      disabled: false,
      value: "",
      tiles: [{ index: 0, value: "" }],
    } as GameRow;

    const { getByRole } = render(
      <Row word="dummy" row={row} onRowCheck={jest.fn()} />
    );

    const button = getByRole("button");
    (expect(button) as any).toBeDisabled();
  });

  it("only enables check button when all tiles are guessed", async () => {
    const row = {
      index: 0,
      disabled: false,
      value: "",
      tiles: [{ index: 0, value: "" }],
    } as GameRow;

    const { getByLabelText, getByRole } = render(
      <Row word="dummy" row={row} onRowCheck={jest.fn} />
    );

    const input = getByLabelText("Game tile at position 0", {
      exact: false,
    }) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "B" } });

    const button = getByRole("button");
    // urrghgh Property 'toBeDisabled' does not exist on type 'Matchers<void, any>'
    (expect(button).not as any).toBeDisabled();
  });
});
