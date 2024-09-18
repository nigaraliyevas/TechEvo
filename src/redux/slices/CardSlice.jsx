import { createSlice } from '@reduxjs/toolkit';
import { cards } from "../../DataHome";

const initialState = {
  cards: cards, // This holds your card data
}

export const CardSlice = createSlice({
  name: 'pcCard',
  initialState,
  reducers: {
    allCards: (state) => {
      // No state modification needed right now
      return state;
    },
  },
});

export const { allCards } = CardSlice.actions;

export default CardSlice.reducer;
