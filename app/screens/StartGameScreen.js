import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screenStyle}>
        <Text style={styles.textStyle}>Start a New Game!</Text>
        <Card styleCard={styles.inputContainer}>
          <Text>Select a Number!</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            styleInput={styles.inputStyle}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title="Reset"
                color={Colors.secondary}
                onPress={() => {}}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={() => {}}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  inputStyle: {
    width: 50,
    textAlign: "center",
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
  buttonStyle: {
    width: "40%",
  },
});

export default StartGameScreen;
