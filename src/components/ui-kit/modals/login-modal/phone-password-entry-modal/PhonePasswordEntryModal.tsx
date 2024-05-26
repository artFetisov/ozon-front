import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styles from './PhonePasswordEntryModal.module.scss'
import { TypeCurrentModal } from '../LoginModal'
import { Button } from '@/components/ui-kit/button/Button'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

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
	isNewUser = false,
	close,
	phoneNumber,
}) => {
	const [firstCheckbox, setFirstCheckbox] = useState(true)
	const [secondCheckbox, setSecondCheckbox] = useState(true)
	const [counter, setCounter] = useState(20)

	const timerRef = useRef<ReturnType<typeof setInterval>>()

	const { handleSubmit, control } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

	const { handleSubmit: handleSubmitBigForm, control: controlBifForm } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

	const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}

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
		}
	}, [])

	const handleSetFirstCheckbox = () => {
		setFirstCheckbox(!firstCheckbox)
	}

	const handleSetSecondCheckbox = () => {
		setSecondCheckbox(!secondCheckbox)
	}

	// const handleSetFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const value = event.currentTarget.value
	// 	setFieldValue(value)

	// 	if (value.length === 6 && !isNewUser) {
	// 		submitRef.current = setTimeout(() => {
	// 			handleSubmit()
	// 		}, 300)
	// 	}
	// }

	// const handleSubmitCustom = () => {
	// 	alert(fieldValue)
	// 	setFieldValue('')
	// 	close()
	// }

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
				{!isNewUser && (
					<>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Controller
								name='code'
								control={control}
								render={({ field: { value, onChange }, fieldState: { error } }) => (
									<InputEntryCode type='tel' value={value} onChange={onChange} error={error} />
								)}
							/>
						</form>
						{counter > 0 && (
							<div className={styles.counter}>
								<div>
									Получить новый код можно <div>через 00:{getCounterCorrectView(counter)}</div>
								</div>
							</div>
						)}
						{counter < 1 && <div className={styles.getCode}>Получить новый код</div>}
					</>
				)}

				{isNewUser && (
					<form onSubmit={handleSubmitBigForm(onSubmit)}>
						<Controller
							name='code'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<InputEntryCode type='tel' value={value} onChange={onChange} error={error} />
							)}
						/>
						{counter > 0 && (
							<div className={styles.counter}>
								<div>
									Получить новый код можно <div>через 00:{getCounterCorrectView(counter)}</div>
								</div>
							</div>
						)}
						{counter < 1 && <div className={styles.getCode}>Получить новый код</div>}
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
								// disabledP={fieldValue.length < 6 || !firstCheckbox}
								// onClick={handleSubmitCustom}
							>
								Зарегистрироваться
							</Button>
						</div>
					</form>
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
