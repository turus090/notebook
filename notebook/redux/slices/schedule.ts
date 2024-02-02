import { createSlice } from "@reduxjs/toolkit";

interface IState {
  modalCreate: boolean;
  modal: {
    title: string;
    text: string;
  };
}

const initialState: IState = {
  modalCreate: false,
  modal: {
    title: "",
    text: "",
  },
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.modalCreate = false;
      state.modal = {
        title: "",
        text: "",
      };
    },
    openModal: (state) => {
      state.modalCreate = true;
    },
    changeModalValue: (state, action: any) => {
      state.modal[action.payload.typeInput] = action.payload.value;
    },
  },
});

export const { closeModal, openModal, changeModalValue } =
  ScheduleSlice.actions;
export default ScheduleSlice.reducer;
