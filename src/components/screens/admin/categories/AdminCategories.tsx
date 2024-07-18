'use client'

import { AdminNavigation } from '@/components/shared/AdminNavigation/AdminNavigation'
import { AdminHeader } from '@/components/shared/AdminTable/AdminHeader/AdminHeader'
import { AdminTable } from '@/components/shared/AdminTable/AdminTable'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { PATHS } from '@/constants/paths'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '@/store/categories/categories.api'
import { getCommonItemsForAdminTable } from '@/utils/admin/admin'
import { useState } from 'react'

export const AdminCategories = () => {
	const [search, setSearch] = useState('')

	const { isLoading, data, error } = useGetCategoriesQuery()

	const [deleteCategory] = useDeleteCategoryMutation()

	const handleRemoveItem = (categoryId: number) => {
		deleteCategory(categoryId)
	}

	const handleSearch = (value: string) => {
		setSearch(value)
	}

	if (isLoading) {
		return <h1>...Loading</h1>
	}

	if (error) {
		return <div>ошибка</div>
	}

	return (
		<>
			<AdminNavigation />
			<Heading text='Категории' />
			<AdminHeader btnTitle={'Создать категорию'} onSearch={handleSearch} searchValue={search} />
			<AdminTable
				headers={['Название', 'Слаг']}
				tableItems={getCommonItemsForAdminTable(PATHS.ADMIN_CATEGORY, data)}
				remove={handleRemoveItem}
			/>
		</>
	)
}
