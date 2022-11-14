import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import HStack from "./HStack";



const Home = ({ state, dispatch }: any) => {
  const [guess, setGuess] = useState("");
  const handleReset = () => {
    setGuess("");
  };
  const handleConfirm = () => {
    dispatch({ type: "game", payload: 0 });
    console.log("confirm");
  };

  return (
    <View>
      <Title>Guess the Number</Title>
      <Subtitle>Enter a 2 digits number</Subtitle>
      <TextInput
        style={styles.input}
        value={guess}
        onChangeText={setGuess}
        keyboardType="number-pad"
        maxLength={2}
      />
      <HStack>
        <Button
          title="Reset"
          onPress={handleReset}
        />
        <Button
          title="Confirm"
          onPress={handleConfirm}
        />
      </HStack>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
  },
  
});
