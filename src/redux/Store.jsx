import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";
import FilterSlice from "./slices/FilterSlice";
const store = configureStore({
  reducer: {
    filter: FilterSlice,
    pcCard: CardSlice,
  },
});
export default store;
