import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImage: "",
  isOpen: false,
};

const fullscreenHomeSlice = createSlice({
  name: "fullscreenHomeSlice",
  initialState,
  reducers: {
    setCurrentImage(state, action) {
      state.currentImage = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setCurrentImage, setIsOpen } = fullscreenHomeSlice.actions;
export default fullscreenHomeSlice.reducer;
