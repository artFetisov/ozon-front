import { DetailedHTMLProps, FC } from 'react'
import styles from './Heading.module.scss'
import { HTMLAttributes } from 'react'

type DefaultDivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type MyDivPropsType = DefaultDivPropsType & {
	text: string
	count?: number
}

export const Heading: FC<MyDivPropsType> = ({ text, count }) => {
	return <div className={styles.heading}>
		<span>
			{text}
		</span>
		<span className={styles.number}>
			{count}
		</span>
	</div>
}