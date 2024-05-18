import { FC, ReactNode, useEffect } from 'react'
import styles from './Popup.module.scss'
import cn from 'classnames'

interface IPopupProps {
	position: 'bottom-left' | 'bottom-center' | 'bottom-right'
	size: { width: number; max: number }
	coordinates?: DOMRect
	children: ReactNode
	isShow: boolean
	onMouseLeave?: () => void
	onMouseEnter?: () => void
}

export const Popup: FC<IPopupProps> = ({
	children,
	isShow,
	onMouseEnter,
	onMouseLeave,
	coordinates,
	position,
	size,
}) => {
	const popupWidth = 274

	const finalPosition: { x: number; y: number } = {
		x:
			position === 'bottom-left'
				? coordinates?.left - popupWidth
				: position === 'bottom-right'
				? coordinates?.right
				: position === 'bottom-center'
				? coordinates?.left - popupWidth / 2 + coordinates?.width / 2
				: 0,
		y: coordinates?.bottom || 0,
	}

	return (
		<div
			style={{
				transform: `translate3d(${finalPosition.x}px, ${finalPosition.y + 10}px, 0)`,
				width: `${size.width}px`,
				maxWidth: `${size.max}px`,
			}}
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
