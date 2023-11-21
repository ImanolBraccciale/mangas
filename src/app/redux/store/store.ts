import { configureStore } from '@reduxjs/toolkit'
import mangasSlice from "../features/mangas/mangasSlice"

const store = configureStore({
  reducer: {
    mangas: mangasSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store