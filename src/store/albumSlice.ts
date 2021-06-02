import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albums: [],
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setAlbums(state: any, action: any) {
      state.albums = action.payload.items;
    },
  },
});

export const albumAction = albumSlice.actions;
export default albumSlice.reducer;
