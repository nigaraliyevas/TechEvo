
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_SOME_KEY;

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: headers => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getReviews: builder.query({
      query: productId => `product/comment/${productId}`,
    }),
    postReview: builder.mutation({
      query: ({ productId, comment }) => ({
        url: "product/comment",
        method: "POST",
        body: { ...comment, productId },
      }),
    }),
    getAllComments: builder.query({
      query: () => `product/comment/getAll`,
    })
  }),
});

export const { useGetReviewsQuery, usePostReviewMutation, useGetAllCommentsQuery } = reviewsApi;
