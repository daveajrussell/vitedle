import renderer from "react-test-renderer";
import Row from "../../src/components/Row";

test("renders Row", () => {
  const tree = renderer.create(<Row wordLength={5} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<span
  aria-label="game-row"
>
  <input
    aria-label="game-tile"
    maxLength={1}
    type="text"
  />
  <input
    aria-label="game-tile"
    maxLength={1}
    type="text"
  />
  <input
    aria-label="game-tile"
    maxLength={1}
    type="text"
  />
  <input
    aria-label="game-tile"
    maxLength={1}
    type="text"
  />
  <input
    aria-label="game-tile"
    maxLength={1}
    type="text"
  />
</span>
`);
});
