import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./app/components/Header";
import StartGameScreen from "./app/screens/StartGameScreen";
import GameScreen from "./app/screens/GameScreen";
import GameOverScreen from "./app/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
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
