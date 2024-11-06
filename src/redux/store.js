import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import authReducer from './slices/AuthSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
=======
import authReducer from './slices/AuthSlice';
import { productApi } from "./sercives/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from "./slices/favoritesSlice"; // favoritesSlice faylını əlavə edin

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer, // favorites slice əlavə edildi
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;

setupListeners(store.dispatch);
>>>>>>> upstream/murad
