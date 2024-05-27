import { FC } from 'react'
import styles from './ChangeEmailEntryModal.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui-kit/button/Button'
import { IUser } from '@/types/user/user.types'
import { ChangeEmailModalType } from '../ChangeEmailModal'
import { Input } from '@/components/ui-kit/input/Input'

interface IChangeEntryModal {
	onToggle: (type: ChangeEmailModalType) => void
}

export const ChangeEmailEntryModal: FC<IChangeEntryModal> = ({ onToggle }) => {
	const { handleSubmit, control, setValue } = useForm<Pick<IUser, 'email'>>({
		mode: 'onSubmit',
		defaultValues: { email: '' },
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'email'>> = async (data) => {
		alert(JSON.stringify(data))
		close()
		onToggle('code')
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
			<Button variant='middle' color='blue' isFullWidth>
				Получить код
			</Button>
		</form>
	)
}
