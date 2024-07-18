import { FC } from 'react'
import EditSvg from '@/../public/svg/edit.svg'
import DeleteSvg from '@/../public/svg/delete.svg'
import Link from 'next/link'
import styles from './AdminItemActions.module.scss'

interface IAdminItemActionsProps {
	catId: number
	remove: (id: number) => void
	editUrl?: string
}

export const AdminItemActions: FC<IAdminItemActionsProps> = ({ remove, editUrl, catId }) => {
	return (
		<div className={styles.icons}>
			{editUrl ? (
				<Link href={editUrl}>
					<EditSvg />
				</Link>
			) : (
				<span>
					<EditSvg />
				</span>
			)}

			<span onClick={() => remove(catId)}>
				<DeleteSvg />
			</span>
		</div>
	)
}
