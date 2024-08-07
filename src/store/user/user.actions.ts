import { AuthService } from '@/services/auth/auth.service'
import {
	IAuthResponse,
	ILoginByEmailResponse,
	IUpdateAvatarResponse,
	IUser,
	IUserEditPersonalDataForm,
} from '@/types/user/user.types'
import { UserService } from '@/services/user/user.service'
import { handleCatchThunkError } from '@/utils/error/thunk.error'
import { setIsShowToastr } from '../app/app.slice'
import { FileService } from '@/services/file/file.service'
import { createAppAsyncThunk } from '../createAppAsyncThunk'

export const loginByEmail = createAppAsyncThunk<ILoginByEmailResponse, { email: string }>(
	'auth/login-by-email',
	async ({ email }, thunkApi) => {
		try {
			const response = await AuthService.loginByEmail(email)

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const loginByPhone = createAppAsyncThunk<ILoginByEmailResponse, { phone: string }>(
	'auth/login-by-phone',
	async ({ phone }, thunkApi) => {
		try {
			const response = await AuthService.loginByPhone(phone)

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data || '')
		}
	}
)

export const authMe = createAppAsyncThunk<IAuthResponse>('auth/me', async (_, thunkApi) => {
	try {
		const response = await AuthService.authMe()

		return response.data
	} catch (error) {
		return thunkApi.rejectWithValue(error)
	}
})

export const logout = createAppAsyncThunk<void, { redirect: () => void }>(
	'auth/logout',
	async ({ redirect }, thunkApi) => {
		try {
			await AuthService.logout()

			redirect()
			thunkApi.dispatch(setIsShowToastr({ bool: true, text: 'Вы вышли из своего аккаунта' }))
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const checkCodeByEmail = createAppAsyncThunk<IAuthResponse, { code: string }>(
	'auth/check-code-by-email',
	async ({ code }, thunkApi) => {
		try {
			const tempEmail = thunkApi.getState().user.tempEmail
			const response = await AuthService.checkCodeByEmail({ code, email: tempEmail as string })

			thunkApi.dispatch(setIsShowToastr({ bool: true, text: 'Вы вошли в свой аккаунт' }))

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updateAvatar = createAppAsyncThunk<IUpdateAvatarResponse, { file: FormData }>(
	'user/update-avatar',
	async (data, thunkApi) => {
		try {
			const response = await FileService.uploadUserPhoto(data.file)

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updatePersonalUserData = createAppAsyncThunk<IUser, IUserEditPersonalDataForm>(
	'user/update-personal-data',
	async (data, thunkApi) => {
		try {
			const response = await UserService.updatePersonalUserData(data)

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updatePhoneNumber = createAppAsyncThunk<{ phone: string }, { phone: string }>(
	'user/update-phone-number',
	async ({ phone }, thunkApi) => {
		try {
			const email = thunkApi.getState().user.userData?.email as string
			const response = await UserService.updatePhoneNumber({ phone, email })

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updatePhoneCheckCode = createAppAsyncThunk<IUser, { code: string }>(
	'user/update-phone-check-code',
	async ({ code }, thunkApi) => {
		try {
			const email = thunkApi.getState().user.userData?.email as string
			const tempPhone = thunkApi.getState().user.tempPhone
			const response = await UserService.updatePhoneCheckCode({
				code,
				email: email as string,
				phone: tempPhone as string,
			})

			thunkApi.dispatch(setIsShowToastr({ bool: true, text: 'Номер телефона изменен' }))

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updateEmail = createAppAsyncThunk<{ email: string }, { newEmail: string }>(
	'user/update-email',
	async ({ newEmail }, thunkApi) => {
		try {
			const response = await UserService.updateEmail(newEmail)

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)

export const updateEmailCheckCode = createAppAsyncThunk<IUser, { code: string }>(
	'user/update-email-check-code',
	async ({ code }, thunkApi) => {
		try {
			const tempEmail = thunkApi.getState().user.tempEmail
			const response = await UserService.updateEmailCheckCode({ code, email: tempEmail as string })

			return response.data
		} catch (err) {
			const error = handleCatchThunkError(err, thunkApi.dispatch)

			return thunkApi.rejectWithValue(error?.response?.data)
		}
	}
)
