import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./sercives/productApi";
import { reviewsApi } from "./sercives/reviewsApi"; // commentApi faylını import et
import { setupListeners } from "@reduxjs/toolkit/query";

import basketSlice from "./slices/BasketSlice";
import TokenReducer from "./slices/TokenSlice";
import { favoriteApi } from "./sercives/favoriteApi";
import { orderApi } from "./sercives/orderApi";
import { userApi } from "./sercives/userApi";
const store = configureStore({
  reducer: {
    auth: TokenReducer,
    basket: basketSlice,
  
    [productApi.reducerPath]: productApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer, // commentApi reducer-i əlavə et
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(reviewsApi.middleware).concat(favoriteApi.middleware).concat(orderApi.middleware).concat(userApi.middleware), // commentApi middleware-i əlavə et

});

export default store;

setupListeners(store.dispatch);
