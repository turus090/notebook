import React from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeModalValue, closeModal } from "../redux/slices/ui";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
const ModalCreate: FC = () => {
  const dispatch = useDispatch();
  const modalContent: any = useSelector<any>((state) => state.ui.modal);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleChangeInput = (inputName: string, inputValue: string) => {
    dispatch(changeModalValue({ typeInput: inputName, value: inputValue }));
  };
  return (
    <View style={s.container}>
      <TextInput
        value={modalContent.title}
        style={s.title}
        placeholder="Title"
        placeholderTextColor={"#FFF"}
        onChangeText={(value) => handleChangeInput("title", value)}
      />
      <TextInput
        value={modalContent.text}
        style={s.notes}
        placeholder="Notes"
        placeholderTextColor={"#FFF"}
        multiline={true}
        numberOfLines={5}
        onChangeText={(value) => handleChangeInput("text", value)}
      />
      <View style={s.containerBtn}>
        <Pressable onPress={handleCloseModal} style={s.btnBack}>
          <Text style={s.textBack}>Back</Text>
        </Pressable>
        <Pressable style={s.btnCreate}>
          <Text style={s.textBack}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    zIndex: 2,
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#7E64FF",
    rowGap: 10,
  },
  title: {
    width: "70%",
    height: 40,
    color: "#FFF",
    fontSize: 16,
    backgroundColor: "#3C1F7B",
    borderRadius: 8,
    paddingLeft: 8,
  },
  notes: {
    width: "70%",
    color: "#FFF",
    fontSize: 16,
    backgroundColor: "#3C1F7B",
    borderRadius: 8,
    paddingLeft: 8,
  },

  containerBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 16,
  },

  btnBack: {
    backgroundColor: "#3C1F7B",
    width: 70,
    height: 30,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  btnCreate: {
    backgroundColor: "#3C1F7B",
    width: 70,
    height: 30,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textBack: {
    color: "#FFF",
    fontSize: 14,
  },

  textCreate: {
    color: "#FFF",
    fontSize: 14,
  },
});
export default ModalCreate;
