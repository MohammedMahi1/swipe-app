import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlices/authSlice'
import userSlice from './reducers/userSlices/userSlice'
// ...
const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    user:userSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }),
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store