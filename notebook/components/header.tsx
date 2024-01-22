import React from "react";
import { FC } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const Header = () => {
  return (
    <View style={s.container}>
      <Text style={s.logo}> бай.час</Text>
      <View style={s.btns}>
        <TouchableWithoutFeedback>
          <Image
            style={s.icon}
            source={require("../assets/notification.png")}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Image style={s.icon} source={require("../assets/menu.png")} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: 340,
    marginTop: 60,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
