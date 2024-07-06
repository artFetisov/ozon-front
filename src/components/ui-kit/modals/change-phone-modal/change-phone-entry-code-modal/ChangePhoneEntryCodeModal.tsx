import { FC, useEffect, useRef } from 'react'
import styles from './ChangePhoneEntryCodeModal.module.scss'
import { ChangePhoneModalType } from '../ChangePhoneModal'
import { getCounterCorrectView } from '../../login-modal/phone-password-entry-modal/PhonePasswordEntryModal'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { InputEntryCode } from '@/components/ui-kit/input-entry-code/InputEntryCode'
import { MyText } from '@/components/ui-kit/text/MyText'
import { useCounter } from '@/hooks/useCounter'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '@/hooks/useActions'
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import { AxiosError } from 'axios'
import { useTypedSelector } from '@/hooks/useTypedSelector'

interface IChangePhoneEntryCodeModalProps {
	onToggle: (type: ChangePhoneModalType) => void
	close: () => void
}

const schema = yup.object().shape({
	code: yup.string().required('Это поле обязательно для ввода').max(6),
})

export const ChangePhoneEntryCodeModal: FC<IChangePhoneEntryCodeModalProps> = ({ onToggle, close }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)

	const { counter, handleGetNewCode } = useCounter()

	const { updatePhoneCheckCode } = useActions()

	const { handleSubmit, control, watch, resetField, setError } = useForm<{ code: string }>({
		mode: 'onSubmit',
		defaultValues: { code: '' },
		resolver: yupResolver(schema),
	})

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

	const onSubmit: SubmitHandler<{ code: string }> = async ({ code }) => {
		updatePhoneCheckCode({ code })
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

	return (
		<>
			<div className={styles.heading}>
				Введите код, который мы отправили на вашу почту
				<div className={styles.getCode} onClick={() => onToggle('phone')}>
					<MyText callback={() => onToggle('phone')} color='blue' size='middle'>
						Изменить номер телефона
					</MyText>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
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
							max={6}
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
