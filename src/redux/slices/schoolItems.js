import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { sleep } from "./sleepLoader";

export const fetchSchoolItems = createAsyncThunk(
  "school/fetchSchoolItems",
  async () => {
    const { data } = await axios.get("/school");
    await sleep(1500);
    return data;
  }
);

const initialState = {
  items: {},
  status: "loading",
};

const schoolItemsSlice = createSlice({
  name: "schoolItemsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSchoolItems.pending, (state) => {
      state.items = {};
      state.status = "loading";
    });
    builder.addCase(fetchSchoolItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchSchoolItems.rejected, (state) => {
      state.items = {};
      state.status = "loading";
    });
  },
});

export default schoolItemsSlice.reducer;
