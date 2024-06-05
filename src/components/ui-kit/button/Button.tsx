import { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent, ReactNode } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'
import { Loader } from '../loaders/button-loader/ButtonLoader'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	variant: 'large' | 'middle' | 'small' | 'disabled'
	color: 'blue' | 'green' | 'lightBlue'
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	disabledP?: boolean
	isIcon?: boolean
	isFullWidth?: boolean
	isLiked?: boolean
	isLoading?: boolean
}

export const Button: FC<MyButtonPropsType> = ({
	children,
	variant,
	isLiked,
	disabledP,
	isFullWidth = true,
	color,
	isIcon,
	isLoading,
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
				{isLoading && <Loader />}
				{children && !isLoading && children}
			</span>
		</button>
	)
}
