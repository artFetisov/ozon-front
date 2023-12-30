export interface ICategory {
	id: number
	title: string
	slug: string
}

export interface ISubCategories {
	[key: number]: ISubCategory[]
}

export interface ISubCategory {
	id: number
	title: string
	slug: string
	parentId: number
}
