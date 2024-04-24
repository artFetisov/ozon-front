import { ChangeEvent, FC, KeyboardEvent } from 'react'
import styles from './SendPhoneCodeModal.module.scss'
import { Button } from '../../../button/Button'
import cn from 'classnames'
import { useField } from '@/hooks/useField'
import { TypeCurrentModal } from '../LoginModal'

const fieldPhoneError: string[] = ['Некорректный номер телефона']
const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

const getCorrectFieldValueView = (value: string, previousValue: string): string => {
	if (!value) return value

	previousValue = previousValue.replace(/[^\d]/g, '')

	const currentValue = value.replace(/[^\d]/g, '')
	if (!previousValue || currentValue.length > previousValue.length) {
		if (currentValue.length < 4) {
			return currentValue
		}

		if (currentValue.length < 7) {
			return `${currentValue.slice(0, 3)} ${currentValue.slice(3)}`
		}

		if (currentValue.length < 9) {
			return `${currentValue.slice(0, 3)} ${currentValue.slice(3, 6)} ${currentValue.slice(6)}`
		}

		return `${currentValue.slice(0, 3)} ${currentValue.slice(3, 6)} ${currentValue.slice(6, 8)} ${currentValue.slice(
			8
		)}`
	}

	return value
}

interface ISendPhoneCodeModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const SendPhoneCodeModal: FC<ISendPhoneCodeModalProps> = ({ onToggle }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(true)

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 14) return
		setFieldValue(getCorrectFieldValueView(event.currentTarget.value, fieldValue))
	}

	const handleKeyDownFieldValue = (event: KeyboardEvent<HTMLInputElement>) => {
		!allowedCharacters.includes(event.key) && event.preventDefault()
	}

	const handleSubmit = () => {
		fieldError && setFieldError('')

		if (fieldValue.replace(/[^\d]/g, '').length < 10) {
			setFieldError(fieldPhoneError[0])
			return
		}

		onToggle('password')
		setFieldValue('')
	}

	const handleFocusInput = () => {
		setIsFocused(true)
	}

	const handleBlurInput = () => {
		setIsFocused(false)
	}

	const handleToEmailModal = () => {
		onToggle('byEmail')
	}

	return (
		<>
			<div className={styles.heading}>Введите номер телефона</div>
			<div className={styles.text}>Мы отправим код на почту или в СМС</div>
			<div className={styles.inputBox}>
				<label
					className={cn(styles.input, {
						[styles.focusedBorder]: isFocused,
						[styles.erroredBorder]: !!fieldError.length,
					})}
				>
					<div className={styles.innerWrapper}>
						<input
							onKeyDown={handleKeyDownFieldValue}
							className={cn({
								[styles.active]: fieldValue.length > 0,
							})}
							maxLength={13}
							type='tel'
							autoFocus
							onFocus={handleFocusInput}
							onBlur={handleBlurInput}
							value={fieldValue}
							onChange={handleSetFieldValue}
						/>
						{fieldValue.length === 0 && (
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
				{fieldError && <div className={styles.error}>{fieldError}</div>}
			</div>
			<div>
				<Button variant='large' color='blue' isFullWidth onClick={handleSubmit}>
					Войти
				</Button>
				<div className={styles.separator}>или</div>
				<div className={styles.toggleBtn}>
					<span className={styles.text} onClick={handleToEmailModal}>
						Войти по почте
					</span>
				</div>
			</div>
		</>
	)
}
