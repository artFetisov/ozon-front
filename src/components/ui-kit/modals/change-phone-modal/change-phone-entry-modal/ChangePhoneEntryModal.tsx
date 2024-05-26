import { FC } from 'react'
import { ChangePhoneModalType } from '../ChangePhoneModal'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './ChangePhoneEntryModal.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import { InputPhoneNumber } from '@/components/ui-kit/input-phone-number/InputPhoneNumber'
import { IUser } from '@/types/user/user.types'

interface IChangePhoneEntryModalProps {
	onToggle: (type: ChangePhoneModalType) => void
}

export const ChangePhoneEntryModal: FC<IChangePhoneEntryModalProps> = ({ onToggle }) => {
	const { handleSubmit, control } = useForm<Pick<IUser, 'id' | 'phone'>>({
		mode: 'onSubmit',
		defaultValues: { phone: '' },
	})

	const onSubmit: SubmitHandler<Pick<IUser, 'id' | 'phone'>> = async (data) => {
		alert(JSON.stringify(data))
		close()
		onToggle('code')
	}

	return (
		<form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.heading}>Укажите новый номер</h2>
			<div className={styles.text}>На него мы отправим код подтверждения</div>
			<div className={styles.inputBox}>
				<Controller
					name='phone'
					control={control}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<InputPhoneNumber type='tel' value={value} onChange={onChange} error={error} />
					)}
				/>
			</div>
			<Button variant='middle' color='blue' isFullWidth>
				Получить код
			</Button>
		</form>
	)
}
