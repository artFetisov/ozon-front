import { reducers } from './reducers/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
