import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./app/components/Header";
import StartGameScreen from "./app/screens/StartGameScreen";
import GameScreen from "./app/screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screenStyle}>
      <Header title="Guees a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
  },
});
