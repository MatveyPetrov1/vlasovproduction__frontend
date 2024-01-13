import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/homeItems";
import portpholio from "./slices/portpholioItems";
import promotion from "./slices/promotionItems";
import school from "./slices/schoolItems";
import application from "./slices/applicationSlice";
import offset from "./slices/offsetSlice";
import header from "./slices/headerSlice";
import homeFullscreen from "./slices/fullscreenHomeSlice";

export const store = configureStore({
  reducer: {
    home,
    portpholio,
    promotion,
    school,
    application,
    offset,
    header,
    homeFullscreen,
  },
});
