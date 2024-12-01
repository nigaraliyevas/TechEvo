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
    getServices: builder.query({
      query: () => `support`,
    }),
    getSteps: builder.query({
      query: () => `support/steps`,
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetServicesQuery, useGetStepsQuery } = serviceApi;
