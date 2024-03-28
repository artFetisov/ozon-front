import { FC } from 'react'
import styles from './Rating.module.scss'
import { getRatingPercent } from '@/utils/rating/rating'
import cn from 'classnames'

interface IRatingProps {
	rating: number
	variant: 'small' | 'large'
}

export const Rating: FC<IRatingProps> = ({ rating, variant }) => {
	return (
		<>
			<div
				className={cn(styles.stars, {
					[styles.small]: variant === 'small',
					[styles.large]: variant === 'large',
				})}
			></div>
			<div
				style={{ width: getRatingPercent(rating as number) }}
				className={cn(styles.starsWithPercent, {
					[styles.small]: variant === 'small',
					[styles.large]: variant === 'large',
				})}
			></div>
		</>
	)
}
