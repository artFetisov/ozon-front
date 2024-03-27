import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './ArrowButton.module.scss'
import cn from 'classnames'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ArrowButtonPropsType = DefaultButtonPropsType & {
	position: 'left' | 'right'
	callback: () => void
}

export const ArrowButton: FC<ArrowButtonPropsType> = ({ callback, position, ...rest }) => {
	return (
		<button
			{...rest}
			onClick={callback}
			className={cn(styles.arrowButton, {
				[styles.left]: position === 'left',
				[styles.right]: position === 'right',
			})}
		>
			{position === 'left' ? (
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M16.707 1.293a1 1 0 0 1 0 1.414L7.414 12l9.293 9.293a1 1 0 0 1-1.414 1.414l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 0 1 1.414 0'
					></path>
				</svg>
			) : (
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M7.293 1.293a1 1 0 0 0 0 1.414L16.586 12l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-1.414 0'
					></path>
				</svg>
			)}
		</button>
	)
}
