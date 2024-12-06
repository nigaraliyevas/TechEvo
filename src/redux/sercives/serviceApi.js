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
    getDoor: builder.query({
      query: () => `door`,
    }),
    getDoorSteps: builder.query({
      query: () => `door/step`,
    }),
    getDoorHeader: builder.query({
      query: () => `door/header`,
    }),
    getCreditHeader1: builder.query({
      query: () => `creditcard/header1`,
    }),
    getCreditHeader2: builder.query({
      query: () => `creditcard/header2`,
    }),
    getCreditCard: builder.query({
      query: () => `creditcard`,
    }),
    createRepairHeader : builder.mutation({
      query: (data) => ({
        url: `admin/supportHeader`,
        method: 'POST',
        body: data,
      })
    })
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetRepairQuery, useGetRepairStepsQuery, useGetRepairHeaderQuery, useGetDoorQuery, useGetDoorStepsQuery, useGetDoorHeaderQuery, useGetCreditCardQuery, useGetCreditHeader1Query, useGetCreditHeader2Query, useCreateRepairHeaderMutation } = serviceApi;
