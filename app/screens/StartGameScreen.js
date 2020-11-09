import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

import Card from "../components/Card";

const StartGameScreen = () => {
  return (
    <View style={styles.screenStyle}>
      <Text style={styles.textStyle}>Start a New Game!</Text>
      <Card styleCard={styles.inputContainer}>
        <Text>Select a Number!</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
});

export default StartGameScreen;
