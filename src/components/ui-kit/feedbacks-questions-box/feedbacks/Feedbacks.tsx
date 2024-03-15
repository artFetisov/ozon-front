import { FC } from 'react'
import styles from './Feedbacks.module.scss'
import { Sorter } from './sorter/Sorter'
import { IFeedback } from '@/types/feedback/feedback.types'
import { Feedback } from './feedback/Feedback'

interface IFeedbacksProps {
	feedbacks: IFeedback[]
}

export const Feedbacks: FC<IFeedbacksProps> = ({ feedbacks }) => {
	return (
		<>
			<div className={styles.col_1}>
				<div className={styles.listPhotos}></div>
				<Sorter />
				<div className={styles.feedbacks}>
					{feedbacks && feedbacks.map((fb) => <Feedback feedback={fb} key={fb.id + '-' + fb.description} />)}
				</div>
			</div>
			<div className={styles.col_2}></div>
			<div className={styles.col_3}></div>
		</>
	)
}
