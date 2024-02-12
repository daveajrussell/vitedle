import renderer from "react-test-renderer";
import Board from "../Board";

test("renders Board", () => {
  const rowComplete = jest.fn();
  const tree = renderer
    .create(
      <Board
        word="dummy"
        guesses={6}
        wordLength={5}
        onRowComplete={rowComplete}
      />
    )
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  id="board"
>
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
      value=""
    />
    <input
      aria-label="Game tile at position 1 not guessed"
      className=""
      disabled={false}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 2 not guessed"
      className=""
      disabled={false}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 3 not guessed"
      className=""
      disabled={false}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 4 not guessed"
      className=""
      disabled={false}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
  </span>
  <span
    aria-label="Game row 1"
  >
    <input
      aria-label="Game tile at position 0 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 1 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 2 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 3 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 4 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
  </span>
  <span
    aria-label="Game row 2"
  >
    <input
      aria-label="Game tile at position 0 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 1 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 2 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 3 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 4 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
  </span>
  <span
    aria-label="Game row 3"
  >
    <input
      aria-label="Game tile at position 0 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 1 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 2 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 3 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 4 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
  </span>
  <span
    aria-label="Game row 4"
  >
    <input
      aria-label="Game tile at position 0 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 1 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 2 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 3 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 4 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
  </span>
  <span
    aria-label="Game row 5"
  >
    <input
      aria-label="Game tile at position 0 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 1 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 2 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 3 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
    <input
      aria-label="Game tile at position 4 not guessed"
      className=""
      disabled={true}
      maxLength={1}
      onChange={[Function]}
      onKeyDown={[Function]}
      type="text"
      value=""
    />
  </span>
</div>
`);
});
