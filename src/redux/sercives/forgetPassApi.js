import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = import.meta.env.VITE_SOME_KEY;
export const forgetPassApi = createApi({
  reducerPath: "forgetPassApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: builder => ({
    sendVerificationCode: builder.mutation({
      query: email => ({
        url: `/auth/sendVerificationCode`,
        method: "POST",
        params: email,
      }),
    }),
    verifyCode: builder.mutation({
      query: (email, verificationCode) => ({
        url: "auth/verify",
        method: "POST",
        body: email,
        verificationCode,
      }),
    }),
    changePassword: builder.mutation({
      query: (newPassword, confirmPassword, email, verificationCode) => ({
        url: "/auth/changePassword",
        method: "POST",
        body: newPassword,
        confirmPassword,
        email,
        verificationCode,
      }),
    }),
  }),
});

export const { useSendVerificationCodeMutation, useVerifyCodeMutation, useChangePasswordMutation } = forgetPassApi;
