import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";

const CustomHeader = ({ title, navigation, showButton }) => {
  return (
    <View style={styles.container}>
      {showButton && (
        <Button
          icon="arrow-left"
          mode="text"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => navigation.goBack()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "100%",
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 20,
    marginLeft: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  buttonLabel: {
    color: "white",
    fontSize: 40,
  },
});

export default CustomHeader;
