import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Pressable,
  Alert,
  TextInput,
} from "react-native";
import StartScreen from "./screens/start";
import CalendarScreen from "./screens/calendar";

const App: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen
          name="main"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="calendar"
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
