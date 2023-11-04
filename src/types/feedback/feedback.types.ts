import { IProduct } from '@/types/product/product.types'

export interface IFeedback {
	id: number
	product: IProduct
	description: IFeedbackDescription
	video: string
	images: string[]
	date: Date
	rating: number
	messages: string[]
}

export interface IFeedbackDescription {
	id: number
	dignities: string
	disadvantages: string
	comment: string
}