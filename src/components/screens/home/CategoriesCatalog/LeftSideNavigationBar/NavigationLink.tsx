'use client'

import { FC } from 'react'
import styles from './LeftSideNavigationBar.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { ICategory } from '@/types/category/category.types'
import { useActions } from '@/hooks/useActions'
import { PATHS } from '@/constants/paths'

interface INavigationLinkProps {
	category: ICategory
	activeCategory: ICategory | null
}

export const NavigationLink: FC<INavigationLinkProps> = ({ category, activeCategory }) => {
	const { setActiveCategory, setIsShowCategoriesList } = useActions()

	const handleSetActiveCategory = () => {
		setActiveCategory(category)
	}

	const handleShowCategoriesList = () => {
		setIsShowCategoriesList(false)
	}

	const isActiveCategory = category.id === activeCategory?.id
	return (
		<li onMouseEnter={handleSetActiveCategory} onClick={handleShowCategoriesList}>
			<Link
				href={PATHS.CATEGORY + `${category.slug}`}
				className={cn(styles.navigationLink, {
					[styles.active]: isActiveCategory,
				})}
			>
				{category && category.title}
				{isActiveCategory && (
					<svg width={24} height={24} style={{ marginLeft: 'auto' }}>
						<path
							fill='currentColor'
							d='M9.293 6.293a1 1 0 0 0 0 1.414L13.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0Z'
						></path>
					</svg>
				)}
			</Link>
		</li>
	)
}
