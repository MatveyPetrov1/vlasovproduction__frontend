import { configureStore } from "@reduxjs/toolkit";
import offset from "./slices/offsetSlice";
import home from "./slices/homeItems";
import portpholio from "./slices/portpholioItems";
import promotion from "./slices/promotionItems";
import school from "./slices/schoolItems";
import application from "./slices/applicationSlice";

export const store = configureStore({
  reducer: {
    offset,
    home,
    portpholio,
    promotion,
    school,
    application,
  },
});
