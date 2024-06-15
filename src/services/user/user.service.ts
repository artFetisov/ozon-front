import instanceAuth from '@/api/axios.instance'
import { getUserUrl } from '@/configs/api.config'
import { IUser, IUserEditPersonalDataForm } from '@/types/user/user.types'

export const UserService = {
	async updatePersonalUserData(data: IUserEditPersonalDataForm) {
		return await instanceAuth.put<IUser>(getUserUrl('update-personal-data'))
	},
}
