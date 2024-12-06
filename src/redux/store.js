// import { configureStore } from "@reduxjs/toolkit";
// // import authReducer from "./slices/AuthSlice";
// import { productApi } from "./sercives/productApi";
// import { reviewsApi } from "./sercives/reviewsApi"; // commentApi faylını import et
// import { setupListeners } from "@reduxjs/toolkit/query";
// import basketSlice from "./slices/BasketSlice";
// import TokenReducer from "./slices/TokenSlice";
// import { favoriteApi } from "./sercives/favoriteApi";
// import { orderApi } from "./sercives/orderApi";
// import { userApi } from "./sercives/userApi";
// import { forgetPassApi } from "./sercives/forgetPassApi";
// import apiMiddleware from "./sercives/middleware/apiMiddleware";
// import { serviceApi } from "./sercives/serviceApi";
// import { viewCountApi } from "./sercives/viewCountApi";
// import { analyticsApi } from "./sercives/analyticsApi";
// const store = configureStore({
//   reducer: {
//     auth: TokenReducer,
//     basket: basketSlice,

//     [productApi.reducerPath]: productApi.reducer,
//     [reviewsApi.reducerPath]: reviewsApi.reducer,
//     [favoriteApi.reducerPath]: favoriteApi.reducer,
//     [orderApi.reducerPath]: orderApi.reducer,
//     [userApi.reducerPath]: userApi.reducer,
//     [forgetPassApi.reducerPath]: forgetPassApi.reducer,
//     [serviceApi.reducerPath]: serviceApi.reducer,
//     //admin
//     [viewCountApi.reducerPath]: viewCountApi.reducer,
//     [analyticsApi.reducerPath]: analyticsApi.reducer,
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware).concat(reviewsApi.middleware).concat(favoriteApi.middleware).concat(orderApi.middleware).concat(userApi.middleware).concat(forgetPassApi.middleware).concat(userApi.middleware).concat(apiMiddleware).concat(serviceApi.middleware).concat(viewCountApi.middleware).concat(analyticsApi.middleware), // commentApi middleware-i əlavə et
// });

// export default store;

// setupListeners(store.dispatch);


import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/AuthSlice";
import { productApi } from "./sercives/productApi";
import { reviewsApi } from "./sercives/reviewsApi"; // commentApi faylını import et
import { setupListeners } from "@reduxjs/toolkit/query";
import basketSlice from "./slices/BasketSlice";
import TokenReducer from "./slices/TokenSlice";
import { favoriteApi } from "./sercives/favoriteApi";
import { orderApi } from "./sercives/orderApi";
import { userApi } from "./sercives/userApi";
import { forgetPassApi } from "./sercives/forgetPassApi";
import apiMiddleware from "./sercives/middleware/apiMiddleware";
import { serviceApi } from "./sercives/serviceApi";
import { viewCountApi } from "./sercives/viewCountApi";
import { analyticsApi } from "./sercives/analyticsApi";

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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(favoriteApi.middleware)
      .concat(orderApi.middleware)
      .concat(userApi.middleware)
      .concat(forgetPassApi.middleware)
      .concat(apiMiddleware)
      .concat(serviceApi.middleware)
      .concat(viewCountApi.middleware)
      .concat(analyticsApi.middleware),
});

export default store;

// Aktiv dinləyicilər (yalnız lazımdırsa aktiv saxlayın)
setupListeners(store.dispatch);
