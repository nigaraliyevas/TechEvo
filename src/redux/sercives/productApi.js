import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base = import.meta.env.VITE_SOME_KEY;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", ` ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product/getAllProducts",
      providesTags: ["Products"],
    }),
    getProductsByCategoryName: builder.query({
      query: ({ categoryName }) =>
        `product/getAllByCategoryName?categoryName=${categoryName}`,
      invalidatesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `product/${id}`,
      invalidatesTags: ["Products"],
    }),
    getOrderByOrderId: builder.query({
      query: (orderItemId) => `order/orderItem/${orderItemId}`,
      providesTags: ["Order"],
    }),
    getFilters: builder.query({
      query: () => "product/filters",
    }),
    filterProductsBySpecs: builder.query({
      query: ({ categoryName, filters }) => {
        let url = `product/filterByPriceAndSpecs?categoryName=${categoryName}`;
        // Filtrləri əlavə etməyə ehtiyac varsa, burada əlavə edin
        return url;
      },
    }),
    getSpecifications: builder.query({
      query: (categoryName) =>
        `product/specification/filterByCategoryName?categoryName=${categoryName}`,
    }),
    getFilterValues: builder.query({
      query: (categoryName) =>
        `product/category/getFilters?categoryName=${categoryName}`,
    }),
    getFilterNameWithValues: builder.query({
      query: (categoryName) =>
        `product/category/getFilters?categoryName=${categoryName}`,
    }),
    getRecommendedProducts: builder.query({
      query: () => `product/recommendations`, // Endpoint düzəldildi
      providesTags: ["RecommendedProducts"],
    }),
  }),
  keepUnusedDataFor: 60,
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryNameQuery,
  useGetProductByIdQuery,
  useGetOrderByOrderIdQuery,
  useFilterProductsBySpecsQuery,
  useGetSpecificationsQuery,
  useGetFilterValuesQuery,
  useGetFilterNameWithValuesQuery,
  useGetRecommendedProductsQuery, // Yeni hook
} = productApi;
