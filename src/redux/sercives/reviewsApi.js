import { createApi } from "@reduxjs/toolkit/query/react";
// import { baseQueryWithReauth } from "../slices/AuthSlice";
const url = import.meta.env.VITE_SOME_KEY;

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: url,
  endpoints: builder => ({
    getReviews: builder.query({
      query: (productId) => `product/comment/${productId}`,
    }),
    postReview: builder.mutation({
      query: ({ productId, comment }) => ({
        url: "product/comment",
        method: "POST",
        body: { ...comment, productId },
      }),
    }),
  }),
});

export const { useGetReviewsQuery, usePostReviewMutation } = reviewsApi;
