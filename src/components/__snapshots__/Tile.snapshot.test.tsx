import renderer from "react-test-renderer";
import Tile from "../Tile";
import { RowTile } from "../Game";

test("renders Tile", () => {
  const tile = {
      index: 0,
      disabled: false,
      value: "A",
    } as RowTile,
    onKeyDown = jest.fn();
  const tree = renderer
    .create(<Tile tile={tile} onChange={onKeyDown} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
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
`);
});
