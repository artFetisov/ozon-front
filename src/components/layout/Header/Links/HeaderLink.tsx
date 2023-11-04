import { FC, ReactNode } from 'react'
import styles from './Links.module.scss'
import Link from 'next/link'

interface IHeaderLink {
	title: string
	svg: ReactNode
	linkPath: string
	itemsCount: number
}


export const HeaderLink: FC<IHeaderLink> = ({ title, svg, linkPath, itemsCount }) => {
	return <Link className={styles.link} href={linkPath}>
		<span className={styles.control}>{itemsCount}</span>
		{svg}
		<span>{title}</span>
	</Link>
}