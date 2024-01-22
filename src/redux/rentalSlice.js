import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: {
    items: [],
    lastCount: 0,
    error: null,
    currentPage: 1,
  },
  favorites: [],
};

const rentalSlice = createSlice({
  name: 'rentalCars',
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites = [...state.favorites, payload];
    },
    deleteFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
    setCurrentPage: (state, { payload }) => {
      state.cars.currentPage = payload;
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

export const { addFavorites, deleteFavorites, setCurrentPage, clearCarItems } =
  rentalSlice.actions;
export const rentalReducer = rentalSlice.reducer;
