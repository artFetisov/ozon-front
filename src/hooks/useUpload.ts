import { ChangeEvent } from 'react'
import { useActions } from './useActions'

export const useUploadAvatar = () => {
	const { updateAvatar } = useActions()

	const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files

		if (files?.length) {
			const formData = new FormData()
			formData.append('image', files[0])

			await updateAvatar({ file: formData })
		}
	}

	return { handleUploadImage }
}
