import { FC } from 'react'
import { categoriesMock } from '@/mock/categories'
import styles from './CategoryTopRow.module.scss'
import { CategoryTopRowLink } from '@/components/ui-kit/category-top-row/CategoryTopRowLink'
import cn from 'classnames'

export const CategoryTopRow: FC = () => {
	return <ul className={styles.categoryTopRow}>
		{categoriesMock.slice(0, 8).map((cat) => <CategoryTopRowLink item={cat} key={cat.id + cat.slug} />)}
	</ul>
}