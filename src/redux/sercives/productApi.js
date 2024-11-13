import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product/getAllProducts",
    }),
    getProductsByCategoryName: builder.query({

      query: (categoryName) =>
        `product/getAllByCategoryName?categoryName=${categoryName}`,
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
    }),
    getOrderByOrderId: builder.query({
      query: (orderItemId) => `order/orderItem/${orderItemId}`,
      providesTags: ["Order"],
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});



export const { useGetProductsQuery, useGetProductsByCategoryNameQuery, useGetProductByIdQuery, useGetOrderByOrderIdQuery } =
  productApi;


