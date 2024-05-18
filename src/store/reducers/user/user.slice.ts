import { currentAuthUser } from '@/mock/user'
import { IUser } from '@/types/user/user.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
	userData: IUser | null
	isAuth: boolean
}

const initialState: IUserState = {
	userData: currentAuthUser,
	isAuth: true,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state, action: PayloadAction<IUser>) {
			state.userData = action.payload
		},
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
	},
})

export const { actions } = userSlice

export const { reducer } = userSlice
