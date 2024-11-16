import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import { productApi } from "./sercives/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from "./slices/favoritesSlice"; // favoritesSlice faylını əlavə edin
import { forgetPassApi } from "./sercives/forgetPassApi";
import { userApi } from "./sercives/userApi";
import apiMiddleware from "./sercives/middleware/apiMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer, // favorites slice əlavə edildi
    [productApi.reducerPath]: productApi.reducer,
    [forgetPassApi.reducerPath]: forgetPassApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(forgetPassApi.middleware).concat(userApi.middleware).concat(apiMiddleware),
});

export default store;

setupListeners(store.dispatch);
