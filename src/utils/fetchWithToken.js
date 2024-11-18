import { store } from "./store"; // Redux store
import { setTokens, logout } from "./authSlice";
import toast from "react-hot-toast";

const API_URL = "http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/";

const fetchWithToken = async (url, options = {}) => {
  const state = store.getState();
  const accessToken = state.auth.accessToken;
  const refreshToken = state.auth.refreshToken;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const fetchOptions = { ...options, headers };

  const response = await fetch(`${API_URL}${url}`, fetchOptions);

  // If token is expired (401), try to refresh it
  if (response.status === 401 && refreshToken) {
    try {
      const refreshResponse = await fetch(`${API_URL}auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      if (!refreshResponse.ok) {
        throw new Error("Refresh token request failed");
      }

      const { newAccessToken, newRefreshToken } = await refreshResponse.json();

      // Update tokens in Redux and localStorage
      store.dispatch(setTokens({ accessToken: newAccessToken, refreshToken: newRefreshToken }));
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);

      // Retry the original request with the new token
      headers.Authorization = `Bearer ${newAccessToken}`;
      return fetch(`${API_URL}${url}`, { ...fetchOptions, headers });
    } catch (error) {
      console.error("Token refresh failed:", error);
      toast.error("Session expired. Please log in again.");
      store.dispatch(logout());
      return Promise.reject(error);
    }
  }

  return response;
};

export default fetchWithToken;
