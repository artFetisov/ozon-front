'use client'

import { ChangeEvent, FocusEvent, DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import styles from './AmountCounter.module.scss'
import cn from 'classnames'
import { useActions } from '@/hooks/useActions'

interface IAmountCounterProps {
	amount: number
	remains: number
	id: number
}

export const AmountCounter: FC<IAmountCounterProps> = ({ amount, remains, id }) => {
	const { updateAmountCartItem } = useActions()

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleMinusCount = () => {
		updateAmountCartItem({ id, amount: amount - 1 })
	}

	const handlePlusCount = () => {
		updateAmountCartItem({ id, amount: amount + 1 })
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = +e.currentTarget.value

		updateAmountCartItem({ id, amount: targetValue })
	}

	const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
	}

	const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
		const targetValue = +e.currentTarget.value

		if (targetValue > remains) {
			updateAmountCartItem({ id, amount: remains })
		}

		setIsFocused(true)
	}

	return (
		<div className={styles.counter}>
			<div
				className={cn(styles.plus, {
					[styles.disabled]: amount === 1,
					[styles.active]: amount > 1,
				})}
				onClick={handleMinusCount}
			>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
					<path fill='currentColor' d='M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z'></path>
				</svg>
			</div>
			<div
				className={cn(styles.amount, {
					[styles.focusedDiv]: isFocused,
				})}
			>
				<input
					className={styles.input}
					type={'number'}
					value={amount === 0 ? '' : amount}
					pattern='[0-9]*'
					onFocus={onFocusHandler}
					onBlur={onBlurHandler}
					onChange={onChangeHandler}
				/>
			</div>
			<div
				className={cn(styles.minus, {
					[styles.disabled]: amount === remains,
					[styles.active]: amount < remains,
				})}
				onClick={handlePlusCount}
			>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
					<path
						fill='currentColor'
						d='M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z'
					></path>
				</svg>
			</div>
		</div>
	)
}
