import instanceAuth from '@/api/axios.instance'
import { getUserUrl } from '@/configs/api.config'
import { IUser, IUserEditPersonalDataForm } from '@/types/user/user.types'

export const UserService = {
	async updatePersonalUserData(data: IUserEditPersonalDataForm) {
		return instanceAuth.put<IUser>(getUserUrl('update-personal-data'), { rg: 'sd' })
	},
	async updatePhoneNumber(phone: string) {
		return instanceAuth.put<IUser>(getUserUrl('update-phone'), { phone })
	},
	async updateEmail(email: string) {
		return instanceAuth.put<IUser>(getUserUrl('update-email'), { email })
	},
}
