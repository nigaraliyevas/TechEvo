import { createSlice } from "@reduxjs/toolkit";

const fetchLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeLocalStorage = (data) => {
  return localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
<<<<<<< HEAD
  cart: fetchLocalStorage(), // Düzgün çağırmaq üçün () əlavə etdik
=======
  cart: fetchLocalStorage(), 
>>>>>>> upstream/murad
  count: 0,
};

const basketSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existsItem = state.cart.find((item) => item.id === action.payload.id);
      if (existsItem) {
<<<<<<< HEAD
        existsItem.count++; // Sayğacı artırırıq
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.count += 1; // Düzgün artırma
      storeLocalStorage(state.cart); // LocalStorage-də saxlayırıq
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload); // Düzgün filtr
      storeLocalStorage(state.cart); // LocalStorage-də saxlayırıq
      state.count -= 1; // Düzgün azaltma
=======
        existsItem.count++; 
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.count += 1; 
      storeLocalStorage(state.cart); 
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      storeLocalStorage(state.cart); 
      state.count -= 1; 
>>>>>>> upstream/murad
    },
  },
});

export const { addToCart, removeCart } = basketSlice.actions;
export default basketSlice.reducer;
