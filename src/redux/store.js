import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/pages/homeItems";
import portpholio from "./slices/pages/portpholioItems";
import promotion from "./slices/pages/promotionItems";
import school from "./slices/pages/schoolItems";
import application from "./slices/components/applicationSlice";
import feedbackTop from "./slices/components/feedbackTop";
import header from "./slices/components/headerSlice";
import fullscreen from "./slices/components/fullscreenSlice";
import bigSlider from "./slices/components/bigSliderSlice";

export const store = configureStore({
  reducer: {
    home,
    portpholio,
    promotion,
    school,
    application,
    feedbackTop,
    header,
    fullscreen,
    bigSlider,
  },
});
