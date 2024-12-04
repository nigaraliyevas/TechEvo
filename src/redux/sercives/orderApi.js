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
  endpoints: (builder) => ({
    // Sifarişləri əldə etmək
    getOrders: builder.query({
      query: () => ({
        url: "/profile/getOrders",
        method: "GET",
      }),
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
      query: () => ({
        url: "order/getAllOrders",
        method: "GET",
        //headers: {}, // Boş saxlanılır
      }),
    }),


    // Sifariş statusunu yeniləmək
    updateOrderStatus: builder.mutation({
      query: ({ orderId, orderStatus }) => ({
        url: `order/status/${orderId}`,
        method: "PUT",
        body: { status: orderStatus },
        headers: {
          "Content-Type": "application/json",
        },
        responseHandler: (response) => response.text(), // Cavabı düz string kimi oxuyur
      }),
      transformResponse: (response, meta, arg) => {
        // Cavabın strukturunu özünüz idarə edə bilərsiniz
        return { message: response };
      },
      invalidatesTags: ["Orders"],
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
