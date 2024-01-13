import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 0,
  applicationIsOpen: true,
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
  },
});

export const { setCurrentPage, setApplicationIsOpen } = headerSlice.actions;
export default headerSlice.reducer;
