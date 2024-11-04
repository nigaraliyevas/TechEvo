import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;







// favoritesSlice.js
// import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // API ilə əlaqə üçün createApi yaratmaq
// export const favoritesApi = createApi({
//   reducerPath: "favoritesApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/api", // Əsas URL-i uyğunlaşdırın
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().favorites.accessToken;
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     addFavorite: builder.mutation({
//       query: (productId) => ({
//         url: `/favorites`,
//         method: "POST",
//         body: { productId },
//       }),
//     }),
//     getFavorites: builder.query({
//       query: () => `/favorites`,
//     }),
//   }),
// });

// export const { useAddFavoriteMutation, useGetFavoritesQuery } = favoritesApi;

// // Slice yaratmaq
// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState: {
//     accessToken: null,
//   },
//   reducers: {

//     setAccessToken: (state, action) => {
//       state.accessToken = action.payload;
//     },
//   },
// });

// export const { setAccessToken } = favoritesSlice.actions;
// export default favoritesSlice.reducer;
