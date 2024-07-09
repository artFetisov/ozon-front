'use client'

import { AdminNavigation } from '@/components/shared/AdminNavigation/AdminNavigation'
import { AdminHeader } from '@/components/shared/AdminTable/AdminHeader/AdminHeader'
import { AdminTable } from '@/components/shared/AdminTable/AdminTable'
import { IAdminTableItem } from '@/components/shared/AdminTable/types/admin-table.interface'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { PATHS } from '@/constants/paths'
import { useGetCategoriesQuery } from '@/store/categories/categories.api'

export const AdminCategories = () => {
	const { isLoading, data, error } = useGetCategoriesQuery()

	const tableItems: IAdminTableItem[] =
		data?.map((item) => ({
			id: item.id,
			editUrl: `${PATHS.ADMIN_CATEGORY}/${item.id}`,
			items: [item.title, item.slug],
		})) ?? []

	const handleRemoveItem = () => {}

	if (isLoading) {
		return <h1>...Loading</h1>
	}

	if (error) {
		return <div>ошибка</div>
	}

	return (
		<div>
			<AdminNavigation />
			<Heading text='Категории' />
			<AdminTable
				headers={['Название', 'Слаг']}
				tableItems={tableItems}
				remove={handleRemoveItem}
				btnTitle='Создать категорию'
			/>
		</div>
	)
}
