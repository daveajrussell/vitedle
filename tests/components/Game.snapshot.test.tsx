import renderer from "react-test-renderer";
import Game from "../../src/components/Game";

test("renders Game", () => {
  const tree = renderer.create(<Game guesses={6} wordLength={5} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
[
  <h1>
    vitedl!
  </h1>,
  <div
    id="board"
  >
    <span
      aria-label="Game row 0"
    >
      <input
        aria-label="Game tile at position 0 not guessed"
        className=""
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 1 not guessed"
        className=""
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 2 not guessed"
        className=""
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 3 not guessed"
        className=""
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 4 not guessed"
        className=""
        defaultValue=""
        disabled={false}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <button
        aria-label="Check row 0"
        disabled={true}
        onClick={[Function]}
      >
        Check
      </button>
    </span>
    <span
      aria-label="Game row 1"
    >
      <input
        aria-label="Game tile at position 0 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 1 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 2 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 3 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 4 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row 2"
    >
      <input
        aria-label="Game tile at position 0 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 1 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 2 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 3 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 4 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row 3"
    >
      <input
        aria-label="Game tile at position 0 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 1 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 2 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 3 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 4 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row 4"
    >
      <input
        aria-label="Game tile at position 0 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 1 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 2 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 3 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 4 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
    </span>
    <span
      aria-label="Game row 5"
    >
      <input
        aria-label="Game tile at position 0 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 1 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 2 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 3 not guessed"
        className=""
        defaultValue=""
        disabled={true}
        maxLength={1}
        onKeyDown={[Function]}
        type="text"
      />
      <input
        aria-label="Game tile at position 4 not guessed"
        className=""
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
