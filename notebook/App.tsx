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
import NoteScreen from "./screens/note";

import { Provider } from "react-redux";
import store from "./redux/store";

const App: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
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
          <Stack.Screen
            name="notes"
            component={NoteScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
