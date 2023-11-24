'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps, FC, useState } from 'react'
import styles from './IconButton.module.scss'
import cn from 'classnames'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
	text?: string
	like?: boolean
}

export const IconButton: FC<MyButtonPropsType> = ({ children, text, like }) => {
	const [liked, setLiked] = useState(false)

	const handleLike = () => {
		setLiked(!liked)
	}

	return <button onClick={handleLike} className={cn(styles.iconButton, {
		[styles.liked]: liked && like,
		[styles.withText]: text,
	})}>
		<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' style={{ marginRight: text ? '8px' : '' }}>
			{children}
		</svg>
		{children}
		{text && <span className={styles.text}>{text}</span>}
		<div className={cn({
			[styles.squareRed]: like && liked,
			[styles.squareGrey]: !like || !liked,
		})}></div>
	</button>
}