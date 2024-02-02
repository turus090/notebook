import React from "react";
import { FC } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import NoteItem from "./notesItem";

const Notes = () => {
  const noteStore = [
    {
      text: "this morning's meeting",
      date: "24/01/2024",
    },
    {
      text: "this morning's ",
      date: "22/01/2022",
    },
    {
      text: "meeting",
      date: "23/01/2023",
    },
  ];
  return (
    <FlatList
      style={s.container}
      data={noteStore}
      renderItem={({ item }) => {
        return <NoteItem text={item.text} date={item.date} />;
      }}
    />
  );
};

const s = StyleSheet.create({
  container: {
    width: 366,
    marginTop: 24,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});

export default Notes;
