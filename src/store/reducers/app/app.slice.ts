import { ICartItem } from '@/types/cart/cart.types'
import { IProduct } from '@/types/product/product.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
	isShowCategoriesList: boolean
}

const initialState: IAppState = {
	isShowCategoriesList: false,
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsShowCategoriesList(state, action: PayloadAction<boolean>) {
			state.isShowCategoriesList = action.payload
		},
	},
})

export const { actions } = appSlice

export const { reducer } = appSlice
