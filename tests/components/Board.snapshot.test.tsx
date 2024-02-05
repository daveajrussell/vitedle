import renderer from "react-test-renderer";
import Board from "../../src/components/Board";

test("renders Board", () => {
  const tree = renderer.create(<Board guesses={6} wordLength={5} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
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
</div>
`);
});
