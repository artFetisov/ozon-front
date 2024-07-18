import { IAdminTableItem } from '@/components/shared/AdminTable/types/admin-table.interface'
import { ISubCategoryR, ISubSubCategoryR } from '@/types/category/category.types'

export const getSubSubItemsForAdminTable = <T extends ISubSubCategoryR>(items?: T[]): IAdminTableItem[] => {
	return items
		? items.map((item) => ({
				parentId: item.subCategoryId,
				id: item.id,
				items: [item.title, item.slug],
		  }))
		: []
}

export const getSubItemsForAdminTable = <T extends ISubCategoryR>(items?: T[]): IAdminTableItem[] => {
	return items
		? items.map((item) => ({
				parentId: item.categoryId,
				id: item.id,
				items: [item.title, item.slug],
		  }))
		: []
}

export const getCommonItemsForAdminTable = <T extends { id: number; title: string; slug: string }>(
	path: string,
	items?: T[]
): IAdminTableItem[] => {
	return items
		? items.map((item) => ({
				id: item.id,
				editUrl: `${path}${item.id}`,
				items: [item.title, item.slug],
		  }))
		: []
}
