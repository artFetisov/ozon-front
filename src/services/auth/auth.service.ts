import instanceAuth, { instance } from '@/api/axios.instance'
import { getAuthUrl } from '@/configs/api.config'
import { IAuthResponse, ILoginByEmailResponse } from '@/types/user/user.types'
import { removeTokenStorage, saveToStorage } from '@/utils/token/token'
import Cookies from 'js-cookie'

export const AuthService = {
	async loginByEmail(email: string) {
		return instance.post<ILoginByEmailResponse>(getAuthUrl('login-by-email'), { email })
	},
	async loginByPhone(phone: string) {
		return instance.post(getAuthUrl('login-by-phone'), { phone })
	},
	async checkCodeByEmail({ email, code }: { email: string; code: string }) {
		const response = await instance.post<IAuthResponse>(getAuthUrl('check-code-by-email'), { email, code })

		if (response.data.tokens.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await instance.post<IAuthResponse>(
			getAuthUrl('get-new-tokens'),
			{
				refreshToken,
			},
			{
				headers: { 'Content-Type': 'application/json' },
			}
		)

		if (response.data.tokens.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async logout() {
		const refreshToken = Cookies.get('refreshToken')

		await instance.post(getAuthUrl('logout'), { refreshToken })

		removeTokenStorage()
	},
	async authMe() {
		const response = await instanceAuth.get<IAuthResponse>(getAuthUrl('me'))

		if (response.data.tokens.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
