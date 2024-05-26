import { DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent } from 'react'
import styles from './InputEntryCode.module.scss'
import { FieldError } from 'react-hook-form'
import { useFocus } from '@/hooks/useFocus'
import cn from 'classnames'

const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type'>

type InputEntryCodePropsType = SelectedMyInputPropsType & {
	error: FieldError | undefined
	value: string
	onChange: () => void
	max?: number
}

export const InputEntryCode = ({ value, onChange, max = 6, ...props }: InputEntryCodePropsType) => {
	const { isFocused, onBlur, onFocus } = useFocus()

	const handleKeyDownFieldValue = (event: KeyboardEvent<HTMLInputElement>) => {
		!allowedCharacters.includes(event.key) || (event.currentTarget.value.length === max && event.preventDefault())
	}

	return (
		<label
			className={cn(styles.inputBox, {
				[styles.focusedBorder]: isFocused,
			})}
		>
			<input
				{...props}
				max={max}
				autoFocus
				onFocus={onFocus}
				onBlur={onBlur}
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyDownFieldValue}
			/>
		</label>
	)
}
