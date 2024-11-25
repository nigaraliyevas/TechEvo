import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/",
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
