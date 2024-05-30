import { IS_PRODUCTION } from '@/configs/constants'
import axios from 'axios'

export const instance = axios.create({
	baseURL: IS_PRODUCTION ? process.env.NEXT_PUBLIC_APP_SERVER_URL : process.env.NEXT_PUBLIC_APP_LOCAL_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
