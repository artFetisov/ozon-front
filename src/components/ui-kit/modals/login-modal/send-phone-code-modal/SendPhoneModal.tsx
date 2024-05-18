import { ChangeEvent, FC, KeyboardEvent } from 'react'
import styles from './SendPhoneModal.module.scss'
import { Button } from '../../../button/Button'
import cn from 'classnames'
import { useField } from '@/hooks/useField'
import { TypeCurrentModal } from '../LoginModal'
import { getCorrectPhoneNumberView } from '@/utils/phone/phone'

const fieldPhoneError: string[] = ['Некорректный номер телефона']
const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace']

interface ISendPhoneCodeModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const SendPhoneModal: FC<ISendPhoneCodeModalProps> = ({ onToggle }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(true)

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 14) return
		setFieldValue(getCorrectPhoneNumberView(event.currentTarget.value, fieldValue))
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

		onToggle('enterPasswordByPhone')
		setFieldValue('')
	}

	const handleFocusInput = () => {
		setIsFocused(true)
	}

	const handleBlurInput = () => {
		setIsFocused(false)
	}

	const handleToEmailModal = () => {
		onToggle('enterEmail')
	}

	return (
		<>
			<div className={styles.heading}>Введите номер телефона</div>
			<div className={styles.text}>Мы отправим код в СМС</div>
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
