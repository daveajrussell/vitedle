import { createContext } from "react";
import RandomWordService from "../services/randomWordService";

export const RandomWordContext = createContext(new RandomWordService());

export const RandomWordProvider = ({ children }: any) => {
  const randomWordService = new RandomWordService();

  return (
    <RandomWordContext.Provider value={randomWordService}>
      {children}
    </RandomWordContext.Provider>
  );
};
