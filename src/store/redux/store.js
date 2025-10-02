import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    dataAPI: dataReducer,
  },
});

export default store;
