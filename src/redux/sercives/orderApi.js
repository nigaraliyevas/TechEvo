import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// api link
const serverUrl = import.meta.env.VITE_SOME_KEY;
// Create the API
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: serverUrl,
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

    //admin
    getAllOrders: builder.query({
      query: () => "order/getAllOrders",
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, orderStatus }) => ({
        url: `/admin/order/${orderId}`,
        method: "PUT",
        body: { orderStatus },
      }),
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetOrdersQuery, useSubmitOrderMutation, useGetAllOrdersQuery, useUpdateOrderStatusMutation } = orderApi;
