import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_SOME_KEY;

export const analyticsApi = createApi({
  reducerPath: "analyticsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: builder => ({
    getChart: builder.query({
      query: () => "admin/getAnalytics",
    }),
  }),
});

export const { useGetChartQuery } = analyticsApi;
