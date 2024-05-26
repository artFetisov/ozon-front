import { FC, useEffect, useRef, useState } from 'react'
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
	isNewUser = true,
	close,
	phoneNumber,
}) => {
	const [counter, setCounter] = useState(20)

	const timerRef = useRef<ReturnType<typeof setInterval>>()
	const fetchTimerRef = useRef<ReturnType<typeof setTimeout>>()

	const { handleSubmit, control, watch } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

	const {
		handleSubmit: handleSubmitBigForm,
		control: controlBigForm,
		getValues,
	} = useForm<{
		code: string
		agreement1: boolean
		agreement2: boolean
	}>({
		mode: 'onSubmit',
		defaultValues: { code: '', agreement1: false, agreement2: true },
	})

	const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}

	const onSubmitBigForm: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}

	useEffect(() => {
		const subscription = watch((value) => {
			if (value.code?.length === 6) {
				fetchTimerRef.current = setTimeout(() => handleSubmit(onSubmit)(), 500)
			}
		})
		return () => subscription.unsubscribe()
	}, [watch])

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
			clearInterval(fetchTimerRef.current)
		}
	}, [])

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
					<form onSubmit={handleSubmitBigForm(onSubmitBigForm)}>
						<Controller
							name='code'
							control={controlBigForm}
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
							<Controller
								name='agreement1'
								control={controlBigForm}
								render={({ field: { value, onChange } }) => (
									<CheckBox checked={value} onChangeMy={onChange} error={!value} chSize='big' />
								)}
							/>

							<span>Соглашаюсь с условиями использования сервисов Ozon и условиями обработки персональных данных</span>
						</div>
						<div className={styles.checkInfoWrapper}>
							<Controller
								name='agreement2'
								control={controlBigForm}
								render={({ field: { value, onChange } }) => (
									<CheckBox checked={value} onChangeMy={onChange} chSize='big' />
								)}
							/>
							<span>Соглашаюсь на получение сообщений рекламного характера</span>
						</div>
						<div className={styles.btnWrapper}>
							<Button
								color='blue'
								variant='large'
								isFullWidth
								disabledP={getValues('code').length < 6 || !getValues('agreement1')}
								type='submit'
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
