import { FC } from 'react'
import { ChangePhoneModalType } from '../ChangePhoneModal'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './ChangePhoneEntryModal.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import { InputPhoneNumber } from '@/components/ui-kit/input-phone-number/InputPhoneNumber'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '@/hooks/useActions'
import { getPhoneNumberForRequest } from '@/utils/phone/phone'
import { AxiosError } from 'axios'
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import { useTypedSelector } from '@/hooks/useTypedSelector'

interface IChangePhoneEntryModalProps {
	onToggle: (type: ChangePhoneModalType) => void
}

const schema = yup.object().shape({
	phone: yup.string().min(13, 'Введите корректный номер'),
})

export const ChangePhoneEntryModal: FC<IChangePhoneEntryModalProps> = ({ onToggle }) => {
	const { handleSubmit, control, resetField, setError } = useForm<{ phone?: string }>({
		mode: 'onSubmit',
		defaultValues: { phone: '' },
		resolver: yupResolver(schema),
	})

	const isLoading = useTypedSelector((state) => state.user.isLoading)

	const { updatePhoneNumber } = useActions()

	const onSubmit: SubmitHandler<{ phone?: string }> = ({ phone }) => {
		updatePhoneNumber({ phone: getPhoneNumberForRequest(phone) })
			.unwrap()
			.then(() => {
				resetField('phone')
				onToggle('code')
			})
			.catch((error: Error | AxiosError) => {
				debugger
				!checkIsNetworkError(error) && setError('phone', { message: error.message })
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.heading}>Укажите новый номер</h2>
			<div className={styles.text}>Мы отправим код подтверждения на вашу почту</div>
			<div className={styles.inputBox}>
				<Controller
					name='phone'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<InputPhoneNumber type='tel' value={value} onChange={onChange} error={error} />
					)}
				/>
			</div>
			<Button variant='middle' color='blue' isFullWidth isLoading={isLoading}>
				Получить код
			</Button>
		</form>
	)
}
