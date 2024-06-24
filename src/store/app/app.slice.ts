import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
	isShowCategoriesList: boolean
	isInitialized: boolean
}

const initialState: IAppState = {
	isShowCategoriesList: false,
	isInitialized: false,
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsShowCategoriesList(state, action: PayloadAction<boolean>) {
			state.isShowCategoriesList = action.payload
		},
		setIsInitialized(state, action: PayloadAction<boolean>) {
			state.isInitialized = action.payload
		},
	},
})

export const { actions } = appSlice

export const { reducer } = appSlice
