import { initialState } from "../state/initialState";

export type ScreenProps = {
    state: InitialState;
    dispatch: DispatchFunction;
  };

  export type GuessModel = {
    value : number;
    id: number;
  }

  export type InitialState = {
    guesses: { id: number; value: number }[]
    playState: "home" | "game" | "end";
    userChoice: number,
    computerChoice: number;
    rounds: number,
  }
  
  export type Action = { 
    type: "home" | "game" | "end" | "guess";
    payload?: any 
  };
  
  export type DispatchFunction = (action: Action) => void;

  export type Reducer<Action> = (state: InitialState, action: Action) => any;
  