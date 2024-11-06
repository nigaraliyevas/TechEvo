import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const favoriteApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/product",
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query({ // Favoritləri çəkmək üçün
      query: () => "favorites",
    }),
    addFavorite: builder.mutation({ // Yeni favorit əlavə etmək üçün
      query: (productId) => ({
        url: `favorites/${productId}`,
        method: "POST",
        body: productId,
        headers: {
        
        }
      }),
    }),
    removeFavorite: builder.mutation({ // Favoritdən silmək üçün
      query: (productId) => ({
        url: `favorites/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
  keepUnusedDataFor: 60,// Istifade olunmayan datalari 60saniye saxlayir
});


export const {useGetFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = favoriteApi;

