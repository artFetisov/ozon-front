import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FC } from 'react'

interface IAppState {
	isShowCategoriesList: boolean
	isInitialized: boolean
	isShowBanner: boolean
	BannerContent: null | (() => JSX.Element)
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
		setBannerContent(state, action: PayloadAction<() => JSX.Element>) {
			state.BannerContent = action.payload
		},
	},
})

export const { actions } = appSlice

export const { setIsShowBanner, setBannerContent } = appSlice.actions

export const { reducer } = appSlice
