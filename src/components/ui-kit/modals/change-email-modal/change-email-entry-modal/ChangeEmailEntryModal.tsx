import { FC } from 'react'
import styles from './ChangeEmailEntryModal.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui-kit/button/Button'
import { IUser } from '@/types/user/user.types'
import { ChangeEmailModalType } from '../ChangeEmailModal'
import { Input } from '@/components/ui-kit/input/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import { AxiosError } from 'axios'

interface IChangeEntryModalProps {
	onToggle: (type: ChangeEmailModalType) => void
}

const schema = yup.object().shape({
	email: yup.string().email('Некорректный формат почты').required('Это поле обязательно для ввода'),
})

export const ChangeEmailEntryModal: FC<IChangeEntryModalProps> = ({ onToggle }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)

	const { updateEmail } = useActions()

	const { handleSubmit, control, setValue, resetField, setError } = useForm<Pick<IUser, 'email'>>({
		mode: 'onSubmit',
		defaultValues: { email: '' },
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'email'>> = (data) => {
		updateEmail({ newEmail: data.email })
			.unwrap()
			.then(() => {
				resetField('email')
				onToggle('code')
			})
			.catch((error: Error | AxiosError) => {
				!checkIsNetworkError(error) && setError('email', { message: error.message })
			})
	}

	const handleClearInput = (name: keyof { email: string }) => {
		setValue(name, '')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.heading}>Главное - безопасность</h2>
			<div className={styles.text}>Введите новую почту</div>
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
							placeholder='Новая почта'
						/>
					)}
				/>
			</div>
			<Button variant='middle' color='blue' isFullWidth isLoading={isLoading}>
				Получить код
			</Button>
		</form>
	)
}
