import { IUser } from '../user/user.types'

export interface IQuestion {
	id: number
	author: IUser
	benefitGrade: IBenefitGrade
	title: string
	date: Date
	answers?: IQuestionAnswer[]
}

export interface IQuestionAnswer {
	id: number
	date: Date
	title: string
	author: IUser
	benefit: IBenefitGrade
}

export interface IBenefitGrade {
	id: number
	yes: number
	no: number
}
