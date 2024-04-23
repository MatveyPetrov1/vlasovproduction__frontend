import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";

export const fetchHeaderItems = createAsyncThunk(
  "header/fetchHeaderItems",
  async () => {
    const { data } = await axios.get("/header");
    return data.cities;
  }
);

const initialState = {
  currentPage: 0,
  applicationIsOpen: true,
  cities: {},
  currentCity: 10,
};

const headerSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setApplicationIsOpen(state, action) {
      state.applicationIsOpen = action.payload;
    },
    setCurrentCity(state, action) {
      state.currentCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeaderItems.pending, (state) => {
      state.cities = [];
    });
    builder.addCase(fetchHeaderItems.fulfilled, (state, action) => {
      state.cities = action.payload;
    });
    builder.addCase(fetchHeaderItems.rejected, (state) => {
      state.cities = [];
    });
  },
});

export const { setCurrentPage, setApplicationIsOpen, setCurrentCity } =
  headerSlice.actions;
export default headerSlice.reducer;
