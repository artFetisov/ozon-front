import { baseURL } from '@/api/axios.instance'
import { getCategoryUrl } from '@/configs/api.config'
import { ICategoryResponse } from '@/types/category/category.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseURL,
	}),
	endpoints: (build) => {
		return {
			getCategories: build.query<ICategoryResponse[], void>({
				query: () => {
					return {
						method: 'GET',
						url: getCategoryUrl(),
					}
				},
			}),
		}
	},
})

export const { useGetCategoriesQuery } = categoriesApi
