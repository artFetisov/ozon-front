import { FC, ReactNode } from 'react'
import styles from './Popup.module.scss'
import cn from 'classnames'

interface IPopupProps {
	position: 'bottom-left' | 'bottom-center' | 'bottom-right'
	coordinates?: DOMRect
	children: ReactNode
	isShow: boolean
	onMouseLeave?: () => void
	onMouseEnter?: () => void
}

export const Popup: FC<IPopupProps> = ({ children, isShow, onMouseEnter, onMouseLeave, coordinates, position }) => {
	const poputWidth = 274

	const finalPosition: { x: number; y: number } = {
		x:
			position === 'bottom-left'
				? coordinates?.left - poputWidth
				: position === 'bottom-right'
				? coordinates?.right
				: position === 'bottom-center'
				? coordinates?.left - poputWidth / 2 + coordinates?.width / 2
				: 0,
		y: coordinates?.bottom || 0,
	}

	return (
		<div
			style={{ transform: `translate3d(${finalPosition.x}px, ${finalPosition.y}px, 0)` }}
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
