import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentImage: "",
  isOpen: false,
};

const fullscreenSlice = createSlice({
  name: "fullscreenPhotoSlice",
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

export const { setCurrentImage, setIsOpen } = fullscreenSlice.actions;
export default fullscreenSlice.reducer;
