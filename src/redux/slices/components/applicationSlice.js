import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  text: "",
  city: "Выберите город",
  cityIndex: 0,
  isOpen: false,
  isOpenCities: false,
  isOpenCitiesWindow: false,
};

const applicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setApplicationIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setIsOpenCities(state, action) {
      state.isOpenCities = action.payload;
    },
    setIsOpenCitiesWindow(state, action) {
      state.isOpenCitiesWindow = action.payload;
    },
  },
});

export const {
  setName,
  setPhone,
  setText,
  setCity,
  setApplicationIsOpen,
  setIsOpenCities,
  setIsOpenCitiesWindow,
} = applicationSlice.actions;
export default applicationSlice.reducer;
