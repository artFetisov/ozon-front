import { setBannerContent, setIsShowBanner } from '@/store/app/app.slice'
import { AxiosError } from 'axios'
import { AppDispatch } from '@/store'

export const handleCatchThunkError = (err: any, dispatch: AppDispatch) => {
	let error: AxiosError<{ message: string }> = err as AxiosError<{ message: string }>

	if (!error.response) {
		dispatch(setBannerContent('network'))
		dispatch(setIsShowBanner(true))

		throw error
	}

	return error
}

export const checkIsNetworkError = (error: Error | AxiosError) => {
	return error.message === 'Network Error'
}
