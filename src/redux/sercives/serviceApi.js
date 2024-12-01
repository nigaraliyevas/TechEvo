import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// server from env
const serverUrl = import.meta.env.VITE_SOME_KEY;

// Create the API
export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
  }),
  endpoints: builder => ({
    getRepair: builder.query({
      query: () => `support`,
    }),
    getRepairSteps: builder.query({
      query: () => `support/steps`,
    }),
    getRepairHeader: builder.query({
      query: () => `support/header`,
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetRepairQuery, useGetRepairStepsQuery, useGetRepairHeaderQuery } = serviceApi;
