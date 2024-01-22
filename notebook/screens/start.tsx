import React from "react";
import { FC } from "react";
import {
  ImageBackground,
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
} from "react-native";

const StartScreen: FC<any> = ({ navigation }) => {
  const handelPress = () => {
    navigation.navigate("calendar");
  };
  return (
    <View style={s.container}>
      <ImageBackground
        style={s.bg}
        source={require("../assets/bg.png")}
        resizeMode="cover"
      >
        <Text style={s.title}> бай.час </Text>
        <Text style={s.text}> Твій час</Text>
        <Pressable onPress={handelPress} style={s.btn}>
          <Text style={s.btn_text}>start</Text>
        </Pressable>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 150,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 50,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 40,
  },
  btn: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "#0A0416",
    fontSize: 24,
    textTransform: "uppercase",
  },
});

export default StartScreen;
