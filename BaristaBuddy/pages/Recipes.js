import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
});

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Willkommen auf der Detailseite!</Text>
    </View>
  );
}
