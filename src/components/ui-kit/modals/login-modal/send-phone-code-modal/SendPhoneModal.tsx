import { FC } from 'react'
import styles from './SendPhoneModal.module.scss'
import { Button } from '../../../button/Button'
import { TypeCurrentModal } from '../LoginModal'
import { InputPhoneNumber } from '@/components/ui-kit/input-phone-number/InputPhoneNumber'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '@/types/user/user.types'

interface ISendPhoneCodeModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const SendPhoneModal: FC<ISendPhoneCodeModalProps> = ({ onToggle }) => {
	const { handleSubmit, control } = useForm<Pick<IUser, 'id' | 'phone'>>({
		mode: 'onSubmit',
		defaultValues: { phone: '' },
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'id' | 'phone'>> = async (data) => {
		alert(JSON.stringify(data))
		onToggle('enterPasswordByPhone')
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
				<Button variant='large' color='blue' isFullWidth type='submit'>
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
