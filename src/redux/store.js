import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./sercives/productApi";
import { reviewsApi } from "./sercives/reviewsApi"; // commentApi faylını import et
import { setupListeners } from "@reduxjs/toolkit/query";
import basketSlice from "./slices/BasketSlice";
import TokenReducer from "./slices/TokenSlice";
import { favoriteApi } from "./sercives/favoriteApi";
const store = configureStore({
  reducer: {
    auth: TokenReducer,
    basket: basketSlice,
    [productApi.reducerPath]: productApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(reviewsApi.middleware) // commentApi middleware-i əlavə et
      .concat(favoriteApi.middleware),
});

export default store;

setupListeners(store.dispatch);
