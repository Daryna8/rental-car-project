import { configureStore } from '@reduxjs/toolkit';
import { rentalReducer } from './rentalSlice';

export const store = configureStore({
  reducer: rentalReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== 'production',
});
