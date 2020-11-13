import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.styleView}>
      <Text>The game is over!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
