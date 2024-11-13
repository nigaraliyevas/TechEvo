import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./sercives/productApi";
import { reviewsApi } from "./sercives/reviewsApi"; // commentApi faylını import et
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesReducer from "./slices/favoritesSlice"; // favoritesSlice faylını əlavə edin
import basketSlice from "./slices/BasketSlice";
import TokenReducer from "./slices/TokenSlice";
const store = configureStore({
  reducer: {
    auth: TokenReducer,
    basket: basketSlice,
    favorites: favoritesReducer,
    [productApi.reducerPath]: productApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer, // commentApi reducer-i əlavə et
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(reviewsApi.middleware), // commentApi middleware-i əlavə et
});

export default store;

setupListeners(store.dispatch);
