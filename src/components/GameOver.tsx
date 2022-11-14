import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenProps } from "../Types";


const GameOver = ({ state, dispatch }: ScreenProps) => {
  const handleNewGame = () => {
    dispatch({ type: "home" });
    console.log("new game");
  };

  return (
    <View>
      <Text>GameOver</Text>
      <Text>
        <>
          {/* Your phone neeeded {state.guesses} to guess the number {state.guess} */}
        </>
      </Text>
      <Button
        title="start new game"
        onPress={handleNewGame}
      />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({});
