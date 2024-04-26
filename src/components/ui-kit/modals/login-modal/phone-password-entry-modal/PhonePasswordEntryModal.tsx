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
}

export const getCounterCorrectView = (count: number) => {
	return count < 10 ? '0' + count : count
}

export const PhonePasswordEntryModal: FC<IPasswordEntryModalProps> = ({ onToggle, isNewUser = true, close }) => {
	const { setFieldValue, fieldValue, setFieldError, fieldError, isFocused, setIsFocused } = useField(true)
	const [checkboxValues, setCheckboxValues] = useState<{ first: boolean; second: boolean }>({
		first: false,
		second: true,
	})
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
		setCheckboxValues({ ...checkboxValues, first: !checkboxValues.first })
	}

	const handleSetSecondCheckbox = () => {
		setCheckboxValues({ ...checkboxValues, second: !checkboxValues.second })
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

	const handleToEmailModal = () => {
		onToggle('enterEmail')
	}

	return (
		<>
			<div className={styles.heading}>Введите код из смс</div>
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
							<CheckBox checked={checkboxValues.first} onChangeMy={handleSetFirstCheckbox} />
							<span>Соглашаюсь с условиями использования сервисов Ozon и условиями обработки персональных данных</span>
						</div>
						<div className={styles.checkInfoWrapper}>
							<CheckBox checked={checkboxValues.second} onChangeMy={handleSetSecondCheckbox} />
							<span>Соглашаюсь на получение сообщений рекламного характера</span>
						</div>
						<div className={styles.btnWrapper}>
							<Button
								color='blue'
								variant='large'
								isFullWidth
								disabledP={fieldValue.length < 6 && !checkboxValues.first}
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