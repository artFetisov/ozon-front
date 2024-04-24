import { ChangeEvent, FC } from 'react'
import styles from './PasswordEntryModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import Image from 'next/image'
import { useField } from '@/hooks/useField'

interface IPasswordEntryModalProps {
	close: () => void
}

export const PasswordEntryModal: FC<IPasswordEntryModalProps> = ({ close }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField()

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		setFieldValue(event.currentTarget.value)

		if (fieldValue.length === 6) handleSubmit()
	}

	const handleFocusInput = () => {
		setIsFocused(true)
	}

	const handleBlurInput = () => {
		setIsFocused(false)
	}

	const handleSubmit = () => {
		setFieldValue('')

		close()
	}

	return (
		<div className={styles.passwordEntryModal}>
			<CloseButton callback={close} variant='inside' />
			<div className={styles.modalContent}>
				<div className={styles.logo}>
					<Image alt='logo' src={'https://ir-2.ozone.ru/graphics/ozon-id-v2.svg'} fill />
				</div>
				<div className={styles.heading}>Введите код из пуш-уведомления</div>
				<div>
					<label className={styles.inputBox}>
						<input
							autoFocus
							onFocus={handleFocusInput}
							onBlur={handleBlurInput}
							value={fieldValue}
							onChange={handleSetFieldValue}
						/>
					</label>
				</div>
			</div>
		</div>
	)
}
