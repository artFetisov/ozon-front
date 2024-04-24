import { ChangeEvent, FC } from 'react'
import styles from './PasswordEntryModal.module.scss'
import { useField } from '@/hooks/useField'
import { TypeCurrentModal } from '../LoginModal'
import cn from 'classnames'

interface IPasswordEntryModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const PasswordEntryModal: FC<IPasswordEntryModalProps> = ({ onToggle }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField()

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		setFieldValue(value)

		if (value.length === 6) {
			// временное решение
			setTimeout(() => {
				handleSubmit()
			}, 300)
		}
	}

	const handleFocusInput = () => {
		setIsFocused(true)
	}

	const handleBlurInput = () => {
		setIsFocused(false)
	}

	const handleSubmit = () => {
		alert(fieldValue)
		setFieldValue('')
	}

	return (
		<>
			<div className={styles.heading}>Введите код из пуш-уведомления</div>
			<div>
				<label
					className={cn(styles.inputBox, {
						[styles.focusedBorder]: isFocused,
					})}
				>
					<input
						maxLength={6}
						autoFocus
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
						value={fieldValue}
						onChange={handleSetFieldValue}
					/>
				</label>
			</div>
		</>
	)
}
