import { FC } from 'react'
import EditSvg from '@/../public/svg/edit.svg'
import DeleteSvg from '@/../public/svg/delete.svg'
import Link from 'next/link'
import styles from './AdminItemActions.module.scss'

interface IAdminItemActionsProps {
	remove: () => void
	editUrl: string
}

export const AdminItemActions: FC<IAdminItemActionsProps> = ({ remove, editUrl }) => {
	return (
		<div className={styles.icons}>
			<Link href={editUrl}>
				<EditSvg />
			</Link>
			<span onClick={remove}>
				<DeleteSvg />
			</span>
		</div>
	)
}
