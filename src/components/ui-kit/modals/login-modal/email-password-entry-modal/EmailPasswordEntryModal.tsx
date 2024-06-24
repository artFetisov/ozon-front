import { FC, useEffect } from 'react'
import styles from './EmailPasswordEntryModal.module.scss'
import { TypeCurrentModal } from '../LoginModal'
import { getCounterCorrectView } from '../phone-password-entry-modal/PhonePasswordEntryModal'
import { useCounter } from '@/hooks/useCounter'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'
import { Button } from '@/components/ui-kit/button/Button'

interface IEmailPasswordEntryModalProps {
	onToggle: (type: TypeCurrentModal) => void
	close: () => void
}

const schema = yup.object().shape({
	code: yup.string().required('Это поле обязательно для ввода').max(6),
})

export const EmailPasswordEntryModal: FC<IEmailPasswordEntryModalProps> = ({ onToggle, close }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)
	const isNewUser = useTypedSelector((state) => state.user.isNewUser)
	const tempEmail = useTypedSelector((state) => state.user.tempEmail)

	const { checkCodeByEmail, loginByEmail } = useActions()

	const handleGetNewCodeCb = async () => {
		await loginByEmail({ email: tempEmail as string })
	}

	const { counter, handleGetNewCode } = useCounter(undefined, handleGetNewCodeCb)

	const { handleSubmit, control, watch, reset, setError } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
		resolver: yupResolver(schema),
	})

	const {
		handleSubmit: handleSubmitBigForm,
		control: controlBigForm,
		resetField,
		getValues,
	} = useForm<{
		code: string
		agreement1: boolean
		agreement2: boolean
	}>({
		mode: 'onSubmit',
		defaultValues: { code: '', agreement1: false, agreement2: true },
	})

	const onSubmit: SubmitHandler<{ code: string }> = ({ code }) => {
		checkCodeByEmail({ code })
			.unwrap()
			.then(() => {
				resetField('code')
				close()
			})
			.catch((error) => {
				setError('code', { message: error.message })
			})

		reset()
	}

	const onSubmitBigForm: SubmitHandler<{ code: string }> = ({ code }) => {
		checkCodeByEmail({ code })
			.unwrap()
			.then(() => {
				resetField('code')
				close()
			})
			.catch((error) => {
				setError('code', { message: error.message })
			})
	}

	useEffect(() => {
		const subscription = watch((value) => {
			if (value.code?.length === 6) {
				handleSubmit(onSubmit)()
			}
		})
		return () => {
			subscription.unsubscribe()
		}
	}, [watch])

	const handleToPhoneModal = () => {
		onToggle('enterPhone')
	}

	return (
		<div>
			<div className={styles.heading}>Введите код отправленный на вашу почту</div>
			<div>
				{!isNewUser && (
					<>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Controller
								name='code'
								control={control}
								render={({ field: { value, onChange }, fieldState: { error } }) => (
									<InputEntryCode type='tel' value={value} onChange={onChange} error={error} isLoading={isLoading} />
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
						{counter < 1 && (
							<div className={styles.getCode} onClick={handleGetNewCode}>
								Получить новый код
							</div>
						)}
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
						{counter < 1 && (
							<div className={styles.getCode} onClick={handleGetNewCode}>
								Получить новый код
							</div>
						)}
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
								isLoading={isLoading}
							>
								Зарегистрироваться
							</Button>
						</div>
					</form>
				)}

				<div className={styles.toggleBtn}>
					<span className={styles.text} onClick={handleToPhoneModal}>
						Вернуться на главный экран
					</span>
				</div>
			</div>
		</div>
	)
}
