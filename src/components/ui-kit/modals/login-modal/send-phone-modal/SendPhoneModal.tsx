import { FC } from 'react'
import styles from './SendPhoneModal.module.scss'
import { Button } from '../../../button/Button'
import { TypeCurrentModal } from '../LoginModal'
import { InputPhoneNumber } from '@/components/ui-kit/input-phone-number/InputPhoneNumber'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '@/types/user/user.types'
import { useActions } from '@/hooks/useActions'
import { AxiosError } from 'axios'
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { getPhoneNumberForRequest } from '@/utils/phone/phone'
import { useTypedSelector } from '@/hooks/useTypedSelector'

interface ISendPhoneCodeModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

const schema = yup.object().shape({
	phone: yup.string().required('Это поле обязательно для ввода').min(13, 'Введите корректный номер'),
})

export const SendPhoneModal: FC<ISendPhoneCodeModalProps> = ({ onToggle }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)

	const { loginByPhone } = useActions()

	const { handleSubmit, control, resetField, setError } = useForm<Pick<IUser, 'phone'>>({
		mode: 'onSubmit',
		defaultValues: { phone: '' },
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'phone'>> = ({ phone }) => {
		loginByPhone({ phone: getPhoneNumberForRequest(phone) })
			.unwrap()
			.then(() => {
				resetField('phone')
				onToggle('enterPasswordByPhone')
			})
			.catch((error: Error | AxiosError) => {
				!checkIsNetworkError(error) && setError('phone', { message: error.message })
			})
	}

	const handleToEmailModal = () => {
		onToggle('enterEmail')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.heading}>Введите номер телефона</div>
			<div className={styles.text}>Мы отправим код в СМС</div>
			<div className={styles.inputBox}>
				<Controller
					name='phone'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<InputPhoneNumber type='tel' value={value} onChange={onChange} error={error} />
					)}
				/>
			</div>
			<div>
				<Button variant='large' color='blue' isFullWidth type='submit' isLoading={isLoading}>
					Войти
				</Button>
				<div className={styles.separator}>или</div>
				<div className={styles.toggleBtn}>
					<span className={styles.text} onClick={handleToEmailModal}>
						Войти по почте
					</span>
				</div>
			</div>
		</form>
	)
}
