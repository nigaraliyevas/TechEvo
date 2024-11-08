import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../slices/AuthSlice"; // Yenilənmiş baseQuery

export const favoriteApi = createApi({
  reducerPath: "favoriteApi",
  baseQuery: baseQueryWithReauth, // Yenilənmiş baseQuery
  endpoints: (builder) => ({
    // Favoritləri çəkmək üçün GET əməliyyatı
    getFavorites: builder.query({
      query: () => "product/favorites", // Favoritləri almaq üçün sorğu
    }),

    // Favoritə yeni məhsul əlavə etmək üçün POST əməliyyatı
    addFavorite: builder.mutation({
      query: (productId) => ({
        url: `product/favorites/${productId}`, // Məhsul id ilə URL
        method: "POST", // POST metodu ilə
        body: { productId }, // POST sorğusunda göndərilən bədən
      }),
    }),

    // Favoritdən məhsul silmək üçün DELETE əməliyyatı
    removeFavorite: builder.mutation({
      query: (productId) => ({
        url: `product/favorites/${productId}`, // Məhsul id ilə URL
        method: "DELETE", // DELETE metodu ilə
      }),
    }),
  }),
  keepUnusedDataFor: 60, // Istifadə olunmayan dataları 60 saniyə saxlayır
});

export const { useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = favoriteApi;
