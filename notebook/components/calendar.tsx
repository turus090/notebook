import React from "react";
import { FC } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";

const Calendar: FC = () => {
  const dateStore = [
    ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "31", "-", "-", "-", "-"],
  ];
  return (
    <View>
      <Text style={s.title}>січень 2024</Text>
      <FlatList
        style={s.calendar}
        data={dateStore}
        renderItem={({ item }) => {
          return (
            <FlatList
              style={s.row}
              data={item}
              renderItem={({ item }) => {
                return (
                  <Pressable style={s.item}>
                    <Text>{item}</Text>
                  </Pressable>
                );
              }}
            />
          );
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  calendar: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    width: 48,
    height: 48,
  },
});

export default Calendar;
