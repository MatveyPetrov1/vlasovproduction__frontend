import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";
import { sleep } from "../../../utils/sleepLoader";

export const fetchPortpholioItems = createAsyncThunk(
  "portpholio/fetchPortpholioItems",
  async () => {
    const { data } = await axios.get("portpholio");
    await sleep(2000);
    return data;
  }
);

const initialState = {
  items: {},
  status: "loading",
};

const portpholioItemsSlice = createSlice({
  name: "portpholioItemsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPortpholioItems.pending, (state) => {
      state.items = {};
      state.status = "loading";
    });
    builder.addCase(fetchPortpholioItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPortpholioItems.rejected, (state) => {
      state.items = {};
      state.status = "loading";
    });
  },
});

export default portpholioItemsSlice.reducer;
