import { createSlice } from '@reduxjs/toolkit';

interface UserProps {
  authorized: boolean | undefined;
  token: string | undefined;
}

const initialState: UserProps = {
  authorized: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorize(state, action) {
      state.authorized = !state.authorized;
      state.token = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
