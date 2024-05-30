import axios from 'axios'

export const axiosInstance = axios.create({
	// baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
