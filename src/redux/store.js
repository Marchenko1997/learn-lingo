import { configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/slice";
import { authReducer } from "./auth/slice";
import { favoritesReducer } from "./favorites/slice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoriteItems"],
};

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    auth: authReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);