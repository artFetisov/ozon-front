import { DetailedHTMLProps, FC, InputHTMLAttributes, MouseEvent, FocusEvent } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyInputPropsType = DefaultInputPropsType & {
	isFocused: boolean
	fieldError: string
	onClear?: (event: MouseEvent<SVGSVGElement>) => void
	onMyBlur: () => void
}

export const Input: FC<MyInputPropsType> = ({
	value,
	onClear,
	onMyBlur,
	isFocused,
	fieldError,
	placeholder,
	...props
}) => {
	const handleBlurInput = (event: FocusEvent<HTMLInputElement>) => {
		// do it later
		if (event.relatedTarget instanceof SVGSVGElement) {
			console.log('prevent')
			event.stopPropagation()
		}

		onMyBlur()
	}

	return (
		<>
			<label
				className={cn(styles.input, {
					[styles.focusedBorder]: isFocused,
					[styles.erroredBorder]: !!fieldError.length,
				})}
			>
				<input {...props} value={value} onBlur={handleBlurInput} />
				<p
					className={cn(styles.placeholder, {
						[styles.focusedP]: isFocused || !!value,
					})}
				>
					{placeholder}
				</p>
				<div className={styles.removeBtn}>
					{isFocused && !!value && (
						<svg width={16} height={16} onClick={onClear} id='remove'>
							<path
								fill='currentColor'
								d='M2.533 2.533a1.25 1.25 0 0 1 1.768 0l3.7 3.7 3.699-3.7A1.25 1.25 0 0 1 13.467 4.3L9.767 8l3.7 3.7a1.25 1.25 0 1 1-1.767 1.767L8 9.767l-3.7 3.7A1.25 1.25 0 1 1 2.534 11.7l3.7-3.7-3.7-3.7a1.25 1.25 0 0 1 0-1.767'
							></path>
						</svg>
					)}
				</div>
			</label>
			{fieldError && <div className={styles.error}>{fieldError}</div>}
		</>
	)
}
