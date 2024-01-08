import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photographyOffset: 0,
  applicationOffset: 0,
  feedbackOffset: 0,
};

const offSetSlice = createSlice({
  name: "offSetSlice",
  initialState,
  reducers: {
    setPhotographyOffset(state, action) {
      state.photographyOffset = action.payload;
    },
    setApplicationOffset(state, action) {
      state.applicationOffset = action.payload;
    },
    setfeedbackOffset(state, action) {
      state.feedbackOffset = action.payload;
    },
  },
});

export const { setPhotographyOffset, setApplicationOffset, setfeedbackOffset } =
  offSetSlice.actions;
export default offSetSlice.reducer;
