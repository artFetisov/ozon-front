import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	red?: boolean
}

export const Button: FC<MyButtonPropsType> = ({ children }) => {
	return <button className={styles.button}>
		<span className={styles.inner}>
			{children}
		</span>
	</button>
}
