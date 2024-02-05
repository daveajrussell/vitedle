import renderer from "react-test-renderer";
import Tile from "../../src/components/Tile";

test("renders Tile", () => {
  const tree = renderer.create(<Tile />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<input
  aria-label="game-tile"
  maxLength={1}
  type="text"
/>
`);
});
