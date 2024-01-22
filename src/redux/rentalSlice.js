import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: {
    items: [],
    lastCount: 0,
    error: null,
    favorites: [],
    currentPage: 1,
    filter: {
      selectedBrand: null,
      // selectedPrice: null,
      // selectedFromMileage: null,
      // selectedToMileage: null,
    },
  },
};

const rentalSlice = createSlice({
  name: 'rentalCars',
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.cars.favorites = [...state.cars.favorites, payload];
    },
    deleteFavorites: (state, { payload }) => {
      state.cars.favorites = state.cars.favorites.filter(
        ({ id }) => id !== payload
      );
    },
    setCurrentPage: (state, { payload }) => {
      state.cars.currentPage = payload;
    },
    filter: (state, { payload }) => {
      state.cars.filter.selectedBrand = payload;
    },
    clearCarItems: (state) => {
      state.cars.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.items = [...state.cars.items, ...payload];
        state.cars.lastCount = payload.length;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.cars.error = payload;
      });
  },
});

export const {
  addFavorites,
  deleteFavorites,
  setCurrentPage,
  filter,
  clearCarItems,
} = rentalSlice.actions;
export const rentalReducer = rentalSlice.reducer;
