import { FC, useEffect, useRef, useState } from 'react'
import styles from './ChangePhoneEntryCodeModal.module.scss'
import { ChangePhoneModalType } from '../ChangePhoneModal'
import { getCounterCorrectView } from '../../login-modal/phone-password-entry-modal/PhonePasswordEntryModal'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import { Text } from '@/components/ui-kit/text/Text'

interface IChangePhoneEntryCodeModalProps {
	phoneNumber: string
	onToggle: (type: ChangePhoneModalType) => void
	close: () => void
}

export const ChangePhoneEntryCodeModal: FC<IChangePhoneEntryCodeModalProps> = ({ phoneNumber, onToggle, close }) => {
	const [counter, setCounter] = useState(20)

	const timerRef = useRef<ReturnType<typeof setInterval>>()
	const fetchTimerRef = useRef<ReturnType<typeof setTimeout>>()

	const { handleSubmit, control, watch } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

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

	useEffect(() => {
		const subscription = watch((value) => {
			if (value.code?.length === 6) {
				fetchTimerRef.current = setTimeout(() => handleSubmit(onSubmit)(), 500)
			}
		})
		return () => subscription.unsubscribe()
	}, [watch])

	const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}

	const handleGetNewCode = () => {
		setCounter(59)
	}
	return (
		<>
			<div className={styles.heading}>
				Введите код, который мы отправили на номер <br></br> {phoneNumber}
				<span className={styles.getCode} onClick={() => onToggle('phone')}>
					<Text callback={() => onToggle('phone')} color='blue' size='middle'>
						Изменить номер
					</Text>
				</span>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='code'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<InputEntryCode type='number' value={value} onChange={onChange} error={error} />
					)}
				/>
				{counter > 0 && (
					<div className={styles.counter}>
						<div>
							Получить новый код можно <div>через 00:{getCounterCorrectView(counter)}</div>
						</div>
					</div>
				)}
				{counter < 1 && (
					<div className={styles.getCode}>
						<Text callback={handleGetNewCode} color='blue' size='middle'>
							Получить новый код
						</Text>
					</div>
				)}
			</form>
		</>
	)
}
