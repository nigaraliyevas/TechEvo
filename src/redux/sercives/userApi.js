import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Əsas sorğu funksiyası
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SOME_KEY, // Mühit dəyişəninizin doğru olduğuna əmin olun
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    console.log("Token:", token); 
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        localStorage.setItem("accessToken", refreshResult.data.accessToken);
        localStorage.setItem("refreshToken", refreshResult.data.refreshToken);
        result = await baseQuery(args, api, extraOptions);
      } else {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        api.dispatch({ type: "auth/logout" });
      }
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      api.dispatch({ type: "auth/logout" });
    }
  }

  return result;
};

// API yaradılması
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user",
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (userData) => {
        console.log(userData);

        return {
          url: "user/profile/update",
          method: "PUT",
          body: userData,
          headers: { "Content-Type": "application/json" },
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
