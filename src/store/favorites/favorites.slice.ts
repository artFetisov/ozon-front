import { ICartItem } from '@/types/cart/cart.types'
import { IProduct } from '@/types/product/product.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFavoritesState {
	favoritesProducts: (IProduct | ICartItem)[]
}

const initialState: IFavoritesState = {
	favoritesProducts: [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavoritesProducts(state, action: PayloadAction<IProduct[] | ICartItem[]>) {
			state.favoritesProducts = action.payload
		},
		addFavoritesProduct(state, action: PayloadAction<IProduct | ICartItem>) {
			state.favoritesProducts.unshift(action.payload)
		},
		deleteFavoritesProduct(state, action: PayloadAction<{ id: number }>) {
			state.favoritesProducts = state.favoritesProducts.filter((p) => p.id !== action.payload.id)
		},
	},
})

export const { actions } = favoritesSlice

export const { reducer } = favoritesSlice
