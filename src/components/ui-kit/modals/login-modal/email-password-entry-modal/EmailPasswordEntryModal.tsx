import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styles from './EmailPasswordEntryModal.module.scss'
import { useField } from '@/hooks/useField'
import { TypeCurrentModal } from '../LoginModal'
import cn from 'classnames'
import { getCounterCorrectView } from '../phone-password-entry-modal/PhonePasswordEntryModal'

interface IEmailPasswordEntryModalProps {
	onToggle: (type: TypeCurrentModal) => void
	close: () => void
}

export const EmailPasswordEntryModal: FC<IEmailPasswordEntryModalProps> = ({ onToggle, close }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(true)
	const [counter, setCounter] = useState(20)

	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const submitRef = useRef<ReturnType<typeof setTimeout>>()

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setCounter((count) => {
				if (count === 0) {
					clearInterval(timerRef.current)
					return 0
				} else {
					return (count -= 1)
				}
			})
		}, 1000)

		return () => {
			clearInterval(timerRef.current)
			clearTimeout(submitRef.current)
		}
	}, [])

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		setFieldValue(value)

		if (value.length === 6) {
			// временное решение
			submitRef.current = setTimeout(() => {
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
		close()
	}

	const handleToPhoneModal = () => {
		onToggle('enterPhone')
	}

	return (
		<>
			<div className={styles.heading}>Введите код отправленный на вашу почту</div>
			<div>
				<label
					className={cn(styles.inputBox, {
						[styles.focusedBorder]: isFocused,
					})}
				>
					<input
						maxLength={6}
						minLength={6}
						autoFocus
						onFocus={handleFocusInput}
						onBlur={handleBlurInput}
						value={fieldValue}
						onChange={handleSetFieldValue}
					/>
				</label>
				{counter > 0 && (
					<div className={styles.counter}>
						<div>
							Получить новый код можно <div>через 00:{getCounterCorrectView(counter)}</div>
						</div>
					</div>
				)}
				{counter < 1 && <div className={styles.getCode}>Получить новый код</div>}

				<div className={styles.toggleBtn}>
					<span className={styles.text} onClick={handleToPhoneModal}>
						Вернуться на главный экран
					</span>
				</div>
			</div>
		</>
	)
}
