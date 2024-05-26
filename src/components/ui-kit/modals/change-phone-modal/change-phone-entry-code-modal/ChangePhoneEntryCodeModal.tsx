import { FC, useEffect, useRef, useState } from 'react'
import styles from './ChangePhoneEntryCodeModal.module.scss'
import { ChangePhoneModalType } from '../ChangePhoneModal'
import { getCounterCorrectView } from '../../login-modal/phone-password-entry-modal/PhonePasswordEntryModal'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'

interface IChangePhoneEntryCodeModalProps {
	phoneNumber: string
	onToggle: (type: ChangePhoneModalType) => void
}

export const ChangePhoneEntryCodeModal: FC<IChangePhoneEntryCodeModalProps> = ({ phoneNumber, onToggle }) => {
	const [counter, setCounter] = useState(20)

	const timerRef = useRef<ReturnType<typeof setInterval>>()

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

	const { handleSubmit, control } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

	const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}
	return (
		<>
			<div className={styles.heading}>
				Введите код, который мы отправили на номер <br></br> {phoneNumber}
				<span className={styles.getCode} onClick={() => onToggle('phone')}>
					Изменить номер
				</span>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='code'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<InputEntryCode type='text' value={value} onChange={onChange} error={error} />
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
			</form>
		</>
	)
}
