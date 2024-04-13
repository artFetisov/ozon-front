import { IUser } from '@/types/user/user.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
	user: IUser | null
}

const initialState: IUserState = {
	user: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
	},
})

export const { actions } = userSlice

export const { reducer } = userSlice
