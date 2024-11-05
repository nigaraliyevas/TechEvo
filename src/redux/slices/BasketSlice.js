import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorage = () => {
  let basket = localStorage.getItem("basket");
  if (basket) {
    return JSON.parse(basket);
  } else {
    return [];
  }
};

const storeLocalStorage = (data) => {
  return localStorage.setItem("basket", JSON.stringify(data));
};

const calculateTotalPrice = (basket) => {
  return basket.reduce((total, item) => total + item.price * item.count, 0);
};
const initialState = {
  basket: fetchLocalStorage(),
  totalPrice: calculateTotalPrice(fetchLocalStorage()),
};

const basketSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existsItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (existsItem) {
        existsItem.count++;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.basket);
      storeLocalStorage(state.basket);
    },
    removeCart: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
      storeLocalStorage(state.basket);
      state.totalPrice = calculateTotalPrice(state.basket);
    },
    decrimentCount: (state, action) => {
      const existsItem = state.basket.find(
        (item) => item.id === action.payload
      );

      if (existsItem) {
        existsItem.count++;
        state.totalPrice = calculateTotalPrice(state.basket);
        storeLocalStorage(state.basket);
      }
    },
    incrementCount: (state, action) => {
      const existsItem = state.basket.find(
        (item) => item.id === action.payload
      );
      if (existsItem) {
        if (existsItem.count > 1) {
          existsItem.count--;
        } else if(existsItem.count > 1) {
          state.basket = state.basket.filter(
            (item) => item.id !== action.payload
          );
        }
        state.totalPrice = calculateTotalPrice(state.basket);
        storeLocalStorage(state.basket);
      }
    },
  },
});

export const { addToCart, removeCart, incrementCount, decrimentCount } =
  basketSlice.actions;
export default basketSlice.reducer;
