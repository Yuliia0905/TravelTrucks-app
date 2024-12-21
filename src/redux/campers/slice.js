import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./operations.js";

const INITIAL_STATE = {
  campers: [],
  allCampers: [],
  location: "",
  total: 0,
  loading: false,
  error: null,
  limit: 4,
  page: 1,
  hasMore: true,
  camperDetails: null,
  camperLoading: false,
  camperError: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    resetCampersState(state) {
      state.campers = [];
      state.total = 0;
      state.hasMore = true;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        const newCampers = payload.data.items;
        // console.log(newCampers);
        if (state.page === 1) {
          state.campers = [];
        }

        const existingIds = new Set(state.campers.map((camper) => camper.id));
        const filteredCampers = newCampers.filter(
          (camper) => !existingIds.has(camper.id)
        );

        state.campers = [...state.campers, ...filteredCampers];

        state.allCampers = payload.allCampers.items;
        // console.log(payload.allCampers.items);
        // state.total = payload.total;
        state.loading = false;
        state.error = null;
        state.hasMore = payload.data.items.length >= state.limit;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.camperLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.camperDetails = payload;
        // console.log(payload);
        state.camperLoading = false;
        state.camperError = null;
      })
      .addCase(fetchCamperById.rejected, (state, { payload }) => {
        state.camperLoading = false;
        state.camperError = payload;
      }),
});

export const { setLocation, resetCampersState, setPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
