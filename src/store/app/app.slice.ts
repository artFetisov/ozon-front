import { NoticeBannerChildrenType } from '@/types/app/app.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authMe } from '../user/user.actions'

interface IAppState {
	isShowCategoriesList: boolean
	isInitialized: boolean
	isShowBanner: boolean
	bannerContent: NoticeBannerChildrenType
	isShowToastr: boolean
	toastrText: string
}

const initialState: IAppState = {
	isShowCategoriesList: false,
	isInitialized: false,
	isShowBanner: true,
	bannerContent: 'cookie',
	isShowToastr: false,
	toastrText: 'Вы вошли в свой аккаунт.',
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
		setBannerContent(state, action: PayloadAction<NoticeBannerChildrenType>) {
			state.bannerContent = action.payload
		},
		setIsShowToastr(state, action: PayloadAction<{ bool: boolean; text: string }>) {
			state.isShowToastr = action.payload.bool
			state.toastrText = action.payload.text
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authMe.fulfilled, (state) => {
				state.isInitialized = true
			})
			.addCase(authMe.rejected, (state) => {
				state.isInitialized = true
			})
	},
})

export const { actions } = appSlice

export const { setIsShowBanner, setBannerContent, setIsShowToastr, setIsInitialized } = appSlice.actions

export const { reducer } = appSlice
