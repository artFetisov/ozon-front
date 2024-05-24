import { FC, MouseEvent } from 'react'
import styles from './ChangePersonalUserDataModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { Button } from '../../button/Button'
import { Input } from '../../input/Input'
import { IUser, IUserEditNameAndGenderForm } from '@/types/user/user.types'
import { getDateViewWithDots } from '@/utils/date/date'
import { IRadioGroupItem, RadioGroup } from '../../radio-group/RadioGroup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { HookFormInput } from '../../input/HookFormInput'

interface IChangePersonalUserDataModalProps {
	close: () => void
	userData: IUser
}

const radioGroupValues: IRadioGroupItem[] = [
	{ title: 'Мужской', value: 'man' },
	{ title: 'Женский', value: 'woman' },
]

export const ChangePersonalUserDataModal: FC<IChangePersonalUserDataModalProps> = ({ close, userData }) => {
	const {
		setValue,
		handleSubmit,
		register,
		formState: { errors },
		control,
		getValues,
	} = useForm<IUserEditNameAndGenderForm>({
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
			<form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.heading}>Личные данные</div>
				<div>
					<div className={styles.input}>
						<Controller
							name='name'
							control={control}
							render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
								<HookFormInput
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
						{/* <HookFormInput {...register('name')} type='text' placeholder='Имя' field={field} /> */}
					</div>
					<div className={styles.input}>
						<Controller
							name='patronymic'
							control={control}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<HookFormInput value={value} onChange={onChange} type='text' placeholder='Отчество' error={error} />
							)}
						/>
						{/* <HookFormInput {...register('patronymic')} type='text' placeholder='Отчество' /> */}
					</div>
					<div className={styles.input}>
						<Controller
							name='lastName'
							control={control}
							render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
								<HookFormInput value={value} onChange={onChange} type='text' placeholder='Фамилия' error={error} />
							)}
						/>
						{/* <HookFormInput {...register('lastName')} type='text' placeholder='Фамилия' /> */}
					</div>
					<div className={styles.input}>
						{/* <Controller
							name='birthdayDate'
							control={control}
							render={({ field: { value, onBlur, onChange }, fieldState }) => (
								<HookFormInput
									value={value as Date}
									onBlur={onBlur}
									onChange={onChange}
									type='text'
									placeholder='Дата рождения'
								/>
							)}
						/> */}
						{/* <HookFormInput {...register('birthdayDate')} type='text' placeholder='Дата рождения' /> */}
					</div>
					<div className={styles.radioGroupBox}>
						<Controller
							name='gender'
							control={control}
							render={({ field, fieldState: { error } }) => <RadioGroup label='Пол' valuesArray={radioGroupValues} />}
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
