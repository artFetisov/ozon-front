import { FC } from 'react'
import styles from './RatingProgressBar.module.scss'
import { getTotalCountPercent } from '@/utils/rating/rating'

interface IRatingProgressBarProps {
	title: string
	totalCount: number
	count: number
}

export const RatingProgressBar: FC<IRatingProgressBarProps> = ({ title, totalCount, count }) => {
	return (
		<div className={styles.progressBarBox}>
			<div className={styles.title}>{title}</div>
			<div className={styles.progressBar}>
				<div className={styles.progress}>
					<div className={styles.percent} style={{ width: `${getTotalCountPercent(totalCount, count)}` }}></div>
				</div>
			</div>
			<div>{count}</div>
		</div>
	)
}
