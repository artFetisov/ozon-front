import { FC } from 'react'
import Link from 'next/link'
import { ICategory } from '@/types/category/category.types'
import styles from './CategoryTopRow.module.scss'
import { PATHS } from '@/constants/paths'

interface ICategoryTopRowLinkProps {
	item: ICategory
}

export const CategoryTopRowLink: FC<ICategoryTopRowLinkProps> = ({ item }) => {
	return (
		<li className={styles.link}>
			<Link href={`${PATHS.CATEGORY}/${item.slug}`}>
				<span
					className={styles.icon}
					style={{ backgroundImage: "url('https://cdn1.ozone.ru/s3/cms/fb/t19/ic_m_plane.svg')" }}
				></span>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}
