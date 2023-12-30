import { ICategory } from '@/types/category/category.types'
import { IUser } from '@/types/user/user.types'
import { IFeedback } from '@/types/feedback/feedback.types'
import { ISeller } from '@/types/seller/seller.types'

export interface IProduct {
	id: number
	slug: string
	article: number
	price: number
	seller: ISeller
	discount: number
	remains: number
	amount: number
	title: string
	category: ICategory
	description: string
	brand: string
	feedbacks?: IFeedback[]
	brandLogo?: string
	variants?: string[]
	images?: string[]
	characteristics?: ICharacteristic
	rating?: number
	dialog?: IProductAnswerAndQuestionDialog
}

export interface ICharacteristic {
	[key: string]: string | number
}

export interface IProductAnswerAndQuestionDialog {
	id: number
	date: Date
	question: IProductDialogQuestion
	answers: IProductDialogAnswer[]
}

export interface IProductDialogQuestion {
	id: number
	title: string
	author: IUser
}

export interface IProductDialogAnswer {
	id: number
	date: number
	title: string
	author: IUser
	benefit: IBenefitDialogAnswerProduct
}

export interface IBenefitDialogAnswerProduct {
	id: number
	yes: number
	no: number
}
