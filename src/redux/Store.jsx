import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./slices/PaginationSlice";
import CardSlice from "./slices/CardSlice";
import FilterSlice from "./slices/FilterSlice";
import authReducer from './slices/AuthSlice'
const store = configureStore({
  reducer: {
    pcCard: CardSlice,
    pagination: PaginationReducer,
    filter: FilterSlice,
    auth: authReducer,
  },
});
export default store;
