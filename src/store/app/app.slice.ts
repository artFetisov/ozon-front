import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface IAppState {
	isShowCategoriesList: boolean
	isInitialized: boolean
	isShowBanner: boolean
	BannerContent: ReactNode | null
}

const initialState: IAppState = {
	isShowCategoriesList: false,
	isInitialized: false,
	isShowBanner: false,
	BannerContent: null,
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
		setIsShowBanner(state, action: PayloadAction<boolean>) {
			state.isShowBanner = action.payload
		},
		setBannerContent(state, action: PayloadAction<ReactNode>) {
			state.BannerContent = action.payload
		},
	},
})

export const { actions } = appSlice

export const { reducer } = appSlice
