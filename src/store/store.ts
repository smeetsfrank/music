import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import searchReducer from './searchSlice';
import albumReducer from './albumSlice';
import artistReducer from './artistSlice';
import playlistReducer from './playlistSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    album: albumReducer,
    artist: artistReducer,
    playlist: playlistReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
