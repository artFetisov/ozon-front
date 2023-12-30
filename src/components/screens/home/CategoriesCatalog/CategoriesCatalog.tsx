'use client'

import { FC } from 'react'
import styles from './CategoriesCatalog.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import cn from 'classnames'
import { LeftSideNavigationBar } from './LeftSideNavigationBar/LeftSideNavigationBar'
import { CategoryList } from './CategoryList/CategoryList'

export const CategoriesCatalog: FC = () => {
	const isShowCatalogCategories = useTypedSelector((state) => state.app.isShowCategoriesList)
	const categories = useTypedSelector((state) => state.categories.categories)
	const activeCategory = useTypedSelector((state) => state.categories.activeCategory)
	const subCategories = useTypedSelector((state) => state.categories.subCategories)

	return (
		<div
			className={cn(styles.catalogCategories, {
				[styles.hide]: !isShowCatalogCategories,
			})}
		>
			<div className={styles.catWrapper}>
				<LeftSideNavigationBar categories={categories} activeCategory={activeCategory} />
				<div className={styles.col}></div>
				<CategoryList activeCategory={activeCategory} subCategories={subCategories[activeCategory?.id as number]} />
			</div>
		</div>
	)
}
