import { FC, ReactNode } from 'react'
import styles from './AdminTableItem.module.scss'
import { IAdminTableItem } from '../types/admin-table.interface'
import { AdminItemActions } from '../AdminItemActions/AdminItemActions'
import cn from 'classnames'

interface IAdminTableItemProps {
	item: IAdminTableItem
	remove: (id: number) => void
	subItems?: IAdminTableItem[]
	isSubItem?: boolean
}

export const AdminTableItem: FC<IAdminTableItemProps> = ({ item, remove, subItems, isSubItem = false }) => {
	// styles if isSubItem
	return (
		<>
			<div
				className={cn(styles.item, {
					[styles.subItem]: isSubItem,
					[styles.withoutBotBord]: subItems && subItems.length > 0,
				})}
			>
				{item.items.map((v) => (
					<div key={v}>{v}</div>
				))}
				<AdminItemActions remove={remove} editUrl={item.editUrl} catId={item.id} />
			</div>
			{subItems && subItems.map((item) => <AdminTableItem key={item.id} item={item} remove={() => {}} isSubItem />)}
		</>
	)
}
