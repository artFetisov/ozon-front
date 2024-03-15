import { FC, useState } from 'react'
import styles from './Sorter.module.scss'
import cn from 'classnames'

type SortingVariant = 'date' | 'grade'

export const Sorter: FC = () => {
	const [activeSort, setActiveSort] = useState<SortingVariant>('date')

	const handleActiveSort = (sort: SortingVariant) => {
		setActiveSort(sort)
	}

	return (
		<div className={styles.sorter}>
			<span>Сортировать по:</span>
			<span
				onClick={(e) => handleActiveSort('date')}
				className={cn({
					[styles.activeSort]: activeSort === 'date',
				})}
			>
				дате
			</span>
			<span
				onClick={(e) => handleActiveSort('grade')}
				className={cn({
					[styles.activeSort]: activeSort === 'grade',
				})}
			>
				оценке
				<svg width={16} height={16}>
					<path
						fill='currentColor'
						d='M2 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1'
					></path>
				</svg>
			</span>
		</div>
	)
}
