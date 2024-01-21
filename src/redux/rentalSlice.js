import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  cars: {
    items: [],
    lastCount: 0,
    error: null,
  },
};

const rentalSlice = createSlice({
  name: 'rentalCars',
  initialState,
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

export const rentalReducer = rentalSlice.reducer;
