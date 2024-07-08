'use client'

import Link from 'next/link'
import { adminNavigationLinks } from './admin-navigation.links'
import styles from './AdminNavigation.module.scss'
import { usePathname } from 'next/navigation'
import cn from 'classnames'

export const AdminNavigation = () => {
	const pathName = usePathname()

	return (
		<>
			<div className={styles.links}>
				{adminNavigationLinks.map((l) => (
					<Link
						href={l.path}
						key={l.path + l.title}
						className={cn(styles.link, {
							[styles.active]: pathName === l.path,
						})}
					>
						{l.title}
					</Link>
				))}
			</div>
		</>
	)
}
