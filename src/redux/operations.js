import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../configAxios/api';

api.defaults.baseURL = 'https://65aacfe9081bd82e1d97d23d.mockapi.io/';

export const fetchCarsThunk = createAsyncThunk(
  'cars',
  async ({ page = 1, pageSize = 12 }, thunkAPI) => {
    try {
      const { data } = await api.get('cars', {
        params: {
          page,
          limit: pageSize,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
