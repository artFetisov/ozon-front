import { IFeedback } from '@/types/feedback/feedback.types'
import { FC } from 'react'
import styles from './Feedback.module.scss'
import { getFirstCapitalLetter, getNameWithInitials } from '@/utils/user/name'

interface IFeedbackProps {
	feedback: IFeedback
}

export const Feedback: FC<IFeedbackProps> = ({ feedback }) => {
	return (
		<div className={styles.feedback}>
			<div className={styles.topBox}>
				<div className={styles.userData}>
					<div className={styles.circle}>
						<span>{getFirstCapitalLetter(feedback.author.name)}</span>
					</div>
					<div className={styles.name}>{getNameWithInitials(feedback.author.name, feedback.author.lastName)}</div>
				</div>
				<div className={styles.dateAndRating}>rate</div>
			</div>
		</div>
	)
}
