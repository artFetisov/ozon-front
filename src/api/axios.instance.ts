import { IS_PRODUCTION } from '@/configs/constants'
import { AuthService } from '@/services/auth/auth.service'
import { errorInterceptorCatch } from '@/utils/error/interceptor.error'
import { removeTokenStorage } from '@/utils/token/token'
import axios from 'axios'
import Cookies from 'js-cookie'

export const baseURL = IS_PRODUCTION
	? process.env.NEXT_PUBLIC_APP_SERVER_URL
	: process.env.NEXT_PUBLIC_APP_LOCAL_SERVER_URL

export const instance = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

const instanceAuth = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instanceAuth.interceptors.request.use(
	(config) => {
		const accessToken = Cookies.get('accessToken')
		if (config.headers && accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

instanceAuth.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (
			(error.response.status === 401 ||
				errorInterceptorCatch(error) === 'jwt expired' ||
				errorInterceptorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()

				return instanceAuth.request(originalRequest)
			} catch (error: any) {
				if (errorInterceptorCatch(error) === 'jwt expired' || error.response.status === 500) {
					removeTokenStorage()
				}
			}
		}
	}
)

export default instanceAuth
