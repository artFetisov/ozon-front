import { IFeedback, IFeedbackImage } from '@/types/feedback/feedback.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFeedbackState {
	selectedFeedback: IFeedback | null
	selectedFeedbackGalleryImage: IFeedbackImage | null
}

const initialState: IFeedbackState = {
	selectedFeedback: null,
	selectedFeedbackGalleryImage: null,
}

const categoriesSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {
		setSelectedFeedback(state, action: PayloadAction<IFeedback>) {
			state.selectedFeedback = action.payload
		},
		setSelectedFeedbackGalleryImage(state, action: PayloadAction<IFeedbackImage>) {
			state.selectedFeedbackGalleryImage = action.payload
		},
	},
})

export const { actions } = categoriesSlice

export const { reducer } = categoriesSlice
