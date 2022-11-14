import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import GameOver from "./src/components/GameOver";
import Guess from "./src/components/Guess";
import GuessModel from "./src/components/Guess";
import Home from "./src/components/Home";
import { initialState } from "./src/state/initialState";
import { reducer } from "./src/state/reducer";
import { Action, Reducer } from "./src/Types";

export default function App() {
  
  const [state, dispatch] = useReducer<Reducer<Action>>(reducer, initialState);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <>
          {state.playState === "home" && (
            <Home
              state={state}
              dispatch={dispatch}
            />
          )}
        </>
        <>
          {state.playState === "game" && (
            <Guess
              state={state}
              dispatch={dispatch}
            />
          )}
        </>
        <>
          {state.playState === "end" && (
            <GameOver
              state={state}
              dispatch={dispatch}
            />
          )}
        </>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
