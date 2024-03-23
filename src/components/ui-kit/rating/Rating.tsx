import { FC } from 'react'
import styles from './Rating.module.scss'
import { getRatingPercent } from '@/utils/rating/rating'

interface IRatingProps {
	rating: number
}

export const Rating: FC<IRatingProps> = ({ rating }) => {
	return (
		<>
			<div className={styles.stars}></div>
			<div style={{ width: getRatingPercent(rating as number) }} className={styles.starsWithPercent}></div>
		</>
	)
}
