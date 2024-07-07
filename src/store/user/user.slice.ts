import { IUser } from '@/types/user/user.types'
import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import {
	authMe,
	checkCodeByEmail,
	loginByEmail,
	loginByPhone,
	logout,
	updateAvatar,
	updateEmail,
	updateEmailCheckCode,
	updatePersonalUserData,
	updatePhoneCheckCode,
	updatePhoneNumber,
} from './user.actions'

interface IUserState {
	userData: IUser | null
	isLoggedIn: boolean
	isLoading: boolean
	isNewUser: boolean
	tempEmail: string | null
	tempPhone: string | null
}

const initialState: IUserState = {
	userData: null,
	isLoggedIn: true,
	isLoading: false,
	isNewUser: true,
	tempEmail: null,
	tempPhone: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginByEmail.fulfilled, (state, { payload }) => {
				state.tempEmail = payload.email
				state.isNewUser = payload.isNewUser
			})
			.addCase(loginByPhone.fulfilled, (state, { payload }) => {
				state.tempEmail = payload.email
				state.isNewUser = payload.isNewUser
			})
			.addCase(checkCodeByEmail.fulfilled, (state, { payload }) => {
				state.userData = payload.user
				state.isLoggedIn = true
			})
			.addCase(authMe.fulfilled, (state, { payload }) => {
				state.userData = payload.user
				state.isLoggedIn = true
			})
			.addCase(updatePersonalUserData.fulfilled, (state, { payload }) => {
				state.userData = payload
			})
			.addCase(updateAvatar.fulfilled, (state, { payload }) => {
				if (state.userData !== null) {
					state.userData.avatar = payload.avatar
				}
			})
			.addCase(updatePhoneNumber.fulfilled, (state, { payload }) => {
				state.tempPhone = payload.phone
			})
			.addCase(updatePhoneCheckCode.fulfilled, (state, { payload }) => {
				state.userData = payload
			})
			.addCase(updateEmail.fulfilled, (state, { payload }) => {
				state.tempEmail = payload.email
			})
			.addCase(updateEmailCheckCode.fulfilled, (state, { payload }) => {
				state.userData = payload
			})
			.addCase(logout.fulfilled, (state) => {
				state.userData = null
				state.isLoggedIn = false
			})
			.addMatcher(isPending, (state) => {
				state.isLoading = true
			})
			.addMatcher(isRejected, (state) => {
				state.isLoading = false
			})
			.addMatcher(isFulfilled, (state) => {
				state.isLoading = false
			})
	},
})

export const { actions } = userSlice

export const { reducer } = userSlice
