import { DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent } from 'react'
import styles from './InputEntryCode.module.scss'
import { FieldError } from 'react-hook-form'
import { useFocus } from '@/hooks/useFocus'
import cn from 'classnames'
import { InputLoader } from '../loaders/InputLoader/InputLoader'

const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type'>

type InputEntryCodePropsType = SelectedMyInputPropsType & {
	error: FieldError | undefined
	value: string
	onChange: () => void
	max?: number
	isLoading?: boolean
}

export const InputEntryCode = ({ value, onChange, error, isLoading, max = 6, ...props }: InputEntryCodePropsType) => {
	const { isFocused, onBlur, onFocus } = useFocus()

	const handleKeyDownFieldValue = (event: KeyboardEvent<HTMLInputElement>) => {
		if (!allowedCharacters.includes(event.key)) {
			event.preventDefault()
		}
	}

	return (
		<>
			<label
				className={cn(styles.inputBox, {
					[styles.focusedBorder]: isFocused,
					[styles.erroredBorder]: !!error?.message?.length,
				})}
			>
				<input
					{...props}
					maxLength={max}
					autoFocus
					onFocus={onFocus}
					onBlur={onBlur}
					value={value}
					onChange={onChange}
					onKeyDown={handleKeyDownFieldValue}
				/>
				{isLoading && (
					<div className={styles.loader}>
						<InputLoader />
					</div>
				)}
			</label>
			{error?.message && <div className={styles.error}>{error?.message}</div>}
		</>
	)
}
