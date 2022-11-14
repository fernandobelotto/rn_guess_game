import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children: string;
};

const Subtitle = ({ children }: Props) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
  },
});
