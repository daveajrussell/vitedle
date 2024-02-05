import renderer from "react-test-renderer";
import Game from "../../src/components/Game";

test("renders Game", () => {
  const tree = renderer.create(<Game />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
[
  <h1 />,
  <button
    onClick={[Function]}
  >
    Get a new word
  </button>,
]
`);
});
