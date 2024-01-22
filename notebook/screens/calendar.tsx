import React from "react";
import { FC } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";

import Calendar from "../components/calendar";
import Header from "../components/header";
import Switch from "../components/switch";

const CalendarScreen: FC<any> = ({ navigation }) => {
  const handleGoBack = () => {
    console.log("Go back");
    navigation.goBack();
  };
  return (
    <View style={s.container}>
      <ImageBackground
        style={s.bg}
        source={require("../assets/bg.png")}
        resizeMode="cover"
      >
        <Pressable style={s.btnTest} onPress={handleGoBack}>
          <Text>Go Back</Text>
        </Pressable>
        <Header />
        <Switch />
        <Calendar />
      </ImageBackground>
    </View>
  );
};
const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  bg: {
    width: "100%",
    height: "100%",
  },
  btnTest: {
    position: "absolute",
    width: "30%",
    marginTop: 50,
    backgroundColor: "red",
    opacity: 0.3,
  },
});
export default CalendarScreen;
