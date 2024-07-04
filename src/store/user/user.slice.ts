import { IUser } from '@/types/user/user.types'
import { createSlice } from '@reduxjs/toolkit'
import {
	authMe,
	checkCodeByEmail,
	loginByEmail,
	loginByPhone,
	updateAvatar,
	updatePersonalUserData,
} from './user.actions'

interface IUserState {
	userData: IUser | null
	isLoggedIn: boolean
	isLoading: boolean
	isNewUser: boolean
	tempEmail: string | null
}

const initialState: IUserState = {
	userData: null,
	isLoggedIn: true,
	isLoading: false,
	isNewUser: true,
	tempEmail: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginByEmail.pending, (state) => {
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
			.addCase(loginByPhone.pending, (state) => {
				state.isLoading = true
			})
			.addCase(loginByPhone.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.tempEmail = payload.email
				state.isNewUser = payload.isNewUser
			})
			.addCase(loginByPhone.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(checkCodeByEmail.pending, (state) => {
				state.isLoading = true
			})
			.addCase(checkCodeByEmail.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.userData = payload.user
				state.isLoggedIn = true
			})
			.addCase(checkCodeByEmail.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(authMe.pending, (state) => {
				state.isLoading = true
			})
			.addCase(authMe.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.userData = payload.user
				state.isLoggedIn = true
			})
			.addCase(authMe.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(updatePersonalUserData.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updatePersonalUserData.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.userData = payload
			})
			.addCase(updatePersonalUserData.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(updateAvatar.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateAvatar.fulfilled, (state, { payload }) => {
				state.isLoading = false
				if (state.userData !== null) {
					state.userData.avatar = payload.avatar
				}
			})
			.addCase(updateAvatar.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { actions } = userSlice

export const { reducer } = userSlice
