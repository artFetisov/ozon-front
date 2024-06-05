import { IAuthResponse } from '@/types/user/user.types'
import Cookies from 'js-cookie'

const saveTokenStorage = (data: IAuthResponse) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokenStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokenStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
