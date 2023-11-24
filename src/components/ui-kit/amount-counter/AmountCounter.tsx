'use client'

import { ChangeEvent, FocusEvent, DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import styles from './AmountCounter.module.scss'
import cn from 'classnames'

type DefaultDivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type MyCounterPropsType = DefaultDivPropsType & {
	amount: number
	remains: number
}

export const AmountCounter: FC<MyCounterPropsType> = ({ amount, remains }) => {
	const [count, setCount] = useState<string>(() => String(amount))
	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleMinusCount = () => {
		setCount((c) => String(Number(c - 1)))
	}

	const handlePlusCount = () => {
		setCount((c) => String(Number(c + 1)))
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const targetValue = e.currentTarget.value

		if (targetValue === '0') {
			setCount('')
		}

		if (targetValue > remains) {
			setCount(remains.toString())
			return
		}

		setCount(e.target.value)
	}

	const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
	}

	const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
	}

	return <div className={styles.counter}>
		<div className={cn(styles.plus, {
			[styles.disabled]: count === 1,
			[styles.active]: count > 1,
		})} onClick={handleMinusCount}>
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
				<path fill='currentColor' d='M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z'></path>
			</svg>
		</div>
		<div className={cn(styles.amount, {
			[styles.focusedDiv]: isFocused,
		})}>
			<input className={styles.input} type={'number'} value={count} pattern='[0-9]*' onFocus={onFocusHandler}
						 onBlur={onBlurHandler}
						 onChange={onChangeHandler} />
		</div>
		<div className={cn(styles.minus, {
			[styles.disabled]: count === remains,
			[styles.active]: count < remains,
		})} onClick={handlePlusCount}>
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
				<path fill='currentColor'
							d='M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z'>
				</path>
			</svg>
		</div>
	</div>
}