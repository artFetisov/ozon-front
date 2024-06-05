import { instance } from '@/api/axios.instance'
import { getAuthUrl } from '@/configs/api.config'
import { IAuthResponse, ILoginByEmailResponse } from '@/types/user/user.types'
import { saveToStorage } from '@/utils/token/token'

export const AuthService = {
	async loginByEmail(email: string) {
		return instance.post<ILoginByEmailResponse>(getAuthUrl('login-by-email'), { email })
	},
	async checkCodeByEmail({ email, code }: { email: string; code: string }) {
		const response = await instance.post<IAuthResponse>(getAuthUrl('check-code-by-email'), { email, code })

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
