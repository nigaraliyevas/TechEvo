import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// server from env
const serverUrl = import.meta.env.VITE_SOME_KEY;

// Create the API
export const termsApi = createApi({
  reducerPath: "termsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}`,
  }),
  endpoints: builder => ({
    getTerms: builder.query({
      query: () => `user/terms`,
    }),
  }),
  keepUnusedDataFor: 60, // Istifade olunmayan datalari 60saniye saxlayir
});

export const { useGetTermsQuery } = termsApi;
