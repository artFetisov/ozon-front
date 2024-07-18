import { FC } from 'react'
import styles from './AdminTable.module.scss'
import { IAdminTableItem } from './types/admin-table.interface'
import { AdminTableItem } from './AdminTableItem/AdminTableItem'

interface IAdminTableProps {
	headers: string[]
	tableItems: IAdminTableItem[]
	subItems?: IAdminTableItem[]
	remove: (id: number) => void
}

const mapSubSubItems = (parentId: number, items?: IAdminTableItem[]) => {
	return items ? items.filter((item) => item.parentId === parentId) : []
}

export const AdminTable: FC<IAdminTableProps> = ({ headers, tableItems, remove, subItems }) => {
	return (
		<div className={styles.adminTable}>
			<div className={styles.header}>
				{headers.map((h) => (
					<div key={h}>{h}</div>
				))}
				<div>Действия</div>
			</div>
			{tableItems.map((item) => (
				<AdminTableItem
					key={item.id}
					item={item}
					remove={remove}
					subItems={mapSubSubItems(item.id, subItems)}
				></AdminTableItem>
			))}
		</div>
	)
}
