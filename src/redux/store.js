import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./sercives/productApi";
import { reviewsApi } from "./sercives/reviewsApi"; // commentApi faylını import et
import { setupListeners } from "@reduxjs/toolkit/query";

import basketSlice from "./slices/BasketSlice";
import TokenReducer from "./slices/TokenSlice";
import { favoriteApi } from "./sercives/favoriteApi";
import { userApi } from "./sercives/userApi";
const store = configureStore({
  reducer: {
    auth: TokenReducer,
    basket: basketSlice,
  
    [productApi.reducerPath]: productApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer, // commentApi reducer-i əlavə et
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [userApi.reducerPath]: userApi.reducer,

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(userApi.middleware).concat(reviewsApi.middleware).concat(favoriteApi.middleware), // commentApi middleware-i əlavə et

});

export default store;

setupListeners(store.dispatch);
