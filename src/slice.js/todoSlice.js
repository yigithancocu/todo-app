import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  okey: "false",
  list: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    remove(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    done(state, action) {
      const item = state.list.find((item) => item.id === action.payload);
      item.okey = !item.okey;
    },
    clear(state) {
      state.list = [];
    },
  },
});

export const { add, remove, done, clear } = todoSlice.actions;

export default todoSlice.reducer;
