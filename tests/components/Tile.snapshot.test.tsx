import renderer from "react-test-renderer";
import Tile from "../../src/components/Tile";
import { RowTile } from "../../src/components/Game";

test("renders Tile", () => {
  const tile = {
      index: 0,
      disabled: false,
      value: "A",
    } as RowTile,
    onKeyDown = jest.fn();
  const tree = renderer
    .create(<Tile tile={tile} onKeyDown={onKeyDown} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<input
  aria-label="Game tile at position 0 not guessed"
  className=""
  defaultValue="A"
  disabled={false}
  maxLength={1}
  onKeyDown={[Function]}
  type="text"
/>
`);
});
