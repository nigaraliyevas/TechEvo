import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Ətraf mühit dəyişəni ilə URL
const url = import.meta.env.VITE_SOME_KEY;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("refreshToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Backtick istifadə olundu
      }
      return headers;
    },
  }),
  tagTypes: ["User"], 
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user",
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => {
        const formData = new FormData();
        formData.append("request", JSON.stringify(userData));
        return {
          url: `/user/profile/update`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["User"],
    }),
    
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
