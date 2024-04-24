import { ChangeEvent, FC } from 'react'
import styles from './SendEmailModal.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import { TypeCurrentModal } from '../LoginModal'
import { Input } from '@/components/ui-kit/input/Input'
import { useField } from '@/hooks/useField'

interface ISendEmailModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const SendEmailModal: FC<ISendEmailModalProps> = ({ onToggle }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(false)

	const handleToPhoneModal = () => {
		onToggle('phone')
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

	return (
		<>
			<div className={styles.heading}>Войдите по почте</div>
			<div className={styles.text}>Только для зарегистрированных пользователей</div>
			<div className={styles.inputBox}>
				<Input
					placeholder='Электронная почта'
					isFocused={isFocused}
					fieldError={fieldError}
					onFocus={handleFocusInput}
					onBlur={handleBlurInput}
					value={fieldValue}
					onChange={handleSetFieldValue}
				/>
			</div>
			<Button color='blue' variant='large' isFullWidth>
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
