import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const base = import.meta.env.VITE_SOME_KEY;

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base,

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
  endpoints: builder => ({
    getFavorites: builder.query({
      query: () => "product/favorites",
    }),
    addFavorite: builder.mutation({
      query: productId => ({
        url: "product/favorites",
        method: "POST",
        body: { productId },
      }),
    }),
    removeFavorite: builder.mutation({
      query: productId => ({
        url: `product/favorites/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
  keepUnusedDataFor: 60,
});

export const { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = favoriteApi;
