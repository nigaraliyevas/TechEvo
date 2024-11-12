

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
        console.log("Authorization başlıqı:", headers.get("Authorization"));
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
        url: "/api/v1/product/favorites",
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
