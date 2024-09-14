import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesLangOption: null,
  favoritesLevelOption: null,
  favoritesPriceOption: null,
  favoriteItems: [],
  filteredItems: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addTeacher(state, action) {
      state.favoriteItems.push(action.payload);
    },
    deleteTeacher(state, action) {
      state.favoriteItems = state.favoriteItems.filter(
        (teacher) => teacher.id !== action.payload
      );
    },

    setFavoritesLangOption(state, action) {
      state.favoritesLangOption = action.payload;
    },
    setFavoritesLevelOption(state, action) {
      state.favoritesLevelOption = action.payload;
    },
    setFavoritesPriceOption(state, action) {
      state.favoritesPriceOption = action.payload;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const {
  addTeacher,
  deleteTeacher,
  setFavoritesLangOption,
  setFavoritesLevelOption,
  setFavoritesPriceOption,
} = favoritesSlice.actions;
