import { FC, useEffect, useRef } from 'react'
import styles from './EmailPasswordEntryModal.module.scss'
import { TypeCurrentModal } from '../LoginModal'
import { getCounterCorrectView } from '../phone-password-entry-modal/PhonePasswordEntryModal'
import { useCounter } from '@/hooks/useCounter'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'

interface IEmailPasswordEntryModalProps {
	onToggle: (type: TypeCurrentModal) => void
	close: () => void
}

export const EmailPasswordEntryModal: FC<IEmailPasswordEntryModalProps> = ({ onToggle, close }) => {
	const { counter, handleGetNewCode } = useCounter()

	const fetchTimerRef = useRef<ReturnType<typeof setTimeout>>()

	const { handleSubmit, control, watch } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
	})

	const onSubmit: SubmitHandler<{ code: string }> = async (data) => {
		alert(JSON.stringify(data))
		close()
	}

	useEffect(() => {
		const subscription = watch((value) => {
			if (value.code?.length === 6) {
				fetchTimerRef.current = setTimeout(() => handleSubmit(onSubmit)(), 500)
			}
		})
		return () => {
			clearInterval(fetchTimerRef.current)
			subscription.unsubscribe()
		}
	}, [watch])

	const handleToPhoneModal = () => {
		onToggle('enterPhone')
	}

	return (
		<form>
			<div className={styles.heading}>Введите код отправленный на вашу почту</div>
			<div>
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
					<div className={styles.getCode} onClick={handleGetNewCode}>
						Получить новый код
					</div>
				)}

				<div className={styles.toggleBtn}>
					<span className={styles.text} onClick={handleToPhoneModal}>
						Вернуться на главный экран
					</span>
				</div>
			</div>
		</form>
	)
}
