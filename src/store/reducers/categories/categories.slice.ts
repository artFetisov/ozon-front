import { ICategory, ISubCategories } from '@/types/category/category.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICategoriesState {
	categories: ICategory[]
	activeCategory: ICategory | null
	subCategories: ISubCategories
	subSubCategories: ISubCategories
}

const initialState: ICategoriesState = {
	categories: [],
	activeCategory: null,
	subCategories: [],
	subSubCategories: [],
}

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<ICategory[]>) {
			state.categories = action.payload
			state.activeCategory = state.categories[0]
		},
		setSubCategories(state, action: PayloadAction<ISubCategories>) {
			state.subCategories = action.payload
		},
		setSubSubCategories(state, action: PayloadAction<ISubCategories>) {
			state.subSubCategories = action.payload
		},
		setActiveCategory(state, action: PayloadAction<ICategory>) {
			state.activeCategory = action.payload
		},
	},
})

export const { actions } = categoriesSlice

export const { reducer } = categoriesSlice
