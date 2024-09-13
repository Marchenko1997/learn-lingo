import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTeachers } from "../../services/apiTeachers";
import { getTeachersForPaginations } from "../../services/apiTeachers";

export const fetchAllTeachers = createAsyncThunk(
  "allTeachers/fetchAllTeachers",

  async (_, thunkAPI) => {
    try {
      const data = await getAllTeachers();

      const items = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      return items;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllTeachersForPagination = createAsyncThunk(
  "teachers/fetchAllTeachersForPagination",

  async (lastKey, thunkAPI) => {
    try {
      const data = await getTeachersForPaginations(lastKey);

      const items = Object.entries(data)
        .map(([key, value]) => ({
          id: key,
          ...value,
        }))
        .slice(-4);
      return items;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
