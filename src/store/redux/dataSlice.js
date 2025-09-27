// store/redux/dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataAPI",
  initialState: {
    items: [], // state awal array kosong
  },
  reducers: {
    setData: (state, action) => {
      state.items = action.payload; // simpan hasil API ke state
    },
    addData: (state, action) => {
      state.items.push(action.payload);
    },
    updateData: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteData: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setData, addData, updateData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
