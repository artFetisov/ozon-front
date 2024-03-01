import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	variant: 'large' | 'middle' | 'small' | 'disabled'
	color: 'blue' | 'green' | 'lightBlue'
	onClick?: () => void
	disabledP?: boolean
	isIcon?: boolean
}

export const Button: FC<MyButtonPropsType> = ({ children, variant, disabledP, color, isIcon, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			<span
				className={cn(styles.inner, {
					[styles.large]: variant === 'large',
					[styles.small]: variant === 'small',
					[styles.middle]: variant === 'middle',
					[styles.green]: color === 'green',
					[styles.blue]: color === 'blue',
					[styles.lightBlue]: color === 'lightBlue',
					[styles.disabled]: disabledP,
					[styles.noPadding]: isIcon,
				})}
			>
				{children}
			</span>
		</button>
	)
}
