import { FC, ReactNode } from 'react'
import styles from './Links.module.scss'
import Link from 'next/link'

interface IHeaderLinkProps {
	title: string
	svg: ReactNode
	linkPath: string
	itemsCount: number | string
}

export const HeaderLink: FC<IHeaderLinkProps> = ({ title, svg, linkPath, itemsCount }) => {
	return (
		<Link className={styles.link} href={linkPath}>
			<span className={styles.control}>{itemsCount}</span>
			{svg}
			<span>{title}</span>
		</Link>
	)
}
