import { FC, ReactNode } from 'react'
import styles from './Popup.module.scss'
import cn from 'classnames'

interface IPopupProps {
	children: ReactNode
	isShow: boolean
	onMouseLeave?: () => void
	onMouseEnter?: () => void
}

export const Popup: FC<IPopupProps> = ({ children, isShow, onMouseEnter, onMouseLeave }) => {
	return (
		<div
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
			className={cn(styles.popup, {
				[styles.show]: isShow,
				[styles.hide]: !isShow,
			})}
		>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
