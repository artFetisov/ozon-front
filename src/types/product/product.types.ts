import { ICategory } from '@/types/category/category.types'
import { IFeedback } from '@/types/feedback/feedback.types'
import { ISeller } from '@/types/seller/seller.types'
import { IVariants } from './variant.types'
import { ICharacteristics } from './characteristic.types'
import { IRating } from '../rating/rating.types'
import { IQuestion } from '../question/question.types'

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
	feedbacks: IFeedback[]
	brandLogo: string
	variants: IVariants[]
	images: string[]
	characteristics: ICharacteristics
	rating: IRating
	questions: IQuestion[]
}
