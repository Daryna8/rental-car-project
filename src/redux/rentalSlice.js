import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const rentalSlice = createSlice({
  name: 'rentalCars',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.items = [...state.cars.items, ...payload];
        state.loading = false;
      })
      .addCase(fetchCarsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const rentalReducer = rentalSlice.reducer;
