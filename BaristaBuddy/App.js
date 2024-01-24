import * as React from "react";
import { Button, Text, View, Image, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import CustomHeader from "./components/Header";

const Stack = createNativeStackNavigator();

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => (
              <CustomHeader title="Startseite" showButton={false} />
            ),
          }}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={({ navigation }) => ({
            header: () => (
              <CustomHeader
                title="Recipes"
                navigation={navigation}
                showButton={true}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
