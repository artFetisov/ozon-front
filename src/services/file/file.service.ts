import instanceAuth from '@/api/axios.instance'
import { IUpdateAvatarResponse } from '@/types/user/user.types'

export const FileService = {
	async uploadUserPhoto(file: FormData) {
		return instanceAuth.post<IUpdateAvatarResponse>('files/user-photo', file, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	},
}
