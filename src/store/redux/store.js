// store/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    dataAPI: dataReducer,
  },
});

export default store;
