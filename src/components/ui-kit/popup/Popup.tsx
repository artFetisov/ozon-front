import { FC, ReactNode } from 'react'
import styles from './Popup.module.scss'
import cn from 'classnames'

interface IPopupProps {
	children: ReactNode
	isShow: boolean
}

export const Popup: FC<IPopupProps> = ({ children, isShow }) => {
	return (
		<div
			className={cn(styles.popup, {
				[styles.show]: isShow,
				[styles.hide]: !isShow,
			})}
		>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
