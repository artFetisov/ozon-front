import { FC, ReactNode } from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

interface ITextProps {
	children: ReactNode
	size: 'small' | 'middle' | 'large'
	color: 'blue'
	callback: () => void
}

export const Text: FC<ITextProps> = ({ children, size, color, callback }) => {
	return (
		<span
			className={cn(styles.text, {
				[styles.blue]: color === 'blue',
				[styles.middle]: size === 'middle',
			})}
			onClick={callback}
		>
			{children}
		</span>
	)
}
