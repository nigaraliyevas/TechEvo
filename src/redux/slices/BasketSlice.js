import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorage = () => {
  let basket = localStorage.getItem("basket");
  if (basket) {
    return JSON.parse(basket);
  } else {
    return [];
  }
};

const fetchLocalCount = () => {
  let count = localStorage.getItem("count");
  if (count) {
    return JSON.parse(count);
  } else {
    return 0; 
  }
};

const storeLocalStorage = (data) => {
  return localStorage.setItem("basket", JSON.stringify(data));
};

const storeLocalCount = (count) => {
  return localStorage.setItem("count", JSON.stringify(count));
};

const calculateTotalPrice = (basket) => {
  return basket.reduce((total, item) => total + item.price * item.count, 0);
};

const initialState = {
  basket: fetchLocalStorage(),
  totalPrice: calculateTotalPrice(fetchLocalStorage()),
  count: fetchLocalCount()<0 ? 0: fetchLocalCount(), 
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
      state.count++;  
      state.totalPrice = calculateTotalPrice(state.basket);
      storeLocalStorage(state.basket);
      storeLocalCount(state.count);
    },
    removeCart: (state, action) => {
      const existsItem = state.basket.find((item) => item.id === action.payload);

      if (existsItem) {
        state.count -= existsItem.count;
        state.basket = state.basket.filter((item) => item.id !== action.payload);
      }
      state.totalPrice = calculateTotalPrice(state.basket);
      storeLocalStorage(state.basket);
      storeLocalCount(state.count);
    },
    incrementCount: (state, action) => {
      const existsItem = state.basket.find(
        (item) => item.id === action.payload
      );
      if (existsItem && existsItem.count > 1) {
        existsItem.count--;
        state.count--; 
        if (existsItem.count === 0) {
          state.basket = state.basket.filter((item) => item.id !== action.payload);
        }
      }
      state.totalPrice = calculateTotalPrice(state.basket);
      storeLocalStorage(state.basket);
      storeLocalCount(state.count);
    },
    decrimentCount: (state, action) => {
      const existsItem = state.basket.find(
        (item) => item.id === action.payload
      );
      if (existsItem) {
        existsItem.count++;
        state.count++;
        state.totalPrice = calculateTotalPrice(state.basket);
        storeLocalStorage(state.basket);
        storeLocalCount(state.count);
      }
    },
  },
});

export const { addToCart, removeCart, incrementCount, decrimentCount } = basketSlice.actions;
export default basketSlice.reducer;
