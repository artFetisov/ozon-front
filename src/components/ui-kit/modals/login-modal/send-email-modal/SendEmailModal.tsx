import { FC } from 'react'
import styles from './SendEmailModal.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import { TypeCurrentModal } from '../LoginModal'
import { IUser } from '@/types/user/user.types'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Input } from '@/components/ui-kit/input/Input'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface ISendEmailModalProps {
	onToggle: (type: TypeCurrentModal) => void
}

const schema = yup.object().shape({
	email: yup.string().email('Некорректный формат почты').required('Это поле обязательно для ввода'),
})

export const SendEmailModal: FC<ISendEmailModalProps> = ({ onToggle }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)

	const { loginByEmail } = useActions()

	const { handleSubmit, control, setValue, reset, formState } = useForm<Pick<IUser, 'email'>>({
		mode: 'onSubmit',
		defaultValues: { email: '' },
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'email'>> = async ({ email }) => {
		await loginByEmail({ email })
		close()
		reset()
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
			<div className={styles.inputBox}>
				<Controller
					name='email'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Input<keyof { email: string }>
							type='email'
							value={value}
							onChange={onChange}
							autoFocus
							onClear={handleClearInput}
							removeName='email'
							error={error}
							placeholder='Электронная почта'
						/>
					)}
				/>
			</div>
			<Button color='blue' variant='large' isFullWidth isLoading={isLoading}>
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
