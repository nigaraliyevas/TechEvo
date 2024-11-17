import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base = import.meta.env.VITE_SOME_KEY;
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base,
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
      query: () => "product/filters", // Backend-in filtr endpointi
    }),
    filterProductsBySpecs: builder.query({
      query: ({ categoryName, filters }) => {
        let url = `product/filterByPriceAndSpecs?categoryName=${categoryName}`;
        

        // if (filters) {
        //   Object.keys(filters).forEach((key) => {
        //     if (filters[key] && filters[key].length > 0) {
        //       url += `&${key}=${filters[key]
        //         .map(encodeURIComponent)
        //         .join(",")}`;
        //     }
        //   });
        // }

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
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
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
} = productApi;
