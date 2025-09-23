// src/store/redux/apiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [], // state awal kosong
};

const apiSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload; // simpan hasil API
    },
    addData: (state, action) => {
      state.data.push(action.payload); // tambah data
    },
    editData: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload; // update data
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload); // hapus data
    },
  },
});

export const { setData, addData, editData, deleteData } = apiSlice.actions;
export default apiSlice.reducer;
