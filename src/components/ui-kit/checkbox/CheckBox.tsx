'use client'

import { DetailedHTMLProps, FC, InputHTMLAttributes, useState, MouseEvent } from 'react'
import styles from './CheckBox.module.scss'
import cn from 'classnames'

type DefaultCheckBoxPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyCheckBoxPropsType = DefaultCheckBoxPropsType & {
	text?: string
	onChangeMy: (value: boolean) => void
	error?: boolean
	chSize?: 'big' | 'small'
}

export const CheckBox: FC<MyCheckBoxPropsType> = ({ text, checked, onChangeMy, error, chSize = 'small' }) => {
	const [hovered, setHovered] = useState(false)

	const onChangeHandler = (e: MouseEvent<HTMLLabelElement>) => {
		e.preventDefault()

		if (hovered) setHovered(false)
		onChangeMy(!checked)
	}

	const handleHoverEnter = () => {
		if (checked) return
		setHovered(true)
	}

	const handleHoverLeave = () => {
		if (checked) return
		setHovered(false)
	}

	return (
		<label className={styles.label} onClick={onChangeHandler}>
			<input className={styles.input} />
			<div
				className={cn(styles.checkbox, {
					[styles.checked]: checked,
					[styles.hovered]: hovered && !error,
					[styles.error]: error,
					[styles.big]: chSize === 'big',
					[styles.small]: chSize === 'small',
				})}
				onMouseEnter={handleHoverEnter}
				onMouseLeave={handleHoverLeave}
			>
				{(checked || hovered) && !error && (
					<svg
						className={cn(styles.svg, {
							[styles.hovered]: hovered,
						})}
					>
						<path
							fill='currentColor'
							width={16}
							height={16}
							d='M12.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L7 9.586l4.293-4.293a1 1 0 0 1 1.414 0Z'
						></path>
					</svg>
				)}
			</div>
			{text && <div className={styles.text}>{text}</div>}
		</label>
	)
}
