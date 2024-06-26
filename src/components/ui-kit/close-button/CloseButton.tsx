import { FC, MouseEvent } from 'react'
import styles from './CloseButton.module.scss'
import cn from 'classnames'

type VariantCloseButton = 'inside' | 'outside'

interface ICloseButton {
	callback: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
	variant: VariantCloseButton
}

export const CloseButton: FC<ICloseButton> = ({ callback, variant }) => {
	return (
		<button
			className={cn(styles.closeBtn, {
				[styles.outside]: variant === 'outside',
				[styles.inside]: variant === 'inside',
			})}
			onClick={callback}
		>
			<svg width={16} height={16}>
				<path
					fill='currentColor'
					d='M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.467 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.767 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7l3.7-3.7-3.7-3.7a1.25 1.25 0 0 1 0-1.767'
				></path>
			</svg>
		</button>
	)
}
