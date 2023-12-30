import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	variant: 'large' | 'middle' | 'small' | 'disabled'
	color: 'blue' | 'green'
	onClick?: () => void
	disabledP?: boolean
}

export const Button: FC<MyButtonPropsType> = ({ children, variant, disabledP, color, ...props }) => {
	return (
		<button className={styles.button}>
			<span
				{...props}
				className={cn(styles.inner, {
					[styles.large]: variant === 'large',
					[styles.small]: variant === 'small',
					[styles.middle]: variant === 'middle',
					[styles.green]: color === 'green',
					[styles.blue]: color === 'blue',
					[styles.disabled]: disabledP,
				})}
			>
				{children}
			</span>
		</button>
	)
}
