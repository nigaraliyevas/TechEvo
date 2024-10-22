import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice'
import { productApi } from "./sercives/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(productApi.middleware),
});
export default store;

setupListeners(store.dispatch);
