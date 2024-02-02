import React from "react";
import { FC } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ModalCreate from "../components/modalCreate";
import Header from "../components/header";
import Switch from "../components/switch";
import Notes from "../components/notes/notes";
import Addbtn from "../components/addbtn";
import { openModal } from "../redux/slices/ui";

const Note: FC = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const modalOpen: boolean = useSelector((state: any) => state.ui.modalCreate);
  return (
    <View style={s.container}>
      {modalOpen && <ModalCreate />}

      <ImageBackground
        style={s.bg}
        source={require("../assets/bg.png")}
        resizeMode="cover"
      >
        <Header />
        <Switch />
        <View style={s.search}>
          <TouchableWithoutFeedback style={s.searchBtn}>
            <Image
              style={s.searchIcon}
              source={require("../assets/search.png")}
            />
          </TouchableWithoutFeedback>
          <TextInput
            style={s.searchInput}
            placeholder="Search Note"
            placeholderTextColor="#828282"
          />
        </View>
        <Notes />
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
  search: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 24,
    width: 350,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#CCC2FE",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
  searchBtn: {
    width: 24,
    height: 24,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    fontSize: 16,
    color: "#3C1F7B",
  },
  btn: {
    position: "absolute",
    width: 48,
    height: 48,
    borderTopRadius: "50%",
    backgroundColor: "#7E64FF",
  },
});
export default Note;
