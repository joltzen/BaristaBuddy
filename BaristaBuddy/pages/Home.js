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
  button: {
    width: "90%",
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    paddingVertical: 10,
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
});

export default function Home({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Recipes");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("../assets/coffee.jpg")} style={styles.image} />
      <Text style={styles.text}>BaristaBuddy</Text>
      <Text style={styles.text2}>
        Entdecke Kaffee rezepte und stelle deinen Espresso ein
      </Text>
      <Button
        mode="contained"
        buttonColor="#a3a3a3"
        onPress={handlePress}
        style={styles.button}
        labelStyle={{ color: "black", fontSize: 20 }}
      >
        Starte jetzt
      </Button>
    </View>
  );
}
