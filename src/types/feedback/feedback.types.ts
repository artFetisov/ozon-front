import { IUser } from '../user/user.types'

export interface IFeedback {
	id: number
	author: IUser
	description: IFeedbackDescription
	images: IFeedbackImage[]
	date: Date
	grade: number
	benefitGrade: IFeedbackBenefitGrade
	comments: IFeedbackComment[]
}

export interface IFeedbackImage {
	id: number
	path: string
	fbId: number
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

export interface ISendingCommentForm {
	comment: string
}

export type TypeVariantFeedbackGalleryModal = 'one' | 'all'
