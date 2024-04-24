import { IUser } from '@/types/user/user.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
	user: IUser | null
	isAuth: boolean
}

const initialState: IUserState = {
	user: null,
	isAuth: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
	},
})

export const { actions } = userSlice

export const { reducer } = userSlice
