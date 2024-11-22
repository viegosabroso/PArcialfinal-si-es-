import {configureStore} from '@reduxjs/toolkit';
import Poemslice from './Slices/poems/Poemslice';

const store = configureStore({
    reducer: {
        poems: Poemslice
    }})

    // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;
