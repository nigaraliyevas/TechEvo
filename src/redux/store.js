import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice';
import { productApi } from "./sercives/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from "./slices/favoritesSlice"; // favoritesSlice faylını əlavə edin
import { forgetPassApi } from "./sercives/forgetPassApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer, // favorites slice əlavə edildi
    [productApi.reducerPath]: productApi.reducer,
    [forgetPassApi.reducerPath]: forgetPassApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware).concat(forgetPassApi.middleware),

});

export default store;

setupListeners(store.dispatch);
