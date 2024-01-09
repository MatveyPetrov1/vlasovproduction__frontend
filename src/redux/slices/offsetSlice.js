import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbackOffset: 0,
};

const offSetSlice = createSlice({
  name: "offSetSlice",
  initialState,
  reducers: {
    setfeedbackOffset(state, action) {
      state.feedbackOffset = action.payload;
    },
  },
});

export const { setfeedbackOffset } = offSetSlice.actions;
export default offSetSlice.reducer;
