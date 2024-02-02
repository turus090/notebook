import React from "react";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
const Addbtn: FC<any> = ({ handleEvent }) => {
  return (
    <Pressable onPress={handleEvent} style={s.btn}>
      <Text style={s.text}>+</Text>
    </Pressable>
  );
};

const s = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "85%",
    left: "80%",
    width: 48,
    height: 48,
    backgroundColor: "#7E64FF",
    borderRadius: 48,
  },

  text: {
    color: "#FFF",
    fontSize: 36,
  },
});
export default Addbtn;
