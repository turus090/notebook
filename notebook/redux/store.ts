import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/ui";
import scheduleReducer from "./slices/schedule";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    schedule: scheduleReducer,
  },
});

export default store;
