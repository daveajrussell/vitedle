import renderer from "react-test-renderer";
import Row from "../Row";
import { GameRow } from "../Game";

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
    disabled={false}
    maxLength={1}
    onChange={[Function]}
    onKeyDown={[Function]}
    type="text"
    value="A"
  />
</span>
`);
});
