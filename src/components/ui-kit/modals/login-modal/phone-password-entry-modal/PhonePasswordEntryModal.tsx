import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styles from './PhonePasswordEntryModal.module.scss'
import { useField } from '@/hooks/useField'
import { TypeCurrentModal } from '../LoginModal'
import cn from 'classnames'
import { Button } from '@/components/ui-kit/button/Button'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'

interface IPasswordEntryModalProps {
	onToggle: (type: TypeCurrentModal) => void
	isNewUser?: boolean
	close: () => void
	phoneNumber: string
}

export const getCounterCorrectView = (count: number) => {
	return count < 10 ? '0' + count : count
}

export const PhonePasswordEntryModal: FC<IPasswordEntryModalProps> = ({
	onToggle,
	isNewUser = true,
	close,
	phoneNumber,
}) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(true)
	const [firstCheckbox, setFirstCheckbox] = useState(true)
	const [secondCheckbox, setSecondCheckbox] = useState(true)
	const [counter, setCounter] = useState(20)

	const timerRef = useRef<ReturnType<typeof setInterval>>()
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

	const handleSetFirstCheckbox = () => {
		setFirstCheckbox(!firstCheckbox)
	}

	const handleSetSecondCheckbox = () => {
		setSecondCheckbox(!secondCheckbox)
	}

	const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.currentTarget.value
		setFieldValue(value)

		if (value.length === 6 && !isNewUser) {
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

	const handleToEnterPhoneNumber = () => {
		onToggle('enterPhone')
	}

	const handleToEmailModal = () => {
		onToggle('enterEmail')
	}

	return (
		<>
			<div className={styles.heading}>
				Введите код, который мы отправили на номер <br></br> {phoneNumber}
				<span className={styles.getCode} onClick={handleToEnterPhoneNumber}>
					Изменить номер
				</span>
			</div>
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

				{isNewUser && (
					<>
						<div className={styles.checkInfoWrapper}>
							<CheckBox
								checked={firstCheckbox}
								onChangeMy={handleSetFirstCheckbox}
								error={!firstCheckbox}
								chSize='big'
							/>
							<span>Соглашаюсь с условиями использования сервисов Ozon и условиями обработки персональных данных</span>
						</div>
						<div className={styles.checkInfoWrapper}>
							<CheckBox checked={secondCheckbox} onChangeMy={handleSetSecondCheckbox} chSize={'big'} />
							<span>Соглашаюсь на получение сообщений рекламного характера</span>
						</div>
						<div className={styles.btnWrapper}>
							<Button
								color='blue'
								variant='large'
								isFullWidth
								disabledP={fieldValue.length < 6 || !firstCheckbox}
								onClick={handleSubmit}
							>
								Зарегистрироваться
							</Button>
						</div>
					</>
				)}
				<div className={styles.toggleBtn}>
					<span className={styles.text} onClick={handleToEmailModal}>
						Войти по почте
					</span>
				</div>
			</div>
		</>
	)
}
