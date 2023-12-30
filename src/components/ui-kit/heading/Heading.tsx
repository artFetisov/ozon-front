import { DetailedHTMLProps, FC } from 'react'
import styles from './Heading.module.scss'
import { HTMLAttributes } from 'react'

type DefaultDivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type MyDivPropsType = DefaultDivPropsType & {
	text?: string
	count?: number | string
}

export const Heading: FC<MyDivPropsType> = ({ text, count, ...props }) => {
	return (
		<div className={styles.heading} {...props}>
			<span>{text && text}</span>
			<span className={styles.number}>{count}</span>
		</div>
	)
}
