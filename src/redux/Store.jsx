import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./slices/PaginationSlice";
import CardSlice from "./slices/CardSlice";
const store = configureStore({
  reducer: {
    pcCard: CardSlice,
    pagination: PaginationReducer
  },
});
export default store;

