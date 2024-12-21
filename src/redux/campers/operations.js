import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCampers,
  getCamperById,
  getCampers,
} from "../../services/campersApi.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ limit = 4, page = 1, filters = {} }, thunkApi) => {
    try {
      const data = await getCampers({ limit, page, filters });
      // console.log(data);
      const allCampers = await getAllCampers();
      // console.log(allCampers);
      return { data, allCampers };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkApi) => {
    try {
      const data = await getCamperById(id);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
