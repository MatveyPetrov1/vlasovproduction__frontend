import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  text: "",
  city: "Санкт-Петербург",
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
  },
});

export const { setName, setPhone, setText, setCity } = applicationSlice.actions;
export default applicationSlice.reducer;
