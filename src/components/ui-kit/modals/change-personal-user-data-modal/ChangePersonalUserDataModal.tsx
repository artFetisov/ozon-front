import { FC } from 'react'
import styles from './ChangePersonalUserDataModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { Button } from '../../button/Button'
import { IUser, IUserEditPersonalDataForm, TypeUserGender } from '@/types/user/user.types'
import { IRadioGroupItem, RadioGroup } from '../../radio-group/RadioGroup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../../input/Input'
import { DatePicker } from '../../date-picker/DatePicker'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { checkIsNetworkError } from '@/utils/error/thunk.error'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IChangePersonalUserDataModalProps {
	close: () => void
	userData: IUser | null
}

const schema = yup.object().shape({
	name: yup.string(),
	lastName: yup.string(),
	patronymic: yup.string(),
	gender: yup.mixed<TypeUserGender>().oneOf(['female', 'male']),
	birthdayDate: yup.date(),
})

const options: IRadioGroupItem[] = [
	{ title: 'Мужской', value: 'male' },
	{ title: 'Женский', value: 'female' },
]

export const ChangePersonalUserDataModal: FC<IChangePersonalUserDataModalProps> = ({ close, userData }) => {
	const isLoading = useTypedSelector((state) => state.user.isLoading)

	const { updatePersonalUserData } = useActions()

	const { setValue, handleSubmit, control, setError } = useForm<IUserEditPersonalDataForm>({
		mode: 'onSubmit',
		resolver: yupResolver(schema),
		defaultValues: {
			name: userData?.name || '',
			lastName: userData?.lastName || '',
			patronymic: userData?.patronymic || '',
			gender: userData?.gender,
			birthdayDate: userData?.birthdayDate,
		},
	})

	const onSubmit: SubmitHandler<IUserEditPersonalDataForm> = (data) => {
		const finalData: IUserEditPersonalDataForm = { ...data, birthdayDate: new Date() }

		updatePersonalUserData(finalData)
			.unwrap()
			.then(() => {
				close()
			})
			.catch((error) => {
				!checkIsNetworkError(error) && setError('root', { message: error.message })
			})
	}

	const handleClearInput = (name: keyof IUserEditPersonalDataForm) => {
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
								<Input<keyof IUserEditPersonalDataForm>
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
								<Input<keyof IUserEditPersonalDataForm>
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
								<Input<keyof IUserEditPersonalDataForm>
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
					<Button
						color='lightBlue'
						variant='middle'
						style={{ marginRight: '8px' }}
						onClick={close}
						disabledP={isLoading}
					>
						Отмена
					</Button>
					<Button color='blue' variant='middle' type='submit' isLoading={isLoading}>
						Сохранить
					</Button>
				</div>
			</form>
		</div>
	)
}
