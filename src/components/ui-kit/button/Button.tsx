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
	isFullWidth?: boolean
}

export const Button: FC<MyButtonPropsType> = ({
	children,
	variant,
	disabledP,
	isFullWidth = true,
	color,
	isIcon,
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.fullWidth]: isFullWidth,
			})}
			{...rest}
		>
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
