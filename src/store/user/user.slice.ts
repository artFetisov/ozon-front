import { IUser } from '@/types/user/user.types'
import { createSlice } from '@reduxjs/toolkit'
import { checkCodeByEmail, loginByEmail } from './user.actions'

interface IUserState {
	userData: IUser | null
	isLoggedIn: boolean
	isLoading: boolean
	isNewUser: boolean
	tempEmail: string | null
	asyncError: string
}

const initialState: IUserState = {
	userData: null,
	isLoggedIn: false,
	isLoading: false,
	isNewUser: true,
	tempEmail: null,
	asyncError: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearAsyncError(state) {
			state.asyncError = ''
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByEmail.pending, (state) => {
				state.asyncError = ''
				state.isLoading = true
			})
			.addCase(loginByEmail.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.tempEmail = payload.email
				state.isNewUser = payload.isNewUser
			})
			.addCase(loginByEmail.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(checkCodeByEmail.pending, (state) => {
				state.asyncError = ''
				state.isLoading = true
			})
			.addCase(checkCodeByEmail.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.userData = payload.user
				state.isLoggedIn = true
			})
			.addCase(checkCodeByEmail.rejected, (state, action) => {
				if (action.payload) {
					state.asyncError = action.payload.message
				} else {
					state.asyncError = action.error.message as string
				}

				state.isLoading = false
			})
	},
})

export const { actions } = userSlice

export const { reducer } = userSlice
