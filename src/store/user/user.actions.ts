import { AuthService } from '@/services/auth/auth.service'
import { IAuthResponse, ILoginByEmailResponse, IUser, IUserEditPersonalDataForm } from '@/types/user/user.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppRootState } from '..'
import { UserService } from '@/services/user/user.service'
import { handleCatchThunkError } from '@/utils/error/thunk.error'

export const loginByEmail = createAsyncThunk<ILoginByEmailResponse, { email: string }>(
	'auth/login-by-email',
	async ({ email }, thunkApi) => {
		try {
			const response = await AuthService.loginByEmail(email)

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const authMe = createAsyncThunk<IAuthResponse>('auth/me', async (_, thunkApi) => {
	try {
		const response = await AuthService.authMe()

		return response.data
	} catch (error) {
		return thunkApi.rejectWithValue(error)
	}
})

export const checkCodeByEmail = createAsyncThunk<IAuthResponse, { code: string }, { state: AppRootState }>(
	'auth/check-code-by-email',
	async ({ code }, thunkApi) => {
		try {
			const tempEmail = thunkApi.getState().user.tempEmail
			const response = await AuthService.checkCodeByEmail({ code, email: tempEmail as string })

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updatePersonalUserData = createAsyncThunk<IUser, IUserEditPersonalDataForm>(
	'user/update-personal-data',
	async (data, thunkApi) => {
		try {
			const response = await UserService.updatePersonalUserData(data)

			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const updatePhoneNumber = createAsyncThunk<IUser, { phone: string }>(
	'user/update-phone-number',
	async ({ phone }, thunkApi) => {
		try {
			const response = await UserService.updatePhoneNumber(phone)

			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const updateEmail = createAsyncThunk<IUser, { email: string }>(
	'user/update-email',
	async ({ email }, thunkApi) => {
		try {
			const response = await UserService.updateEmail(email)

			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
