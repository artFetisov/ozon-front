import { FC, useEffect, useRef } from 'react'
import styles from './ChangePhoneEntryCodeModal.module.scss'
import { ChangePhoneModalType } from '../ChangePhoneModal'
import { getCounterCorrectView } from '../../login-modal/phone-password-entry-modal/PhonePasswordEntryModal'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import { MyText } from '@/components/ui-kit/text/MyText'
import { useCounter } from '@/hooks/useCounter'

interface IChangePhoneEntryCodeModalProps {
	phoneNumber: string
	onToggle: (type: ChangePhoneModalType) => void
	close: () => void
}

export const ChangePhoneEntryCodeModal: FC<IChangePhoneEntryCodeModalProps> = ({ phoneNumber, onToggle, close }) => {
	const { counter, handleGetNewCode } = useCounter()

	const fetchTimerRef = useRef<ReturnType<typeof setTimeout>>()

	const { handleSubmit, control, watch } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

	useEffect(() => {
		const subscription = watch((value) => {
			if (value.code?.length === 6) {
				fetchTimerRef.current = setTimeout(() => handleSubmit(onSubmit)(), 500)
			}
		})
		return () => {
			subscription.unsubscribe()
			clearTimeout(fetchTimerRef.current)
		}
	}, [watch])

	const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}

	return (
		<>
			<div className={styles.heading}>
				Введите код, который мы отправили на номер <br></br> {phoneNumber}
				<span className={styles.getCode} onClick={() => onToggle('phone')}>
					<MyText callback={() => onToggle('phone')} color='blue' size='middle'>
						Изменить номер
					</MyText>
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
						<MyText callback={handleGetNewCode} color='blue' size='middle'>
							Получить новый код
						</MyText>
					</div>
				)}
			</form>
		</>
	)
}
