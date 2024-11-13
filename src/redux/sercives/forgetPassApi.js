import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forgetPassApi = createApi({
  reducerPath: "forgetPassApi",
  baseQuery: fetchBaseQuery(import.meta.env.server_domain),
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
      query: (newPassword, confirmPassword) => ({
        url: "/auth/changePassword",
        method: "POST",
        body: newPassword,
        confirmPassword,
      }),
    }),
  }),
});

export const { useSendVerificationCodeMutation, useVerifyCodeMutation, useChangePasswordMutation } = forgetPassApi;
