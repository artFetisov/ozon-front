import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ISubCategory } from '@/types/category/category.types'
import { FC, useState } from 'react'
import styles from './CategoryList.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import { useActions } from '@/hooks/useActions'

interface IColumnItemProps {
	subItem: ISubCategory
}

export const ColumnItem: FC<IColumnItemProps> = ({ subItem }) => {
	const { setIsShowCategoriesList } = useActions()
	const subSubCategories = useTypedSelector((state) => state.categories.subSubCategories)
	const [isShowAllItems, setIsShowAllItems] = useState(false)

	const handleIsShowAllItems = () => {
		setIsShowAllItems(!isShowAllItems)
	}

	const handleShowCategoriesList = () => {
		setIsShowCategoriesList(false)
	}

	return (
		<div className={styles.columnItem}>
			<Link href={PATHS.CATEGORY + `${subItem.slug}`} className={styles.title} onClick={handleShowCategoriesList}>
				{subItem.title}
			</Link>
			{subSubCategories[subItem.id] && !isShowAllItems
				? subSubCategories[subItem.id].slice(0, subSubCategories[subItem.id].length / 2).map((c) => (
						<Link href={PATHS.CATEGORY + `${c.slug}`} key={c.id} className={styles.item} onClick={handleShowCategoriesList}>
							{c.title}
						</Link>
				  ))
				: subSubCategories[subItem.id] &&
				  subSubCategories[subItem.id].map((c) => (
						<Link href={PATHS.CATEGORY + `${c.slug}`} key={c.id} className={styles.item} onClick={handleShowCategoriesList}>
							{c.title}
						</Link>
				  ))}
			<div onClick={handleIsShowAllItems} className={styles.arrowBox}>
				{!isShowAllItems ? <span>Еще</span> : <span>Свернуть</span>}
				<svg
					width={24}
					height={24}
					className={cn(styles.arrow, {
						[styles.rotate]: isShowAllItems,
					})}
				>
					{!isShowAllItems ? (
						<path
							fill='currentColor'
							d='M6.293 9.293a1 1 0 0 1 1.414 0L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z'
						></path>
					) : (
						<path
							fill='currentColor'
							d='M6.293 9.293a1 1 0 0 1 1.414 0L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414Z'
						></path>
					)}
				</svg>
			</div>
		</div>
	)
}
