import { ChangeEvent, FC, MouseEvent } from 'react'
import styles from './SendEmailModal.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import { TypeCurrentModal } from '../LoginModal'
import { Input } from '@/components/ui-kit/input/Input'
import { useField } from '@/hooks/useField'
import { validEmail } from '@/utils/regex/regex'

const fieldEmailError: string[] = ['Некорректный формат почты']

interface ISendEmailModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const SendEmailModal: FC<ISendEmailModalProps> = ({ onToggle }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(false)

	const handleClearFieldValue = (event: MouseEvent<SVGSVGElement>) => {
		setFieldValue('')
	}

	const handleToPhoneModal = () => {
		onToggle('enterPhone')
	}

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		setFieldValue(event.currentTarget.value)
	}

	const handleFocusInput = () => {
		setIsFocused(true)
	}

	const handleBlurInput = () => {
		setIsFocused(false)
	}

	const handleSubmit = () => {
		if (!validEmail(fieldValue)) {
			setFieldError(fieldEmailError[0])
			return
		}

		fieldError && setFieldError('')

		alert(fieldValue)

		setFieldValue('')

		onToggle('enterPasswordByEmail')
	}

	return (
		<>
			<div className={styles.heading}>Войдите по почте</div>
			<div className={styles.text}>Только для зарегистрированных пользователей</div>
			<div className={styles.inputBox}>
				<Input
					onClear={handleClearFieldValue}
					type='email'
					placeholder='Электронная почта'
					isFocused={isFocused}
					fieldError={fieldError}
					onFocus={handleFocusInput}
					onMyBlur={handleBlurInput}
					value={fieldValue}
					onChange={handleSetFieldValue}
				/>
			</div>
			<Button color='blue' variant='large' isFullWidth onClick={handleSubmit}>
				Войти
			</Button>
			<div className={styles.toggleBtn}>
				<span className={styles.text} onClick={handleToPhoneModal}>
					Вернуться на главный экран
				</span>
			</div>
		</>
	)
}
