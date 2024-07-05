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
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import { AxiosError } from 'axios'

interface IEmailPasswordEntryModalProps {
	onToggle: (type: TypeCurrentModal) => void
	close: () => void
}

const schema = yup.object().shape({
	code: yup.string().required('Это поле обязательно для ввода').max(6),
})

const schemaB = yup.object().shape({
	codeB: yup.string().required('Это поле обязательно для ввода').max(6),
	agreement1: yup.boolean().required(),
	agreement2: yup.boolean().required(),
})

export const EmailPasswordEntryModal: FC<IEmailPasswordEntryModalProps> = ({ onToggle, close }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)
	const isNewUser = useTypedSelector((state) => state.user.isNewUser)
	const tempEmail = useTypedSelector((state) => state.user.tempEmail)

	const { checkCodeByEmail, loginByEmail } = useActions()

	const handleGetNewCodeCb = () => {
		loginByEmail({ email: tempEmail as string })
			.unwrap()
			.catch((error: Error | AxiosError) => {
				!checkIsNetworkError(error) && setError('code', { message: error.message })
			})
	}

	const { counter, handleGetNewCode } = useCounter(undefined, handleGetNewCodeCb)

	const { handleSubmit, control, watch, setError, resetField } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
		resolver: yupResolver(schema),
	})

	const {
		handleSubmit: handleSubmitBigForm,
		control: controlBigForm,
		resetField: resetFieldB,
		setError: setErrorB,
		watch: watchB,
		getValues,
	} = useForm<{
		codeB: string
		agreement1: boolean
		agreement2: boolean
	}>({
		mode: 'onSubmit',
		defaultValues: { codeB: '', agreement1: false, agreement2: true },
		resolver: yupResolver(schemaB),
	})

	const onSubmit: SubmitHandler<{ code: string }> = ({ code }) => {
		checkCodeByEmail({ code })
			.unwrap()
			.then(() => {
				resetField('code')
				close()
			})
			.catch((error) => {
				resetField('code')
				!checkIsNetworkError(error) && setError('code', { message: error.message })
			})
	}

	const onSubmitBigForm: SubmitHandler<{ codeB: string }> = ({ codeB }) => {
		checkCodeByEmail({ code: codeB })
			.unwrap()
			.then(() => {
				resetFieldB('codeB')
				close()
			})
			.catch((error) => {
				resetFieldB('codeB')
				!checkIsNetworkError(error) && setErrorB('codeB', { message: error.message })
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
									<InputEntryCode
										type='tel'
										value={watch('code')}
										onChange={onChange}
										error={error}
										isLoading={isLoading}
									/>
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
							name='codeB'
							control={controlBigForm}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<InputEntryCode
									type='tel'
									value={watchB('codeB')}
									onChange={onChange}
									error={error}
									isLoading={isLoading}
								/>
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
									<CheckBox checked={watchB('agreement1')} onChangeMy={onChange} error={!value} chSize='big' />
								)}
							/>

							<span>Соглашаюсь с условиями использования сервисов Ozon и условиями обработки персональных данных</span>
						</div>
						<div className={styles.checkInfoWrapper}>
							<Controller
								name='agreement2'
								control={controlBigForm}
								render={({ field: { value, onChange } }) => (
									<CheckBox checked={watchB('agreement2')} onChangeMy={onChange} chSize='big' />
								)}
							/>
							<span>Соглашаюсь на получение сообщений рекламного характера</span>
						</div>
						<div className={styles.btnWrapper}>
							<Button
								color='blue'
								variant='large'
								isFullWidth
								disabledP={getValues('codeB').length < 6 || !getValues('agreement1')}
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
