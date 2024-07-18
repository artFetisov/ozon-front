import { Button } from '@/components/ui-kit/button/Button'
import { FC, useState } from 'react'
import styles from './AdminHeader.module.scss'
import { InputAdminSearch } from '@/components/ui-kit/input-admin-search/InputAdminSearch'

interface IAdminHeaderProps {
	btnTitle: string
	onSearch: (value: string) => void
	searchValue: string
}

const newFunc2 = () => {
	return 'new func 2'
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
