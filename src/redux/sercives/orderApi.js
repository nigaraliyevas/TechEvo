import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_SOME_KEY;

// API yaratmaq
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem("accessToken");
      if (token && endpoint !== "getAllOrders") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    // Sifarişləri əldə etmək
    getOrders: builder.query({
      query: () => ({
        url: "/profile/getOrders",
        method: "GET",
      }),
    }),
    getOrder: builder.query({
      query: token => ({
        url: `order`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
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
    updateStatusOrder: builder.mutation({
      query: ({ orderId, orderStatus }) => ({
        url: `/admin/order/${orderId}`,
        method: "PUT",
        body: { orderStatus },
      }),
    }),

    updateOrderStatus: builder.mutation({
      query: ({ orderId, orderStatus }) => ({
        url: `order/status/${orderId}`,
        method: "PUT",
        body: { status: orderStatus },
        headers: {
          "Content-Type": "application/json",
        },
        responseHandler: response => response.text(), // Cavabı düz string kimi oxuyur
      }),
      transformResponse: (response, meta, arg) => {
        // Cavabın strukturunu özünüz idarə edə bilərsiniz
        return { message: response };
      },
      invalidatesTags: ["Orders"],
    }),

    // Sifariş elementini silmək
    deleteOrderItem: builder.mutation({
      query: ({ orderId, orderItemId }) => ({
        url: `order/${orderId}/items/${orderItemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
  keepUnusedDataFor: 60, // Istifadə olunmayan dataları 60 saniyə saxlayır
});

export const { useGetOrdersQuery, useSubmitOrderMutation, useUpdateOrderStatusMutation, useUpdateStatusOrderMutation, useGetAllOrdersQuery, useDeleteOrderMutation, useDeleteOrderItemMutation, useGetOrderQuery } = orderApi;
