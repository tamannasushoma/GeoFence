import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './geofenceSlice';

const store = configureStore({
  reducer: {
    maps: mapReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
