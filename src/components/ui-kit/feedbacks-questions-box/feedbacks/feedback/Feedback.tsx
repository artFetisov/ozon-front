import { IFeedback } from '@/types/feedback/feedback.types'
import { FC, useState } from 'react'
import styles from './Feedback.module.scss'
import { getFirstCapitalLetter, getNameWithInitials } from '@/utils/user/name'
import { Rating } from '@/components/ui-kit/rating/Rating'
import { getCorrectDateView } from '@/utils/date/date'
import Image from 'next/image'
import classNames from 'classnames'
import { IconButton } from '@/components/ui-kit/icon-button/IconButton'

interface IFeedbackProps {
	feedback: IFeedback
	setSelectedFeedbackCb: (feedback: IFeedback, img: string) => void
}

export const Feedback: FC<IFeedbackProps> = ({ feedback, setSelectedFeedbackCb }) => {
	return (
		<div className={styles.feedback}>
			<div className={styles.topBox}>
				<div className={styles.userData}>
					<div className={styles.circle}>
						<span>{getFirstCapitalLetter(feedback.author.name)}</span>
					</div>
					<div className={styles.name}>{getNameWithInitials(feedback.author.name, feedback.author.lastName)}</div>
				</div>
				<div className={styles.dateAndRating}>
					<div className={styles.date}>{getCorrectDateView(new Date())}</div>
					<div className={styles.ratingBox}>
						<Rating rating={feedback.grade} />
					</div>
				</div>
			</div>
			<div className={styles.descriptionBox}>
				<div className={styles.description}>
					{feedback.description.dignities && (
						<div className={styles.info}>
							<div className={styles.title}>Достоинства</div>
							<div>{feedback.description.dignities}</div>
						</div>
					)}
					{feedback.description.disadvantages && (
						<div className={styles.info}>
							<div className={styles.title}>Недостатки</div>
							<div>{feedback.description.disadvantages}</div>
						</div>
					)}
					{feedback.description.comment && (
						<div className={styles.info}>
							<div className={styles.title}>Комментарий</div>
							<div>{feedback.description.comment}</div>
						</div>
					)}
				</div>
				<div className={styles.photos}>
					{feedback.images.map((img, ind) => (
						<div key={img + '-' + ind} className={styles.image} onClick={(_) => setSelectedFeedbackCb(feedback, img)}>
							<Image src={img} alt='Description photo' fill quality={5} />
							{feedback.images.length > 2 && ind === 2 && (
								<div className={styles.backdrop}>+{feedback.images.length - 3}</div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className={styles.grade}>
				<div>Вам помог этот отзыв?</div>
				<div>
					<IconButton svgSize={16} text={`Да ${feedback.benefitGrade.yes}`}></IconButton>
					<IconButton svgSize={16} text={`Нет ${feedback.benefitGrade.no}`}></IconButton>
				</div>
			</div>
		</div>
	)
}