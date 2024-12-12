import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_SOME_KEY;

// API yaratmaq
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => `profile/getOrders`,
    }),

    // Yeni sifariş göndərmək
    submitOrder: builder.mutation({
      query: (order) => ({
        url: "order",
        method: "POST",
        body: order,
      }),
    }),

    // Bütün sifarişləri əldə etmək
    getAllOrders: builder.query({
      query: () => `order/getAllOrders`,
    }),

    // Sifariş statusunu yeniləmək
    updateOrderStatus: builder.mutation({
      query: ({ orderId, orderStatus }) => ({
        url: `admin/order/${orderId}`,
        method: "PUT",
        body: { orderStatus },  // orderStatus burada string olaraq göndərilir
      }),
      invalidatesTags: ["Orders"], // Orders siyahısını yeniləyir
    }),

    // Sifarişi silmək
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `order/delete/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
  keepUnusedDataFor: 60, // Istifadə olunmayan dataları 60 saniyə saxlayır
});

// Hook-ları ixrac etmək
export const {
  useGetOrdersQuery,
  useSubmitOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = orderApi;
