import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_SOME_KEY;
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: headers => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getUser: builder.query({
      query: () => "/user",
    }),
    updateUser: builder.mutation({
      query: userData => ({
        url: "/user",
        method: "PUT", // Və ya POST/PATCH API-nizin tələblərinə uyğun olaraq
        body: userData,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;

