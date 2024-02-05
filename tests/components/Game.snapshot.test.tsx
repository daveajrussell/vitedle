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
  <div
    id="board"
  >
    <span
      aria-label="Game row"
    >
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <button
        aria-label="Check row"
        disabled={true}
        onClick={[Function]}
      >
        Check
      </button>
    </span>
    <span
      aria-label="Game row"
    >
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row"
    >
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row"
    >
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row"
    >
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row"
    >
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile"
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
  </div>,
]
`);
});
