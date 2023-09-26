import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice.js/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
