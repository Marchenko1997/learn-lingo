import { teachersReducer } from "./teachers/slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
        teachers: teachersReducer,
        auth: authReducer,
  },
});
