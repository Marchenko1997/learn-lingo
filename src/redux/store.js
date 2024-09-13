import { teachersReducer } from "./teachers/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});
