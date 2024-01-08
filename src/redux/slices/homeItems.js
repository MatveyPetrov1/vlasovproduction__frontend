import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { sleep } from "./sleepLoader";

export const fetchHomeItems = createAsyncThunk(
  "home/fetchHomeItems",
  async () => {
    const { data } = await axios.get("/home");
    await sleep(1500);
    return data;
  }
);

const initialState = {
  items: {},
  status: "loading",
};

const homeItemsSlice = createSlice({
  name: "homeItemsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHomeItems.pending, (state) => {
      state.items = {};
      state.status = "loading";
    });
    builder.addCase(fetchHomeItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchHomeItems.rejected, (state) => {
      state.items = {};
      state.status = "loading";
    });
  },
});

export default homeItemsSlice.reducer;
