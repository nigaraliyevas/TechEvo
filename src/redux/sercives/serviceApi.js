import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// server from env
const serverUrl = import.meta.env.VITE_SOME_KEY;

// Create the API
export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
  }),
  tagTypes: ["RepairHeader", "Repair", "RepairSteps"],
  endpoints: builder => ({
    getRepair: builder.query({
      query: () => `support`,
      providesTags: ["Repair"],
    }),
    getRepairSteps: builder.query({
      query: () => `support/steps`,
      providesTags: ["RepairSteps"],
    }),
    getRepairHeader: builder.query({
      query: () => `support/header`,
      providesTags: ["RepairHeader"],
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
    }),
    deleteRepairHeader: builder.mutation({
      query: () => ({
        url: `admin/support/header/delete`,
        method: 'DELETE',
      }),
      invalidatesTags: ["RepairHeader", "Repair", "RepairSteps"],
    }),
    changeRepair: builder.mutation({
      query: (id, data) => ({
        url:`admin/support/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
        responseHandler: (response) => response.text(),
      }),
      transformResponse: (response, meta, arg) => {
        // Cavabın strukturunu özünüz idarə edə bilərsiniz
        return { message: response };
      },
      invalidatesTags: ["RepairHeader", "Repair", "RepairSteps"],

    }),
    deleteRepair: builder.mutation({
      query: (id) => ({
        url: `admin/support/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["RepairHeader", "Repair", "RepairSteps"],
    }),
    createRepair : builder.mutation({
      query: (data) => ({
        url: `admin/support`,
        method: 'POST',
        body: data,
      })
    }),
    deleteSteps: builder.mutation({
      query: (id) => ({
        url: `admin/supportStep/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["RepairHeader", "Repair", "RepairSteps"],
    }),
    createStep : builder.mutation({
      query: (data) => ({
        url: `admin/supportStep`,
        method: 'POST',
        body: data,
      })
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetRepairQuery, useGetRepairStepsQuery, useGetRepairHeaderQuery, useGetDoorQuery, useGetDoorStepsQuery, useGetDoorHeaderQuery, useGetCreditCardQuery, useGetCreditHeader1Query, useGetCreditHeader2Query, useCreateRepairHeaderMutation, useDeleteRepairHeaderMutation, useChangeRepairMutation, useDeleteRepairMutation, useCreateRepairMutation, useDeleteStepsMutation, useCreateStepMutation } = serviceApi;
