'use client'

import { ICategory, ISubCategories, ISubCategory } from '@/types/category/category.types'
import { FC } from 'react'
import styles from './CategoryList.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { CategoryColumn } from './CategoryColumn'

interface ICategoryListProps {
	activeCategory: ICategory | null
	subCategories: ISubCategory[]
}

const getPortionItems = (items: ISubCategory[], portionNumber: number) => {
	const length = items && items.length
	const portionSize = length / 3
	return items && items.slice(portionNumber * portionSize - portionSize, portionNumber * portionSize)
}

export const CategoryList: FC<ICategoryListProps> = ({ activeCategory, subCategories }) => {
	return (
		<div className={styles.categoryList}>
			<Heading text={activeCategory?.title} style={{ fontSize: '32px' }} count={'10000 товаров'} />
			<div className={styles.subCategoriesWrapper}>
				<div className={styles.subCatList}>
					<CategoryColumn items={subCategories && getPortionItems(subCategories, 1)} />
					<CategoryColumn items={subCategories && getPortionItems(subCategories, 2)} />
					<CategoryColumn items={subCategories && getPortionItems(subCategories, 3)} />
				</div>
				<div className={styles.column}></div>
			</div>
		</div>
	)
}
