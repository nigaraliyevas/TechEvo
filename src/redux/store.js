import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./sercives/productApi";
import { favoriteApi } from "./sercives/favoriteApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import TokenReducer from './slices/TokenSlice';

const store = configureStore({
  reducer: {
    auth: TokenReducer,
    [productApi.reducerPath]: productApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(favoriteApi.middleware),
});

export default store;

setupListeners(store.dispatch);
