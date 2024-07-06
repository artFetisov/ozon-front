import instanceAuth from '@/api/axios.instance'
import { getUserUrl } from '@/configs/api.config'
import { IUpdatePhoneCheckCodeRequest, IUser, IUserEditPersonalDataForm } from '@/types/user/user.types'

export const UserService = {
	async updatePersonalUserData(data: IUserEditPersonalDataForm) {
		return instanceAuth.put<IUser>(getUserUrl('update-personal-data'), data)
	},
	async updatePhoneNumber(data: { phone: string; email: string }) {
		return instanceAuth.put<{ phone: string }>(getUserUrl('update-phone'), data)
	},
	async updatePhoneCheckCode(data: IUpdatePhoneCheckCodeRequest) {
		return instanceAuth.put<IUser>(getUserUrl('update-phone-check-code'), data)
	},
	async updateEmail(email: string) {
		return instanceAuth.put<{ email: string }>(getUserUrl('update-email'), { email })
	},
	async updateEmailCheckCode(data: { email: string; code: string }) {
		return instanceAuth.put<IUser>(getUserUrl('update-email-check-code'), data)
	},
}
