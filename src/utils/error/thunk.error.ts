import { AxiosError } from 'axios'

export const handleCatchThunkError = (err: any) => {
	let error: AxiosError<{ message: string }> = err as AxiosError<{ message: string }>

	if (!error.response) {
		throw err
	}

	return error
}
