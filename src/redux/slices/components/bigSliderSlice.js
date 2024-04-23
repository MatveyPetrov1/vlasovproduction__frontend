import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImage: 0,
};

const bigSliderSlice = createSlice({
  name: "bigSliderSlice",
  initialState,
  reducers: {
    setCurrentImage(state, action) {
      state.currentImage = action.payload;
    },
  },
});

export const { setCurrentImage } = bigSliderSlice.actions;
export default bigSliderSlice.reducer;
