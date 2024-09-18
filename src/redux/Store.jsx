import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";
const store = configureStore({
  reducer: {
    pcCard: CardSlice,
  },
});
export default store;
