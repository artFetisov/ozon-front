import { FC, useEffect, useRef } from 'react'
import styles from './ChangeEmailEntryCodeModal.module.scss'
import { ChangeEmailModalType } from '../ChangeEmailModal'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import { MyText } from '@/components/ui-kit/text/MyText'
import { getCounterCorrectView } from '../../login-modal/phone-password-entry-modal/PhonePasswordEntryModal'
import { useCounter } from '@/hooks/useCounter'

interface IChangeEntryCodeModal {
	onToggle: (type: ChangeEmailModalType) => void
	close: () => void
	newEmail: string
}

export const ChangeEmailEntryCodeModal: FC<IChangeEntryCodeModal> = ({ onToggle, newEmail, close }) => {
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

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.heading}>Введите код</h2>
			<div className={styles.text}>
				<span>Мы отправили текст на почту:</span>
				<div className={styles.heading}>{newEmail}</div>
			</div>
			<div style={{ marginBottom: '24px' }}>
				<MyText callback={() => onToggle('email')} color='blue' size='middle'>
					Изменить
				</MyText>
			</div>
			<div className={styles.inputBox}>
				<Controller
					name='code'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<InputEntryCode type='number' value={value} onChange={onChange} error={error} />
					)}
				/>
			</div>
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
	)
}
