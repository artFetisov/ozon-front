import { FC, ReactNode } from 'react'
import styles from './HeaderLink.module.scss'
import Link from 'next/link'

interface ILinkPropsType {
	title: string
	svg: ReactNode
	linkPath: string
	itemsCount: number | string
	onMouseLeave?: () => void
	onMouseEnter?: () => void
}

export const HeaderLink: FC<ILinkPropsType> = ({ title, svg, linkPath, itemsCount, onMouseLeave, onMouseEnter }) => {
	return (
		<Link className={styles.link} href={linkPath} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<span className={styles.control}>{itemsCount}</span>
			{svg}
			<span>{title}</span>
		</Link>
	)
}
