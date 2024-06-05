import { AuthService } from '@/services/auth/auth.service'
import { IAuthResponse, ILoginByEmailResponse } from '@/types/user/user.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppRootState } from '..'
import { AxiosError } from 'axios'

export const loginByEmail = createAsyncThunk<ILoginByEmailResponse, { email: string }>(
	'auth/login-by-email',
	async ({ email }, thunkApi) => {
		try {
			const response = await AuthService.loginByEmail(email)

			return response.data
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const checkCodeByEmail = createAsyncThunk<
	IAuthResponse,
	{ code: string },
	{ state: AppRootState; rejectValue: { message: string } }
>('auth/check-code-by-email', async ({ code }, thunkApi) => {
	try {
		const tempEmail = thunkApi.getState().user.tempEmail
		const response = await AuthService.checkCodeByEmail({ code, email: tempEmail as string })

		return response.data
	} catch (err) {
		let error: AxiosError<{ message: string }> = err as AxiosError<{ message: string }>
		if (!error.response) {
			throw err
		}

		return thunkApi.rejectWithValue(error.response.data)
	}
})
