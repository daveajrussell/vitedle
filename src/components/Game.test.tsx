import { act, fireEvent, render } from "@testing-library/react";
import Game from "./Game";
import { RandomWordContext } from "../contexts/WordServiceProvider";
import userEvent from "@testing-library/user-event";

describe("Game", () => {
  it("renders Game component with new random word", async () => {
    const getRandomWordAsync = jest.fn(() => Promise.resolve("dummy"));
    await act(async () => {
      render(
        <RandomWordContext.Provider
          value={{
            getRandomWordAsync,
          }}
        >
          <Game guesses={1} wordLength={5} />
        </RandomWordContext.Provider>
      );
    });

    expect(getRandomWordAsync).toHaveBeenCalledTimes(1);
  });

  it("gets a new random word", async () => {
    const getRandomWordAsync = jest.fn(() => Promise.resolve("A"));
    const { getByLabelText } = await act(async () => {
      return render(
        <RandomWordContext.Provider
          value={{
            getRandomWordAsync,
          }}
        >
          <Game guesses={1} wordLength={1} />
        </RandomWordContext.Provider>
      );
    });

    const input = getByLabelText("Game tile at position 0", {
      exact: false,
    }) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "B" } });

    const checkButton = getByLabelText("Check row 0");
    await userEvent.click(checkButton);

    const newWordButton = getByLabelText("Get a new word");
    await userEvent.click(newWordButton);

    expect(getRandomWordAsync).toHaveBeenCalledTimes(2);
  });
});
