import { FC } from 'react'
import styles from './PersonalUserData.module.scss'
import { IUser } from '@/types/user/user.types'
import { getCorrectDateView } from '@/utils/date/date'
import { getCorrectPhoneNumberView } from '@/utils/phone/phone'
import Link from 'next/link'
import { PATHS } from '@/constants/paths'

interface IPersonalUserDataProps {
	userData: IUser | null
}

export const PersonalUserData: FC<IPersonalUserDataProps> = ({ userData }) => {
	return (
		<div className={styles.personalUserData}>
			<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} className={styles.icon}>
				<path
					fill='currentColor'
					d='M8 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8.3 4.286c.016.015.185.165.5.323.376.187.971.391 1.8.391s1.425-.204 1.8-.391c.175-.088.355-.19.5-.323a1 1 0 0 1 1.407 1.421C15.587 16.827 14.357 18 12 18c-2.358 0-3.587-1.173-3.707-1.293A1 1 0 0 1 9.7 15.286'
				></path>
				<path
					fill='currentColor'
					d='M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a11 11 0 0 1 6.23-9.914 1 1 0 0 1 1.36.524c.292.72.69 1.565 1.362 2.233C10.592 5.481 11.524 6 13 6a1 1 0 1 1 0 2c-2.024 0-3.458-.743-4.459-1.74-.6-.596-1.027-1.267-1.34-1.875A9 9 0 1 0 12 3a1 1 0 0 1-1.001-1'
				></path>
			</svg>
			<h2 className={styles.title}>Учетные данные</h2>
			<div className={styles.info}>
				<div className={styles.col}>
					{userData?.email && (
						<div className={styles.item}>
							<p>Почта</p>
							<div>{userData?.email}</div>
						</div>
					)}
					{(userData?.name || userData?.lastName || userData?.patronymic) && (
						<div className={styles.item}>
							<p>ФИО</p>
							<div>
								{userData?.lastName && userData.lastName} {userData?.name && userData.name}{' '}
								{userData?.patronymic && userData.patronymic}
							</div>
						</div>
					)}
					{userData?.birthdayDate && (
						<div className={styles.item}>
							<p>Дата рождения</p>
							<div>{getCorrectDateView(userData?.birthdayDate)}</div>
						</div>
					)}
				</div>
				<div className={styles.col}>
					{userData?.phone && (
						<div className={styles.item}>
							<p>Телефон</p>
							<div>+7 {getCorrectPhoneNumberView(userData?.phone.slice(2))}</div>
						</div>
					)}
					{(userData?.gender === 'male' || userData?.gender === 'female') && (
						<div className={styles.item}>
							<p>Пол</p>
							<div>{userData?.gender === 'male' ? 'Мужской' : 'Женский'}</div>
						</div>
					)}
				</div>
			</div>
			<Link href={PATHS.MY_SETTINGS} className={styles.link}>
				Изменить
			</Link>
		</div>
	)
}
