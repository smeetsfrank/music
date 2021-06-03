import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  artists: [],
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setArtists(state: any, action: any) {
      state.artists = action.payload.items;
    },
  },
});

export const artistAction = artistSlice.actions;
export default artistSlice.reducer;
