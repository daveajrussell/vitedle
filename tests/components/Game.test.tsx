import { render, screen } from "@testing-library/react";
import Game from "../../src/components/Game";
import { RandomWordContext } from "../../src/contexts/WordServiceProvider";
import userEvent from "@testing-library/user-event";

describe("Game", () => {
  ["hello", "clout", "ember"].forEach((expected: string) => {
    it("renders Game component with new random word", async () => {
      const getRandomWordAsync = jest.fn(() => Promise.resolve(expected));
      render(
        <RandomWordContext.Provider
          value={{
            getRandomWordAsync,
          }}
        >
          <Game />
        </RandomWordContext.Provider>
      );

      const result = await screen.findByRole("heading");

      expect(result.textContent).toEqual(expected);
    });
  });

  it("renders a new random word when button is clicked", async () => {
    const getRandomWordAsync = jest.fn(() => Promise.resolve(""));
    render(
      <RandomWordContext.Provider
        value={{
          getRandomWordAsync,
        }}
      >
        <Game />
      </RandomWordContext.Provider>
    );

    await userEvent.click(screen.getByText("Get a new word"));

    expect(getRandomWordAsync).toHaveBeenCalledTimes(2);
  });
});
