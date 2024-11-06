import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./sercives/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import TokenReducer from './slices/TokenSlice';
import favoritesReducer from "./slices/favoritesSlice"; // favoritesSlice faylını əlavə edin

const store = configureStore({
  reducer: {
    auth: TokenReducer,
    favorites: favoritesReducer, // favorites slice əlavə edildi
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;

setupListeners(store.dispatch); 
