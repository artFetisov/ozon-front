import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import styles from './InputEntryCode.module.scss'
import { FieldError } from 'react-hook-form'
import { useFocus } from '@/hooks/useFocus'
import cn from 'classnames'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SelectedMyInputPropsType = Pick<DefaultInputPropsType, 'type'>

type InputEntryCodePropsType = SelectedMyInputPropsType & {
	error: FieldError | undefined
	value: string
	onChange: () => void
}

export const InputEntryCode: FC<InputEntryCodePropsType> = ({ value, onChange, ...props }) => {
	const { isFocused, onBlur, onFocus } = useFocus()

	return (
		<label
			className={cn(styles.inputBox, {
				[styles.focusedBorder]: isFocused,
			})}
		>
			<input
				{...props}
				maxLength={6}
				minLength={6}
				autoFocus
				onFocus={onFocus}
				onBlur={onBlur}
				value={value}
				onChange={onChange}
			/>
		</label>
	)
}
