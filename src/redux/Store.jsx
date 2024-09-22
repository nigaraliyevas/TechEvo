import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./slices/PaginationSlice";
import CardSlice from "./slices/CardSlice";
import FilterSlice from "./slices/FilterSlice";
const store = configureStore({
  reducer: {
    pcCard: CardSlice,
    pagination: PaginationReducer,
    filter: FilterSlice,
  },
});
export default store;
