import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setTokens, clearTokens } from "../slices/TokenSlice"; // TokenSlice importu


export const baseQueryWithReauth = async (args, api, extraOptions) => {
  // İlk olaraq fetchBaseQuery istifadə edirik
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081",
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = getState().auth; // Redux-dan access token almaq
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);

// Giriş funksiyası - burada API çağırışı edilir

      }
      return headers;
    },
  });

  // İlk sorğunu icra et
  let result = await baseQuery(args, api, extraOptions);

  // Əgər 401 (Unauthorized) xətası alınarsa
  if (result?.error?.status === 401) {
    const refreshToken = api.getState().auth.refreshToken; // refreshToken-ı alırıq

    // refreshToken varsa, yeni accessToken əldə etməyə cəhd edirik
    if (refreshToken) {
      const refreshResponse = await fetch(`${import.meta.env.VITE_API_GLOBAL_URL}/api/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: refreshToken }),
      });

      if (refreshResponse.ok) {
        const { accessToken: newAccessToken } = await refreshResponse.json();
        api.dispatch(setTokens({ accessToken: newAccessToken })); // Yeni token ilə redux store-u yeniləyirik

        // Yeni token ilə sorğunu təkrarlayırıq
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Əgər refresh token ilə yenilənmə alınmırsa, token-ləri sıfırlayırıq
        api.dispatch(clearTokens());
        // Burada istifadəçini login səhifəsinə yönləndirmək ola bilər
      }
    } else {
      api.dispatch(clearTokens()); // refreshToken yoxdursa da token-ləri sıfırlayırıq
    }
  }

  return result; // Nəticəni geri qaytarırıq
};
