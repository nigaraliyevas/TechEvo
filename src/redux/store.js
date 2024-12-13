import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/AuthSlice";
import { productApi } from "./sercives/productApi";
import { reviewsApi } from "./sercives/reviewsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import basketSlice from "./slices/BasketSlice";
import TokenReducer from "./slices/TokenSlice";
import { favoriteApi } from "./sercives/favoriteApi";
import { orderApi } from "./sercives/orderApi";
import { userApi } from "./sercives/userApi";
import { forgetPassApi } from "./sercives/forgetPassApi";
import { serviceApi } from "./sercives/serviceApi";
import { viewCountApi } from "./sercives/viewCountApi";
import { analyticsApi } from "./sercives/analyticsApi";
import { termsApi } from "./sercives/termsApi";
const store = configureStore({
  reducer: {
    auth: TokenReducer,
    basket: basketSlice,

    // API reducers
    [productApi.reducerPath]: productApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [forgetPassApi.reducerPath]: forgetPassApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [viewCountApi.reducerPath]: viewCountApi.reducer,
    [analyticsApi.reducerPath]: analyticsApi.reducer,
    [termsApi.reducerPath]: termsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(reviewsApi.middleware).concat(favoriteApi.middleware).concat(orderApi.middleware).concat(userApi.middleware).concat(forgetPassApi.middleware).concat(userApi.middleware).concat(serviceApi.middleware).concat(viewCountApi.middleware).concat(analyticsApi.middleware).concat(termsApi.middleware), 
});

export default store;

setupListeners(store.dispatch);
