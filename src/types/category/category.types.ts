export interface ICategory {
	id: number
	title: string
	icon: string
	slug: string
	description?: string
	subCategory?: ISubCategory[]
}

export interface ISubCategory {
	id: number
	title: string
	description?: string
	subCategory?: ISubCategory[]
}