import { FC } from 'react'
import styles from './AdminTableItem.module.scss'
import { IAdminTableItem } from '../types/admin-table.interface'
import { AdminItemActions } from '../AdminItemActions/AdminItemActions'

interface IAdminTableItemProps {
	item: IAdminTableItem
	remove: () => void
}

export const AdminTableItem: FC<IAdminTableItemProps> = ({ item, remove }) => {
	return (
		<div className={styles.item}>
			{item.items.map((v) => (
				<div key={v}>{v}</div>
			))}
			<AdminItemActions remove={remove} editUrl={item.editUrl} />
		</div>
	)
}
