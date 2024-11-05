import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../slices/AuthSlice2";

// Create the API
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/v1/product/getAllProducts",
      providesTags: ["Products"],
    }),
    getProductsByCategoryName: builder.query({
      query: (categoryName) => `api/v1/product/getAllByCategoryName?categoryName=${categoryName}`,
    }),
    getProductById: builder.query({
      query: (id) => `api/v1/product/${id}`,
      providesTags: ["Product"],
    }),
  }),
  keepUnusedDataFor: 60,// Istifade olunmayan datalari 60saniye saxlayir
});


export const { useGetProductsQuery, useGetProductsByCategoryNameQuery, useGetProductByIdQuery } =
  productApi;

