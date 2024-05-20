import { FC } from 'react'
import styles from './ChangePersonalUserDataModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { Button } from '../../button/Button'
import { Input } from '../../input/Input'
import { IUser } from '@/types/user/user.types'
import { getDateViewWithDots } from '@/utils/date/date'
import { IRadioGroupItem, RadioGroup } from '../../radio-group/RadioGroup'

interface IChangePersonalUserDataModalProps {
	close: () => void
	userData: IUser
}

const radioGroupValues: IRadioGroupItem[] = [
	{ title: 'Мужской', value: 'man' },
	{ title: 'Женский', value: 'woman' },
]

export const ChangePersonalUserDataModal: FC<IChangePersonalUserDataModalProps> = ({ close, userData }) => {
	return (
		<div className={styles.personalDataModal}>
			<CloseButton variant='inside' callback={close} />
			<div className={styles.content}>
				<div className={styles.heading}>Личные данные</div>
				<div>
					<div className={styles.input}>
						<Input
							type='text'
							placeholder='Имя'
							value={userData.name}
							isFocused={false}
							fieldError={''}
							onMyBlur={() => {}}
						/>
					</div>
					<div className={styles.input}>
						<Input
							type='text'
							placeholder='Отчество'
							value={userData.patronymic}
							isFocused={false}
							fieldError={''}
							onMyBlur={() => {}}
						/>
					</div>
					<div className={styles.input}>
						<Input
							type='text'
							placeholder='Фамилия'
							value={userData.lastName}
							isFocused={false}
							fieldError={''}
							onMyBlur={() => {}}
						/>
					</div>
					<div className={styles.input}>
						<Input
							type='text'
							placeholder='Дата рождения'
							value={getDateViewWithDots(userData?.birthdayDate as Date)}
							isFocused={false}
							fieldError={''}
							onMyBlur={() => {}}
						/>
					</div>
					<div className={styles.radioGroupBox}>
						<RadioGroup label='Пол' valuesArray={radioGroupValues} />
					</div>
				</div>
				<div className={styles.btnsBox}>
					<Button color='lightBlue' variant='middle' style={{ marginRight: '8px' }} onClick={close}>
						Отмена
					</Button>
					<Button color='blue' variant='middle'>
						Сохранить
					</Button>
				</div>
			</div>
		</div>
	)
}
