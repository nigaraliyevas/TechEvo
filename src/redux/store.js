import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./slices/PaginationSlice";
import authReducer from './slices/AuthSlice'
const store = configureStore({
  reducer: {
    pagination: PaginationReducer,
    auth: authReducer,
  },
});
export default store;
