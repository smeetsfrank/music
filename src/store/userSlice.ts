import { createSlice } from '@reduxjs/toolkit';

interface UserProps {
  authorized: boolean | undefined;
}

const initialState: UserProps = {
  authorized: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize(state) {
      state.authorized = !state.authorized;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
