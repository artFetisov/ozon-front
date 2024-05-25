import { FC, useEffect } from 'react'
import styles from './Calendar.module.scss'
import cn from 'classnames'
import { getMonth } from '@/utils/date/date'

export const Calendar: FC = () => {
	const date = new Date()

	useEffect(() => {
		console.log(getMonth(4))
	}, [])

	return (
		<div className={styles.calendar}>
			<div className={styles.innerBox}>
				<div className={styles.header}>
					<div className={styles.leftArrows}>
						<span className={styles.arrow}>
							<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} className={styles.rotated}>
								<path
									fill='currentColor'
									d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8z'
								></path>
							</svg>
						</span>
						<span className={styles.arrow}>
							<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} className={styles.rotated}>
								<path
									fill='currentColor'
									d='M2.293 13.707a1 1 0 0 1 0-1.414L6.586 8 2.293 3.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0'
								></path>
								<path
									fill='currentColor'
									d='M8.293 13.707a1 1 0 0 1 0-1.414L12.586 8 8.293 3.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0'
								></path>
							</svg>
						</span>
					</div>
					<div className={styles.monthAndYear}>
						{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
					</div>
					<div className={styles.rightArrows}>
						<span className={styles.arrow}>
							<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16}>
								<path
									fill='currentColor'
									d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8z'
								></path>
							</svg>
						</span>
						<span className={styles.arrow}>
							<svg xmlns='http://www.w3.org/2000/svg' width={16} height={16}>
								<path
									fill='currentColor'
									d='M2.293 13.707a1 1 0 0 1 0-1.414L6.586 8 2.293 3.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0'
								></path>
								<path
									fill='currentColor'
									d='M8.293 13.707a1 1 0 0 1 0-1.414L12.586 8 8.293 3.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0'
								></path>
							</svg>
						</span>
					</div>
				</div>

				<div className={styles.weekDays}>
					<div className={styles.dayName}>ПН</div>
					<div className={styles.dayName}>ВТ</div>
					<div className={styles.dayName}>СР</div>
					<div className={styles.dayName}>ЧТ</div>
					<div className={styles.dayName}>ПТ</div>
					<div className={styles.dayName}>СБ</div>
					<div className={styles.dayName}>ВС</div>
				</div>
				<div className={styles.dates}>
					{getMonth(4).map((row, ind) => (
						<div key={ind} className={styles.row}>
							{row.map((day) => (
								<div key={day.getDate()} className={styles.day}>
									{day.getDate()}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
