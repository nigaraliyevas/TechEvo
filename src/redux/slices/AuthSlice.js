import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setTokens, clearTokens } from "../slices/TokenSlice";  // TokenSlice daxil etmək

const BASE_URL = `http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081`;

export const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const { accessToken } = getState().auth;
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }
            return headers;
        },
    })(args, api, extraOptions);

    if (result?.error?.status === 401) { // Token bitdiyi halda
        const refreshToken = api.getState().auth.refreshToken;

        if (refreshToken) {
            const refreshResponse = await fetch(`${BASE_URL}/api/v1/auth/refresh`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: refreshToken }),
            });

            if (refreshResponse.ok) {
                const { accessToken: newAccessToken } = await refreshResponse.json();

                // Yeni access token ilə redux state-i yeniləyirik
                api.dispatch(setTokens({ accessToken: newAccessToken }));

                // İndi yenidən request göndəririk yeni token ilə
                result = await fetchBaseQuery({
                    baseUrl: BASE_URL,
                    prepareHeaders: (headers) => {
                        headers.set('Authorization', `Bearer ${newAccessToken}`);
                        return headers;
                    },
                })(args, api, extraOptions);
            } else {
                api.dispatch(clearTokens());  // Refresh token etibarsızdırsa, tokenləri silirik
                // Burada istifadəçini login səhifəsinə yönləndirmək olar
            }
        } else {
            api.dispatch(clearTokens());  // Refresh token yoxdursa, tokenləri silirik
        }
    }

    return result;
};