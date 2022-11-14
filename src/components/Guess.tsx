import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import HStack from "./HStack";
import GuessItem from "./GuessItem";
import { GuessModel, ScreenProps } from "../Types";

const Guess = ({ state, dispatch }: ScreenProps) => {
  const checkIfCorrect = (guess: GuessModel) => {
    if (guess.value === state.userChoice) {
      dispatch({ type: "end" });
    } else {
      dispatch({ type: "guess", payload: guess });
    }
  };

  const handleLower = () => {
    const lowerGuess = Math.floor(
      (state.userChoice + state.computerChoice) / 2
    );
    const guessId = state.guesses.length + 1;
    checkIfCorrect({ value: lowerGuess, id: guessId });
  };

  const handleHigher = () => {
    const higherGuess = Math.ceil(
      (state.userChoice + state.computerChoice) / 2
    );
    const guessId = state.guesses.length + 1;

    checkIfCorrect({
      value: higherGuess,
      id: guessId,
    });
  };

  return (
    <View style={{ marginTop: 230 }}>
      <Title>Opponent's Guess</Title>
      <Subtitle>Higher or Lower?</Subtitle>
      <View style={{ padding: 10, borderWidth: 1 }}>
        <Title>System Guess is: {state.computerChoice.toString()}</Title>
      </View>
      <HStack>
        <Button
          title="Lower -"
          onPress={handleLower}
        />
        <Button
          title="Higher +"
          onPress={handleHigher}
        />
      </HStack>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={state.guesses}
        renderItem={(itemData) => <GuessItem value={itemData.item.value} />}
      />
    </View>
  );
};

export default Guess;

const styles = StyleSheet.create({});
