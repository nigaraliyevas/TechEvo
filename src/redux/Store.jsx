import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./slices/PaginationSlice";
import CardSlice from "./slices/CardSlice";
import FilterSlice from "./slices/FilterSlice";
import authReducer from './slices/AuthSlice'
import basketReducer from './slices/BasketSlice'
const store = configureStore({
  reducer: {
    pcCard: CardSlice,
    pagination: PaginationReducer,
    filter: FilterSlice,
    auth: authReducer,
    card: basketReducer
  },
});
export default store;
