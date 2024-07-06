import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent } from 'react'
import styles from './InputPhoneNumber.module.scss'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { getCorrectPhoneNumberView } from '@/utils/phone/phone'
import { useFocus } from '@/hooks/useFocus'

const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type'>

type InputPhoneNumberPropsType = SelectedMyInputPropsType & {
	error: FieldError | undefined
	value?: string
	onChange: (value: string) => void
}

export const InputPhoneNumber: FC<InputPhoneNumberPropsType> = ({ error, value, onChange, ...props }) => {
	const { isFocused, onBlur, onFocus } = useFocus()

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 14) return
		onChange(getCorrectPhoneNumberView(event.currentTarget.value, value))
	}

	const handleKeyDownFieldValue = (event: KeyboardEvent<HTMLInputElement>) => {
		!allowedCharacters.includes(event.key) && event.preventDefault()
	}
	return (
		<div className={styles.container}>
			<label
				className={cn(styles.input, {
					[styles.focusedBorder]: isFocused,
					[styles.erroredBorder]: !!error?.message,
				})}
			>
				<div className={styles.innerWrapper}>
					<input
						onKeyDown={handleKeyDownFieldValue}
						className={cn({
							[styles.active]: !!value && value?.length > 0,
						})}
						maxLength={13}
						type='tel'
						autoFocus
						onFocus={onFocus}
						onBlur={onBlur}
						onChange={handleSetFieldValue}
						value={value}
						{...props}
					/>
					{!value && (
						<p
							className={cn({
								[styles.focusedP]: isFocused,
							})}
						>
							999 999 99 99
						</p>
					)}
				</div>
			</label>
			<div className={styles.code}>
				<span>+</span>7
			</div>
			{error?.message && <div className={styles.error}>{error.message}</div>}
		</div>
	)
}
