import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../axios";
import { sleep } from "../../../utils/sleepLoader";

export const fetchPromotionItems = createAsyncThunk(
  "promotion/fetchPromotionItems",
  async () => {
    const { data } = await axios.get("/promotion");
    await sleep(2000);
    return data;
  }
);

const initialState = {
  items: {},
  status: "loading",
};

const promotionItemsSlice = createSlice({
  name: "promotionItemsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPromotionItems.pending, (state) => {
      state.items = {};
      state.status = "loading";
    });
    builder.addCase(fetchPromotionItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPromotionItems.rejected, (state) => {
      state.items = {};
      state.status = "loading";
    });
  },
});

export default promotionItemsSlice.reducer;
