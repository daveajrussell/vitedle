import renderer from "react-test-renderer";
import Row from "../../src/components/Row";
import { GameRow } from "../../src/components/Game";

test("renders Row", () => {
  const row = {
      index: 0,
      disabled: false,
      value: "",
      tiles: [{ index: 0, value: "A", disabled: false }],
    } as GameRow,
    onRowCheck = jest.fn();
  const tree = renderer
    .create(<Row word="dummy" row={row} onRowCheck={onRowCheck} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<span
  aria-label="Game row 0"
>
  <input
    aria-label="Game tile at position 0 not guessed"
    className=""
    defaultValue="A"
    disabled={false}
    maxLength={1}
    onKeyDown={[Function]}
    type="text"
  />
  <button
    aria-label="Check row 0"
    disabled={false}
    onClick={[Function]}
  >
    Check
  </button>
</span>
`);
});
