import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
