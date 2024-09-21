// src/redux/slices/filterSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { cards } from '../../DataHome';

const initialState = {
  selectedCategories: [],
  selectedBrands: [],
  selectedProcessors: [],
  selectedVideoCards: [],
  selectedRAMs: [],
  selectedMemoryTypes: [],
  priceRange: [200, 10000],
  filteredProducts: cards,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(cat => cat !== category);
      } else {
        state.selectedCategories.push(category);
      }
     state.filteredProducts = updateFilteredProducts(state);
    },
    toggleBrand: (state, action) => {
      const brand = action.payload;
      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter(b => b !== brand);
      } else {
        state.selectedBrands.push(brand);
      }
    state.filteredProducts = updateFilteredProducts(state);
    },
    toggleProcessor: (state, action) => {
      const processor = action.payload;
      if (state.selectedProcessors.includes(processor)) {
        state.selectedProcessors = state.selectedProcessors.filter(p => p !== processor);
      } else {
        state.selectedProcessors.push(processor);
      }
       state.filteredProducts = updateFilteredProducts(state);
    },
    toggleVideoCard: (state, action) => {
      const videoCard = action.payload;
      if (state.selectedVideoCards.includes(videoCard)) {
        state.selectedVideoCards = state.selectedVideoCards.filter(v => v !== videoCard);
      } else {
        state.selectedVideoCards.push(videoCard);
      }
     state.filteredProducts = updateFilteredProducts(state);
    },
    toggleRAM: (state, action) => {
      const ram = action.payload;
      if (state.selectedRAMs.includes(ram)) {
        state.selectedRAMs = state.selectedRAMs.filter(r => r !== ram);
      } else {
        state.selectedRAMs.push(ram);
      }
       state.filteredProducts = updateFilteredProducts(state);
    },
    toggleMemoryType: (state, action) => {
      const memoryType = action.payload;
      if (state.selectedMemoryTypes.includes(memoryType)) {
        state.selectedMemoryTypes = state.selectedMemoryTypes.filter(m => m !== memoryType);
      } else {
        state.selectedMemoryTypes.push(memoryType);
      }
      state.filteredProducts = updateFilteredProducts(state);
    },
    setPriceRange: (state, action) => {
        state.priceRange = action.payload;
        state.filteredProducts = updateFilteredProducts(state);
      },
    clearFilters: (state) => {
      state.selectedCategories = [];
      state.selectedBrands = [];
      state.selectedProcessors = [];
      state.selectedVideoCards = [];
      state.selectedRAMs = [];
      state.selectedMemoryTypes = [];
      state.priceRange = [200, 10000];
      state.filteredProducts = cards;
    },
  },
});

const updateFilteredProducts = (state) => {
    return cards.filter(card => {
        const withinPriceRange = card.price >= state.priceRange[0] && card.price <= state.priceRange[1];
        const matchesCategory = state.selectedCategories.length === 0 || state.selectedCategories.includes(card.category);
        const matchesBrand = state.selectedBrands.length === 0 || state.selectedBrands.includes(card.brend);
        const matchesProcessor = state.selectedProcessors.length === 0 || state.selectedProcessors.includes(card.prosessor);
        const matchesVideoCard = state.selectedVideoCards.length === 0 || state.selectedVideoCards.includes(card.videocard);
        const matchesRAM = state.selectedRAMs.length === 0 || state.selectedRAMs.includes(card.ram);
        const matchesMemoryType = state.selectedMemoryTypes.length === 0 || state.selectedMemoryTypes.includes(card.memorytype);
        
        return withinPriceRange && matchesCategory && matchesBrand && matchesProcessor && matchesVideoCard && matchesRAM && matchesMemoryType;
  });
};

export const { toggleCategory, toggleBrand, toggleProcessor, toggleVideoCard, toggleRAM, toggleMemoryType,setPriceRange, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
