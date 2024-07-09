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

export interface ICategoryResponse {
	id: number
	title: string
	slug: string
	createdAt: Date
	subCategories: ISubCategoryR[]
	subSubCategories: ISubSubCategoryR[]
}

export interface ISubCategoryR {
	id: number
	title: string
	slug: string
	createdAt: Date
	categoryId: number
}

export interface ISubSubCategoryR {
	id: number
	title: string
	slug: string
	createdAt: Date
	categoryId: number
	subCategoryId: number
}
