import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const HStack = (props: Props) => {
  return <View style={styles.row}>{props.children}</View>;
};

export default HStack;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
