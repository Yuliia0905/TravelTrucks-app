import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearLocation: (state) => {
      state.location = "";
    },
  },
});

export const { setLocation, clearLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
