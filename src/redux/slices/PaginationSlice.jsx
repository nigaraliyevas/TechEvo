import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerPage: 15,
};

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = PaginationSlice.actions;
export default PaginationSlice.reducer;
