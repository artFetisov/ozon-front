import { FC, useEffect } from 'react'
import styles from './ChangeEmailEntryCodeModal.module.scss'
import { ChangeEmailModalType } from '../ChangeEmailModal'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import { MyText } from '@/components/ui-kit/text/MyText'
import { getCounterCorrectView } from '../../login-modal/phone-password-entry-modal/PhonePasswordEntryModal'
import { useCounter } from '@/hooks/useCounter'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import { AxiosError } from 'axios'

interface IChangeEntryCodeModal {
	onToggle: (type: ChangeEmailModalType) => void
	close: () => void
}

const schema = yup.object().shape({
	code: yup.string().required('Это поле обязательно для ввода').max(6),
})

export const ChangeEmailEntryCodeModal: FC<IChangeEntryCodeModal> = ({ onToggle, close }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)
	const newEmail = useTypedSelector((state) => state.user.tempEmail)

	const { counter, handleGetNewCode } = useCounter()

	const { updateEmailCheckCode } = useActions()

	const { handleSubmit, control, watch, resetField, setError } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<{ code: string }> = ({ code }) => {
		updateEmailCheckCode({ code })
			.unwrap()
			.then(() => {
				resetField('code')
				close()
			})
			.catch((error: Error | AxiosError) => {
				resetField('code')
				!checkIsNetworkError(error) && setError('code', { message: error.message })
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
						<InputEntryCode
							type='number'
							value={watch('code')}
							onChange={onChange}
							error={error}
							isLoading={isLoading}
						/>
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
