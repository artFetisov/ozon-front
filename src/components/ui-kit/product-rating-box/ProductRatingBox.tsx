import { FC } from 'react'
import styles from './ProductRatingBox.module.scss'
import { IRating } from '@/types/rating/rating.types'
import { Rating } from '../rating/Rating'
import { RatingProgressBar } from '../rating-progress-bar/RatingProgressBar'

interface IProductRatingBoxProps {
	rating: IRating
}

export const ProductRatingBox: FC<IProductRatingBoxProps> = ({ rating }) => {
	const totalCount =
		rating.five.totalCount +
		rating.four.totalCount +
		rating.three.totalCount +
		rating.two.totalCount +
		rating.one.totalCount

	return (
		<div>
			<div className={styles.rating}>
				<div className={styles.box}>
					<Rating rating={rating.averageValue} variant='large' />
				</div>

				<div>
					<span>{rating.averageValue} / 5</span>
				</div>
			</div>
			<div className={styles.detailedRating}>
				<RatingProgressBar title='5 звёзд' count={rating.five.totalCount} totalCount={totalCount} />
				<RatingProgressBar title='4 звезды' count={rating.four.totalCount} totalCount={totalCount} />
				<RatingProgressBar title='3 звезды' count={rating.three.totalCount} totalCount={totalCount} />
				<RatingProgressBar title='2 звезды' count={rating.two.totalCount} totalCount={totalCount} />
				<RatingProgressBar title='1 звезда' count={rating.one.totalCount} totalCount={totalCount} />
			</div>
		</div>
	)
}
