import { teachersReducer } from "./teachers/slice";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { favoritesReducer } from "./favorites/slice";

export const store = configureStore({
  reducer: {
        teachers: teachersReducer,
        auth: authReducer,
        favorites: favoritesReducer
  },
});
