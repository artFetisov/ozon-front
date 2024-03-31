import { IFeedback, IFeedbackImage } from '@/types/feedback/feedback.types'

// temporary solution
export const getAllFeedbackImages = (feedbacks: IFeedback[]): IFeedbackImage[] => {
	return feedbacks.reduce((acc, cur) => [...acc, ...cur.images], [] as IFeedbackImage[])
}

// temporary solution
export const getFeedbackById = (feedbacks: IFeedback[], id: number): IFeedback => {
	return feedbacks.find((fb) => fb.id === id) as IFeedback
}
