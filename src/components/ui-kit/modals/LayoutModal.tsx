import { FC, MouseEvent, ReactNode } from 'react'
import styles from './LayoutModal.module.scss'
import cn from 'classnames'

interface ILayoutModalProps {
	variant: 'white' | 'dark'
	close: (event: MouseEvent<HTMLDivElement>) => void
	Content?: ReactNode
}

export const LayoutModal: FC<ILayoutModalProps> = ({ Content, close, variant }) => {
	return (
		<div
			className={cn(styles.modalContainer, {
				[styles.white]: variant === 'white',
				[styles.dark]: variant === 'dark',
			})}
			onClick={close}
		>
			<div onClick={(e) => e.stopPropagation()}>{Content && Content}</div>
		</div>
	)
}
