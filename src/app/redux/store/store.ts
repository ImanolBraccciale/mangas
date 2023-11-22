import { configureStore } from '@reduxjs/toolkit'
import mangasSlice from "../features/mangas/mangasSlice"
import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    mangas: mangasSlice,
    user: userSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store