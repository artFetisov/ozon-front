import { ICartItem } from '@/types/cart/cart.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICartState {
	cartItems: ICartItem[]
	selectedItems: ICartItem[]
	isSelectedAll: boolean
}

const initialState: ICartState = {
	cartItems: [],
	selectedItems: [],
	isSelectedAll: false,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCartItems(state, action: PayloadAction<ICartItem[]>) {
			state.cartItems = action.payload
		},
		deleteCartItem(state, action: PayloadAction<{ id: number }>) {
			state.cartItems = state.cartItems.filter((c) => c.id !== action.payload.id)
			state.selectedItems = state.cartItems.filter((c) => c.checked)
		},
		updateCartItem(state, action: PayloadAction<{ id: number; checked: boolean }>) {
			state.cartItems = state.cartItems.map((c) => (c.id === action.payload.id ? { ...c, checked: action.payload.checked } : c))
			state.selectedItems = state.cartItems.filter((c) => c.checked)
		},
		updateAmountCartItem(state, action: PayloadAction<{ id: number; amount: number }>) {
			state.cartItems = state.cartItems.map((c) => (c.id === action.payload.id ? { ...c, amount: action.payload.amount } : c))
			state.selectedItems = state.cartItems.filter((c) => c.checked)
		},
		selectAllCartItems(state) {
			state.isSelectedAll = !state.isSelectedAll
			state.cartItems = state.cartItems.map((c) => ({ ...c, checked: state.isSelectedAll }))
			state.selectedItems = state.cartItems.filter((c) => c.checked)
		},
		deleteSelectedCartItems(state) {
			state.cartItems = state.cartItems.filter((c) => !c.checked)
			state.selectedItems = []
		},
		setSelectedCartItems(state, action: PayloadAction<ICartItem[]>) {
			state.selectedItems = action.payload
		},
	},
})

export const { actions } = cartSlice

export const { reducer } = cartSlice
