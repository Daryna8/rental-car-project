import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../configAxios/api';

api.defaults.baseURL = 'https://65aacfe9081bd82e1d97d23d.mockapi.io/';

export const fetchCarsThunk = createAsyncThunk(
  'cars',
  async (filter, thunkAPI) => {
    const { page = 1, pageSize = 12, brand } = filter;
    try {
      const { data } = await api.get('cars', {
        params: {
          page,
          limit: pageSize,
          ...(brand !== null && { make: brand }),
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
