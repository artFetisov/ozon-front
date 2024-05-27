import { FC } from 'react'
import styles from './SendEmailModal.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import { TypeCurrentModal } from '../LoginModal'
import { IUser } from '@/types/user/user.types'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Input } from '@/components/ui-kit/input/Input'

interface ISendEmailModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

export const SendEmailModal: FC<ISendEmailModalProps> = ({ onToggle }) => {
	const { handleSubmit, control, setValue } = useForm<Pick<IUser, 'email'>>({
		mode: 'onSubmit',
		defaultValues: { email: '' },
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'email'>> = async (data) => {
		alert(JSON.stringify(data))
		close()
		onToggle('enterPasswordByEmail')
	}

	const handleClearInput = (name: keyof { email: string }) => {
		setValue(name, '')
	}

	const handleToPhoneModal = () => {
		onToggle('enterPhone')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.heading}>Войдите по почте</div>
			<div className={styles.text}>Только для зарегистрированных пользователей</div>
			<div className={styles.inputBox}>
				<Controller
					name='email'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Input<keyof { email: string }>
							type='email'
							value={value}
							onChange={onChange}
							onClear={handleClearInput}
							removeName='email'
							error={error}
							placeholder='Электронная почта'
						/>
					)}
				/>
			</div>
			<Button color='blue' variant='large' isFullWidth>
				Войти
			</Button>
			<div className={styles.toggleBtn}>
				<span className={styles.text} onClick={handleToPhoneModal}>
					Вернуться на главный экран
				</span>
			</div>
		</form>
	)
}
