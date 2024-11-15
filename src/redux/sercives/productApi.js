import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base = import.meta.env.VITE_SOME_KEY;
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base,
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => "product/getAllProducts",
    }),
    getProductsByCategoryName: builder.query({
      query: categoryName => `product/getAllByCategoryName?categoryName=${categoryName}`,
    }),
    getProductById: builder.query({
      query: id => `product/${id}`,
    }),
    getOrderByOrderId: builder.query({
      query: orderItemId => `order/orderItem/${orderItemId}`,
      providesTags: ["Order"],
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetProductsQuery, useGetProductsByCategoryNameQuery, useGetProductByIdQuery, useGetOrderByOrderIdQuery } = productApi;
