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
import ModalSchedule from "../components/modalSchedule";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../redux/slices/schedule";
import Addbtn from "../components/addbtn";

const CalendarScreen: FC<any> = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const modalOpen: boolean = useSelector(
    (state: any) => state.schedule.modalCreate
  );
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={s.container}>
      {modalOpen && <ModalSchedule />}

      <ImageBackground
        style={s.bg}
        source={require("../assets/bg.png")}
        resizeMode="cover"
      >
        <Pressable style={s.btnTest} onPress={handleGoBack}>
          <Text>Go Back</Text>
        </Pressable>
        <Header />
        <Switch navigation={navigation} />
        <Calendar />
        <Addbtn handleEvent={handleOpenModal} />
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
