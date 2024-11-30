import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = import.meta.env.VITE_SOME_KEY;

export const viewCountApi = createApi({
  reducerPath: "viewCountApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: builder => ({
    countVisits: builder.mutation({
      query: () => ({
        url: "admin/count-visits",
        method: "POST",
      }),
    }),
  }),
});

export const { useCountVisitsMutation } = viewCountApi;
