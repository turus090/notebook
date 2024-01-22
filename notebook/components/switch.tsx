import React from "react";
import { FC } from "react";
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Switch: FC = () => {
  const [btnActive, setBtnActive] = useState<string>("shedule");
  const pressBtn = (newActive) => {
    setBtnActive(newActive);
  };
  return (
    <View style={s.container}>
      <Pressable
        onPress={() => pressBtn("shedule")}
        style={btnActive === "shedule" ? s.btnDark : s.btn}
      >
        <Text style={s.text}>Розклад</Text>
      </Pressable>
      <Pressable
        onPress={() => pressBtn("notes")}
        style={btnActive === "notes" ? s.btnDark : s.btn}
      >
        <Text style={s.text}>Нотатки</Text>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: 298,
    height: 40,
    marginTop: 44,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 4,
    backgroundColor: "#3C1F7B",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnDark: {
    width: 133,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#272430",
  },
  btn: {
    width: 133,
    height: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default Switch;
