import { reducers } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { redirect } from 'next/navigation'

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: { extraArgument: { redirect } }, serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
