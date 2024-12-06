import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/",
    prepareHeaders: headers => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => `profile/getOrders`,
    }),
    submitOrder: builder.mutation({
      query: order => ({
        url: "order",
        method: "POST",
        body: order,
      }),
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetOrdersQuery,useSubmitOrderMutation } = orderApi;