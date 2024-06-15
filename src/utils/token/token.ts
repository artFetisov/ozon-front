import { IAuthResponse } from '@/types/user/user.types'
import Cookies from 'js-cookie'

const saveTokenStorage = (data: IAuthResponse) => {
	Cookies.set('accessToken', data.tokens.accessToken)
	Cookies.set('refreshToken', data.tokens.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data)
}

export const removeTokenStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
