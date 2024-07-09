import { reducers } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { redirect } from 'next/navigation'
import { categoriesApi } from './categories/categories.api'

export const store = configureStore({
	reducer: { ...reducers, [categoriesApi.reducerPath]: categoriesApi.reducer },
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: { extraArgument: { redirect } }, serializableCheck: false }).concat(
			categoriesApi.middleware
		),
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
