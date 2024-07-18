import { DetailedHTMLProps, FC } from 'react'
import styles from './Heading.module.scss'
import { HTMLAttributes } from 'react'
import cn from 'classnames'

type DefaultDivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type MyDivPropsType = DefaultDivPropsType & {
	text?: string
	count?: number | string
	size?: 'large' | 'middle'
}

export const Heading: FC<MyDivPropsType> = ({ text, count, size = 'large', ...props }) => {
	return (
		<div
			className={cn(styles.heading, {
				[styles.large]: size === 'large',
				[styles.middle]: size === 'middle',
			})}
			{...props}
		>
			<span>{text && text}</span>
			<span className={styles.number}>{count}</span>
		</div>
	)
}
