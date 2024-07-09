import { Button } from '@/components/ui-kit/button/Button'
import { FC, useState } from 'react'
import styles from './AdminHeader.module.scss'
import { InputSearch } from '@/components/ui-kit/input-search/InputSearch'
import { InputAdminSearch } from '@/components/ui-kit/input-admin-search/InputAdminSearch'

interface IAdminHeaderProps {
	btnTitle: string
}

export const AdminHeader: FC<IAdminHeaderProps> = ({ btnTitle }) => {
	const [term, setTerm] = useState('')

	const handleChange = (value: string) => {
		setTerm(value)
	}

	return (
		<div className={styles.adminHeader}>
			<div>
				<InputAdminSearch value={term} onChange={handleChange} />
			</div>
			<Button variant='middle' isFullWidth={false} color='blue'>
				{btnTitle}
			</Button>
		</div>
	)
}
