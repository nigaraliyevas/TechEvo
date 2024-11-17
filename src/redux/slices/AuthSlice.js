// import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { setTokens, clearTokens } from "../slices/TokenSlice"; // TokenSlice daxil etmək

// const baseUrl = import.meta.env.VITE_SOME_KEY;
// console.log(baseUrl);
// export const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await fetchBaseQuery({
//     baseUrl: baseUrl,
//     prepareHeaders: (headers, { getState }) => {
//       const { accessToken } = getState().auth;
//       if (accessToken) {
//         headers.set("Authorization", `Bearer ${accessToken}`);
//       }
//       return headers;
//     },
//   })(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     // Token bitdiyi halda
//     const refreshToken = api.getState().auth.refreshToken;
//     console.log(refreshToken);
//     if (refreshToken) {
//       const refreshResponse = await fetch(`${baseUrl}auth/refresh`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: refreshToken }),
//       });

//       if (refreshResponse.ok) {
//         const { accessToken: newAccessToken } = await refreshResponse.json();

//         // Yeni access token ilə redux state-i yeniləyirik
//         api.dispatch(setTokens({ accessToken: newAccessToken }));

//         // İndi yenidən request göndəririk yeni token ilə
//         result = await fetchBaseQuery({
//           baseUrl: baseUrl,
//           prepareHeaders: headers => {
//             headers.set("Authorization", `Bearer ${newAccessToken}`);
//             return headers;
//           },
//         })(args, api, extraOptions);
//       } else {
//         api.dispatch(clearTokens()); // Refresh token etibarsızdırsa, tokenləri silirik
//         // Burada istifadəçini login səhifəsinə yönləndirmək olar
//       }
//     } else {
//       api.dispatch(clearTokens()); // Refresh token yoxdursa, tokenləri silirik
//     }
//   }

//   return result;
// };
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Giriş funksiyası - burada API çağırışı edilir
export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await fetch("http://ec2-51-20-32-195.eu-north-1.compute.amazonaws.com:8081/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data);
    }

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Xəta baş verdi";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
