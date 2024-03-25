'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useState } from 'react'
import styles from './IconButton.module.scss'
import cn from 'classnames'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	text?: string
	like?: boolean
	onClickIcon?: () => void
	svgSize: number
	active?: boolean
}

export const IconButton: FC<MyButtonPropsType> = ({
	children,
	text,
	like,
	onClickIcon,
	svgSize,
	disabled,
	active,
	...rest
}) => {
	const [liked, setLiked] = useState(false)

	const handleLike = () => {
		like && setLiked(!liked)
	}

	const onClickHandler = () => {
		onClickIcon && onClickIcon()
	}

	return (
		<button
			onClick={onClickHandler}
			className={cn(styles.iconButton, {
				[styles.liked]: liked && like,
				[styles.withText]: text,
				// [styles.disabled]: disabled,
				// [styles.active]: active,
			})}
			{...rest}
		>
			{children && (
				<svg width={svgSize} height={svgSize} style={{ marginRight: text ? '8px' : '' }}>
					{children}
				</svg>
			)}
			{text && <span className={styles.text}>{text}</span>}
			<div
				className={cn({
					[styles.squareRed]: like && liked,
					[styles.squareGrey]: !like || !liked,
				})}
			></div>
		</button>
	)
}
