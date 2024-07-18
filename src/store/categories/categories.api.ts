import { baseURL } from '@/api/axios.instance'
import { getCategoryUrl } from '@/configs/api.config'
import { ICategory, ICategoryResponse, IUpdateCategoryRequest } from '@/types/category/category.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: baseURL,
	}),
	tagTypes: ['Category'],
	endpoints: (build) => {
		return {
			getCategories: build.query<ICategoryResponse[], void>({
				query: () => {
					return {
						method: 'GET',
						url: getCategoryUrl(),
					}
				},
				providesTags: ['Category'],
			}),
			getCategoryById: build.query<ICategoryResponse, number>({
				query: (id: number) => {
					return {
						method: 'GET',
						url: getCategoryUrl(`${id}`),
					}
				},
				providesTags: ['Category'],
			}),
			deleteCategory: build.mutation<ICategory, number>({
				query: (id) => {
					return {
						method: 'DELETE',
						url: getCategoryUrl(`${id}`),
					}
				},
				invalidatesTags: ['Category'],
			}),
			updateCategory: build.mutation<ICategory, IUpdateCategoryRequest>({
				query: ({ id, data }) => {
					return {
						method: 'PUT',
						url: getCategoryUrl(`${id}`),
						body: data,
					}
				},
				invalidatesTags: ['Category'],
			}),
		}
	},
})

export const { useGetCategoriesQuery, useDeleteCategoryMutation, useGetCategoryByIdQuery, useUpdateCategoryMutation } =
	categoriesApi
