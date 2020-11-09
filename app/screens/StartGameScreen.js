import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.screenStyle}>
      <Text style={styles.textStyle}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number!</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
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
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
});

export default StartGameScreen;
