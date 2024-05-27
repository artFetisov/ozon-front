import { DetailedHTMLProps, FC, InputHTMLAttributes, FocusEvent, useState } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type' | 'placeholder'>

type MyInputPropsType<T> = SelectedMyInputPropsType & {
	onClear?: (name: T) => void
	removeName?: T
	value: string
	onChange: () => void
	error: FieldError | undefined
}

export const Input = <T,>({ placeholder, type, error, value, onClear, removeName, ...props }: MyInputPropsType<T>) => {
	const [isFocused, setIsFocused] = useState(false)

	const onFocus = () => {
		setIsFocused(true)
	}

	const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
		if (event.relatedTarget?.id === 'remove' || event.relatedTarget?.id === 'remove-box') {
			return
		}
		setIsFocused(false)
	}

	const handleClear = () => {
		onClear && removeName && onClear(removeName)
	}

	return (
		<>
			<label
				className={cn(styles.input, {
					[styles.erroredBorder]: !!error?.message?.length,
				})}
			>
				<input type={type} {...props} onFocus={onFocus} onBlur={onBlur} value={value} />
				<p
					className={cn(styles.placeholder, {
						[styles.focusedP]: isFocused || !!value,
					})}
				>
					{placeholder}
				</p>
				{isFocused && !!value && (
					<div className={styles.removeBtn} id='remove-box' tabIndex={0}>
						<span draggable onClick={handleClear} tabIndex={0} id='remove'>
							<svg width={16} height={16}>
								<path
									fill='currentColor'
									d='M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.467 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.767 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7l3.7-3.7-3.7-3.7a1.25 1.25 0 0 1 0-1.767'
								></path>
							</svg>
						</span>
					</div>
				)}
			</label>
			{error?.message && <div className={styles.error}>{error.message}</div>}
		</>
	)
}
