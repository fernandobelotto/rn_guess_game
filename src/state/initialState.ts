import { InitialState } from "../Types";

export const initialState: InitialState = {
    playState: "home",
    userChoice: 0,
    computerChoice: Number((Math.random() * 100).toFixed(0)),
    guesses: [],
    rounds: 0,
};