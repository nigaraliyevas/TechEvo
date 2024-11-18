import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/";
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
  }),
});
export const { useGetUserQuery } = userApi;