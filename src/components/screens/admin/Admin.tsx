'use client'

import { FC } from 'react'
import styles from './Admin.module.scss'
import { AdminNavigation } from '../../shared/AdminNavigation/AdminNavigation'

export const Admin: FC = () => {
	return (
		<div className={styles.adminPage}>
			<AdminNavigation />
		</div>
	)
}
