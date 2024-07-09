import { FC } from 'react'
import styles from './AdminTable.module.scss'
import { IAdminTableItem } from './types/admin-table.interface'
import { AdminTableItem } from './AdminTableItem/AdminTableItem'
import { AdminHeader } from './AdminHeader/AdminHeader'

interface IAdminTableProps {
	headers: string[]
	tableItems: IAdminTableItem[]
	remove: () => void
	btnTitle: string
}

export const AdminTable: FC<IAdminTableProps> = ({ headers, tableItems, remove, btnTitle }) => {
	return (
		<div className={styles.adminTable}>
			<AdminHeader btnTitle={btnTitle} />
			<div className={styles.header}>
				{headers.map((h) => (
					<div key={h}>{h}</div>
				))}
				<div>Действия</div>
			</div>
			<div>
				{tableItems.map((item) => (
					<AdminTableItem key={item.id} item={item} remove={remove} />
				))}
			</div>
		</div>
	)
}
