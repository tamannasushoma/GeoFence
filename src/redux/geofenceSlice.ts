import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Geofence {
  id: string;
  name:string;
//   coordinates: { latitude: number; longitude: number }[];
}

interface GeofenceState {
  savedMaps: Geofence[];
}

const initialState: GeofenceState = {
  savedMaps: [],
};

const mapSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    addMap: (state, action: PayloadAction<Geofence>) => {
      state.savedMaps.push(action.payload);
    },
  },
});

export const { addMap } = mapSlice.actions;
export default mapSlice.reducer;
