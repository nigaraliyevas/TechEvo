import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice';
import { productApi } from "./sercives/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from "./slices/favoritesSlice"; // favoritesSlice faylını əlavə edin
import basketSlice from "./slices/BasketSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer, // favorites slice əlavə edildi
    [productApi.reducerPath]: productApi.reducer,
    basket:basketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;

setupListeners(store.dispatch);
