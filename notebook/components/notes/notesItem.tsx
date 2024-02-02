import React from "react";
import { FC } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

interface INote {
  text: string;
  date: string;
}

const NoteItem: FC<INote> = ({ text, date }) => {
  return (
    <View style={s.container}>
      <Text style={s.text}>{text}</Text>
      <Text style={s.date}> {date}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#7E64FF",
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  date: {
    paddingTop: 12,
    fontSize: 10,
    color: "#FFFFFF",
  },
});

export default NoteItem;
