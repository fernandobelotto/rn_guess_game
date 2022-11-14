import { Action, InitialState } from "../Types";
import { initialState } from "./initialState";

export const reducer = (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
      case "home":
        return initialState;
      case "game":
        return {
          ...state,
          playState: "game",
        };

      case "guess":
        return {
          ...state,
          guesses: [...state.guesses, action.payload],
          rounds: state.rounds + 1,
        };

      case "end":
        return {
          ...state,
          playState: "end",
          guess: action.payload,
          rounds: state.rounds + 1,
        };


      default:
        return state;
    }
  };