import React from "react";
import { View, Text, StyleSheet, ImagePropTypes } from "react-native";

import Colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.styleViewNumber}>
      <Text style={styles.styleTextNumber}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleViewNumber: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  styleTextNumber: {
    color: Colors.secondary,
    fontSize: 22,
  },
});

export default NumberContainer;
