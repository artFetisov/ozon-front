'use client'

import { FC } from 'react'
import styles from './CategoryList.module.scss'
import { ISubCategories, ISubCategory } from '@/types/category/category.types'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ColumnItem } from './ColumnItem'

interface ICategoryColumnProps {
	items: ISubCategory[]
}

export const CategoryColumn: FC<ICategoryColumnProps> = ({ items }) => {
	return <div className={styles.catListColumn}>{items && items.map((c) => <ColumnItem key={c.id} subItem={c} />)}</div>
}
