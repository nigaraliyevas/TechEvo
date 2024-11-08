// import { createApi } from "@reduxjs/toolkit/query/react";
// import { baseQueryWithReauth } from "../slices/AuthSlice"; // Yenilənmiş baseQuery

// export const favoriteApi = createApi({
//   reducerPath: "favoriteApi",
//   baseQuery: baseQueryWithReauth, // Yenilənmiş baseQuery
//   endpoints: (builder) => ({
//     // Favoritləri çəkmək üçün GET əməliyyatı
//     getFavorites: builder.query({
//       query: () => "product/favorites", // Favoritləri almaq üçün sorğu
//     }),

//     // Favoritə yeni məhsul əlavə etmək üçün POST əməliyyatı
//     addFavorite: builder.mutation({
//       query: (productId) => ({
//         url: `product/favorites/${productId}`, // Məhsul id ilə URL
//         method: "POST", // POST metodu ilə
//         body: { productId }, // POST sorğusunda göndərilən bədən
//       }),
//     }),

//     // Favoritdən məhsul silmək üçün DELETE əməliyyatı
//     removeFavorite: builder.mutation({
//       query: (productId) => ({
//         url: `product/favorites/${productId}`, // Məhsul id ilə URL
//         method: "DELETE", // DELETE metodu ilə
//       }),
//     }),
//   }),
//   keepUnusedDataFor: 60, // Istifadə olunmayan dataları 60 saniyə saxlayır
// });

// export const { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = favoriteApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081",
    prepareHeaders: (headers, { getState }) => {
      // First, try to get the token from Redux
      let token = getState().auth.accessToken;

      // If not in Redux, fallback to localStorage
      if (!token) {
        token = localStorage.getItem("accessToken");
      }

      // Add the token to the headers if available
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => "/api/v1/product/favorites",
    }),
    addFavorite: builder.mutation({
      query: (productId) => ({
        url: `/api/v1/product/favorites`,
        method: "POST",
        body: { productId },
      }),
    }),
    removeFavorite: builder.mutation({
      query: (productId) => ({
        url: `/api/v1/product/favorites/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
  keepUnusedDataFor: 60,
});

export const { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = favoriteApi;
