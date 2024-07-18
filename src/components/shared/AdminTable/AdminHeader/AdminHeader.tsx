import { Button } from '@/components/ui-kit/button/Button'
import { FC, useState } from 'react'
import styles from './AdminHeader.module.scss'
import { InputAdminSearch } from '@/components/ui-kit/input-admin-search/InputAdminSearch'

interface IAdminHeaderProps {
	btnTitle: string
	onSearch: (value: string) => void
	searchValue: string
}

export const AdminHeader: FC<IAdminHeaderProps> = ({ btnTitle, onSearch, searchValue }) => {
	return (
		<div className={styles.adminHeader}>
			<div>
				<InputAdminSearch value={searchValue} onChange={onSearch} />
			</div>
			<Button variant='middle' isFullWidth={false} color='blue'>
				{btnTitle}
			</Button>
		</div>
	)
}
