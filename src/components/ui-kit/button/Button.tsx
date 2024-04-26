import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	variant: 'large' | 'middle' | 'small' | 'disabled'
	color: 'blue' | 'green' | 'lightBlue'
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	disabledP?: boolean
	isIcon?: boolean
	isFullWidth?: boolean
	isLiked?: boolean
}

export const Button: FC<MyButtonPropsType> = ({
	children,
	variant,
	isLiked,
	disabledP,
	isFullWidth = true,
	color,
	isIcon,
	...rest
}) => {
	return (
		<button
			disabled={disabledP}
			className={cn(styles.button, {
				[styles.fullWidth]: isFullWidth,
				[styles.disabledBtn]: disabledP,
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
					[styles.disabledInner]: disabledP,
					[styles.noPadding]: isIcon,
					[styles.liked]: isLiked,
				})}
			>
				{children}
			</span>
		</button>
	)
}
