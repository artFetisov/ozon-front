import { FC } from 'react'
import styles from './ChangePersonalUserDataModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { Button } from '../../button/Button'
import { IUser, IUserEditNameAndGenderForm } from '@/types/user/user.types'
import { IRadioGroupItem, RadioGroup } from '../../radio-group/RadioGroup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../input/Input'
import { DatePicker } from '../../date-picker/DatePicker'

interface IChangePersonalUserDataModalProps {
	close: () => void
	userData: IUser
}

const options: IRadioGroupItem[] = [
	{ title: 'Мужской', value: 'man' },
	{ title: 'Женский', value: 'woman' },
]

export const ChangePersonalUserDataModal: FC<IChangePersonalUserDataModalProps> = ({ close, userData }) => {
	const { setValue, handleSubmit, control } = useForm<IUserEditNameAndGenderForm>({
		mode: 'onSubmit',
		defaultValues: {
			name: userData.name,
			lastName: userData.lastName,
			patronymic: userData.patronymic,
			gender: userData.gender,
			birthdayDate: userData.birthdayDate,
		},
	})

	const onSubmit: SubmitHandler<IUserEditNameAndGenderForm> = async (data) => {
		alert(JSON.stringify(data))
	}

	const handleClearInput = (name: keyof IUserEditNameAndGenderForm) => {
		setValue(name, '')
	}

	return (
		<div className={styles.personalDataModal}>
			<CloseButton variant='inside' callback={close} />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.heading}>Личные данные</div>
				<div>
					<div className={styles.input}>
						<Controller
							name='name'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<Input<keyof IUserEditNameAndGenderForm>
									removeName='name'
									onClear={handleClearInput}
									value={value}
									onChange={onChange}
									type='text'
									placeholder='Имя'
									error={error}
								/>
							)}
						/>
					</div>
					<div className={styles.input}>
						<Controller
							name='patronymic'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<Input<keyof IUserEditNameAndGenderForm>
									value={value}
									removeName='patronymic'
									onChange={onChange}
									onClear={handleClearInput}
									type='text'
									placeholder='Отчество'
									error={error}
								/>
							)}
						/>
					</div>
					<div className={styles.input}>
						<Controller
							name='lastName'
							control={control}
							render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
								<Input<keyof IUserEditNameAndGenderForm>
									value={value}
									onChange={onChange}
									onClear={handleClearInput}
									type='text'
									placeholder='Фамилия'
									removeName='lastName'
									error={error}
								/>
							)}
						/>
					</div>
					<div className={styles.input}>
						<Controller
							name='birthdayDate'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<DatePicker placeholder='Дата рождения' value={value} onChange={onChange} error={error} />
							)}
						/>
					</div>
					<div className={styles.radioGroupBox}>
						<Controller
							name='gender'
							control={control}
							render={({ field: { value, onChange } }) => (
								<RadioGroup label='Пол' options={options} onChange={onChange} value={value} />
							)}
						/>
					</div>
				</div>
				<div className={styles.btnsBox}>
					<Button color='lightBlue' variant='middle' style={{ marginRight: '8px' }} onClick={close}>
						Отмена
					</Button>
					<Button color='blue' variant='middle' type='submit'>
						Сохранить
					</Button>
				</div>
			</form>
		</div>
	)
}
