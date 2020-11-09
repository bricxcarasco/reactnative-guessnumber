import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./app/components/Header";
import StartGameScreen from "./app/screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screenStyle}>
      <Header title="Guees a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
  },
});
