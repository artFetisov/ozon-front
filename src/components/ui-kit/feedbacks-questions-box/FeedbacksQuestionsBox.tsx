import { FC, useState } from 'react'
import styles from './FeedbacksQuestionsBox.module.scss'
import { Feedbacks } from './feedbacks/Feedbacks'
import { Questions } from './questions/Questions'
import cn from 'classnames'
import { mockFeedbacks } from '@/mock/feedbacks'
import { IFeedback } from '@/types/feedback/feedback.types'
import { IRating } from '@/types/rating/rating.types'

type VariantShow = 'feedbacks' | 'questions'

interface IFeedbacksQuestionBox {
	feedbacks: IFeedback[]
	productRating: IRating
}

export const FeedbacksQuestionsBox: FC<IFeedbacksQuestionBox> = ({ feedbacks, productRating }) => {
	const [variantShow, setVariantShow] = useState<VariantShow>('feedbacks')

	const handleVariantShow = (variant: VariantShow) => {
		setVariantShow(variant)
	}

	return (
		<div className={styles.feedbacksAndQuestionsBox}>
			<div className={styles.titles}>
				<div
					onClick={(e) => handleVariantShow('feedbacks')}
					className={cn(styles.title, {
						[styles.black]: variantShow === 'feedbacks',
						[styles.grey]: variantShow !== 'feedbacks',
					})}
				>
					<span>Отзывы о товаре</span>
					<span>67</span>
				</div>
				<div
					className={cn(styles.title, {
						[styles.black]: variantShow === 'questions',
						[styles.grey]: variantShow !== 'questions',
					})}
					onClick={(e) => handleVariantShow('questions')}
				>
					<span>Вопросы о товаре</span>
					<span>8</span>
				</div>
				<div
					className={cn(styles.border, {
						[styles.left]: variantShow === 'feedbacks',
						[styles.right]: variantShow === 'questions',
					})}
				></div>
			</div>
			<div className={styles.content}>
				{variantShow === 'feedbacks' ? (
					<Feedbacks feedbacks={feedbacks} productRating={productRating} />
				) : (
					<Questions />
				)}
			</div>
		</div>
	)
}
