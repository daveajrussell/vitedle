import { act, render /*, screen */ } from "@testing-library/react";
import Game from "../../src/components/Game";
import { RandomWordContext } from "../../src/contexts/WordServiceProvider";
import React from "react";
//import userEvent from "@testing-library/user-event";

describe("Game", () => {
  ["hello", "clout", "ember"].forEach((expected: string) => {
    it("renders Game component with new random word", async () => {
      const getRandomWordAsync = jest.fn(() => Promise.resolve(expected));
      const setState = jest.fn();
      const useStateMock: any = (useState: any) => [useState, setState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      await act(() => {
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

      expect(setState).toHaveBeenCalledWith(expected);
    });
  });

  // This doesn't work - the button is not re-enabling in the unit test after entering a value
  // Maybe I am doing something wrong.. or I'm approaching this test in the wrong way
  // it("shows lost game condition", async () => {
  //   const user = userEvent.setup();
  //   const getRandomWordAsync = jest.fn(() => Promise.resolve("A"));

  //   render(
  //     <RandomWordContext.Provider
  //       value={{
  //         getRandomWordAsync,
  //       }}
  //     >
  //       <Game guesses={1} wordLength={1} />
  //     </RandomWordContext.Provider>
  //   );

  //   let gameTile = (await screen.findByLabelText("Game tile at position 0", {
  //     exact: false,
  //   })) as HTMLInputElement;
  //   await user.type(gameTile, "B");
  //   const checkButton = await screen.findByLabelText("Check row 0");
  //   await user.click(checkButton);
  //   const title = await screen.findByRole("heading");

  //   expect(title).toEqual("<h1>A not correctly guessed!</h1>");
  // });

  // it("renders a new random word when button is clicked", async () => {
  //   const getRandomWordAsync = jest.fn(() => Promise.resolve("ember"));

  //   render(
  //     <RandomWordContext.Provider
  //       value={{
  //         getRandomWordAsync,
  //       }}
  //     >
  //       <Game />
  //     </RandomWordContext.Provider>
  //   );

  //   await userEvent.click(screen.getByText("Get a new word"));

  //   expect(getRandomWordAsync).toHaveBeenCalledTimes(2);
  // });
});
