import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylist(state: any, action: any) {
      state.playlists = action.payload.items;
    },
  },
});

export const playlistAction = playlistSlice.actions;
export default playlistSlice.reducer;
