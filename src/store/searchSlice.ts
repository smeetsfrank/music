import { createSlice } from '@reduxjs/toolkit';

interface searchProps {
  filter: string[];
}

const initialState: searchProps = {
  filter: ['album', 'artist', 'playlist'],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    applyFilter(state, action) {
      state.filter = [action.payload];
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
