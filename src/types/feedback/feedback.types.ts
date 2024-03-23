import { IProduct } from '@/types/product/product.types'
import { IUser } from '../user/user.types'

export interface IFeedback {
	id: number
	author: IUser
	product: IProduct
	description: IFeedbackDescription
	videos: string[]
	images: string[]
	date: Date
	grade: number
	benefitGrade: IFeedbackBenefitGrade
	comments: IFeedbackComment[]
}

export interface IFeedbackComment {
	id: number
	author: IUser
	message: string
	date: Date
}

export interface IFeedbackDescription {
	id: number
	dignities: string
	disadvantages: string
	comment: string
}

export interface IFeedbackBenefitGrade {
	id: number
	yes: number
	no: number
}
