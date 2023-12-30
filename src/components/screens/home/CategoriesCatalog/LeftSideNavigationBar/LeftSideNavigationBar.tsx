'use client'

import { ICategory } from '@/types/category/category.types'
import { FC } from 'react'
import styles from './LeftSideNavigationBar.module.scss'
import { NavigationLink } from './NavigationLink'

interface INavigationBarProps {
	categories: ICategory[]
	activeCategory: ICategory | null
}

export const LeftSideNavigationBar: FC<INavigationBarProps> = ({ categories, activeCategory }) => {
	return (
		<div className={styles.navigationBar}>
			<ul className={styles.navigationLinks}>
				{categories && categories.map((c) => <NavigationLink key={c.id} category={c} activeCategory={activeCategory} />)}
			</ul>
		</div>
	)
}
