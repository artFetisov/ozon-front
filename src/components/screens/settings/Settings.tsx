'use client'

import { FC } from 'react'
import styles from './Settings.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getCorrectDateView } from '@/utils/date/date'
import { useModal } from '@/hooks/useModal'
import { createPortal } from 'react-dom'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { ChangePersonalUserDataModal } from '@/components/ui-kit/modals/change-personal-user-data-modal/ChangePersonalUserDataModal'
import { IUser } from '@/types/user/user.types'
import { getCorrectPhoneNumberView } from '@/utils/phone/phone'
import { ChangePhoneModal } from '@/components/ui-kit/modals/change-phone-modal/ChangePhoneModal'
import { MyText } from '@/components/ui-kit/text/MyText'
import { ChangeEmailModal } from '@/components/ui-kit/modals/change-email-modal/ChangeEmailModal'
import { getWordWithFirstCapitalLetter } from '@/utils/user/name'

export const Settings: FC = () => {
	const authUser = useTypedSelector((state) => state.user.userData)

	const { isOpenModal, openModal, closeModal } = useModal()
	const {
		isOpenModal: isOpenChangePhoneModal,
		openModal: openChangePhoneModal,
		closeModal: closeChangePhoneModal,
	} = useModal()
	const {
		isOpenModal: isOpenChangeEmailModal,
		openModal: openChangeEmailModal,
		closeModal: closeChangeEmailModal,
	} = useModal()

	const handleLogout = () => {}

	return (
		<>
			{isOpenModal &&
				createPortal(
					<LayoutModal
						variant='dark'
						close={closeModal}
						Content={<ChangePersonalUserDataModal close={closeModal} userData={authUser} />}
					/>,
					document.body
				)}
			{isOpenChangePhoneModal &&
				createPortal(
					<LayoutModal
						variant='dark'
						close={closeChangePhoneModal}
						Content={<ChangePhoneModal close={closeChangePhoneModal} userData={authUser as IUser} />}
					/>,
					document.body
				)}
			{isOpenChangeEmailModal &&
				createPortal(
					<LayoutModal
						variant='dark'
						close={closeChangeEmailModal}
						Content={<ChangeEmailModal close={closeChangeEmailModal} userData={authUser as IUser} />}
					/>,
					document.body
				)}
			<div className={styles.settingsPage}>
				<div className={styles.wrapper}>
					<header className={styles.header}>
						<div className={styles.logo}>
							<Image src='//ir-2.ozone.ru/graphics/ozon-id-v2.svg' alt='OzonID' fill />
						</div>
						<div className={styles.text}>Ваш единый аккаунт Ozon</div>
					</header>
					<div className={styles.linkBox}>
						<Link href={PATHS.MY_MAIN} className={styles.link}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={16}
								height={16}
								viewBox='0 0 16 16'
								className={styles.icon}
							>
								<path
									fill='currentColor'
									d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8z'
								></path>
							</svg>
							<div className={styles.linkTitle}>Вернуться в личный кабинет</div>
						</Link>
					</div>
					<section className={styles.userInfo}>
						<div className={styles.mainInfoBox}>
							<div className={styles.imgBox}>
								<Image fill src='https://ir-2.ozone.ru/graphics/ozon/myozon/avatar_default_web.png' alt='userSmile' />
							</div>
							<div>
								<div className={styles.userName}>
									{authUser?.lastName && getWordWithFirstCapitalLetter(authUser?.lastName)}{' '}
									{authUser?.name && getWordWithFirstCapitalLetter(authUser?.name)}{' '}
									{authUser?.patronymic && getWordWithFirstCapitalLetter(authUser?.patronymic)}
								</div>
								<div className={styles.dateAndGender}>
									{authUser?.birthdayDate && (
										<div className={styles.data}>
											<span>Дата рождения</span>
											<div>{getCorrectDateView(authUser?.birthdayDate as Date)}</div>
										</div>
									)}
									{(authUser?.gender === 'male' || authUser?.gender === 'female') && (
										<div className={styles.data}>
											<span>Пол</span>
											<div>
												{authUser?.gender === 'male' ? 'Мужской' : authUser?.gender === 'female' ? 'Женский' : ''}
											</div>
										</div>
									)}
								</div>
								<MyText callback={openModal} color='blue' size='middle'>
									Изменить
								</MyText>
							</div>
						</div>
						<div className={styles.phoneAndEmailBox}>
							<h2>Учетные данные</h2>
							<p>Здесь вы можете отредактировать информацию о себе и добавить недостающую</p>
							<div className={styles.changeBox}>
								<div className={styles.box}>
									<p>
										<span className={styles.property}>Телефон</span>
										<span className={styles.value}>+7 {getCorrectPhoneNumberView(authUser?.phone as string)}</span>
									</p>
									<MyText callback={openChangePhoneModal} color='blue' size='middle'>
										Изменить
									</MyText>
								</div>
								<div className={styles.box}>
									<p>
										<span className={styles.property}>Почта</span>
										<span className={styles.value}>{authUser?.email}</span>
									</p>
									<MyText callback={openChangeEmailModal} color='blue' size='middle'>
										Изменить
									</MyText>
								</div>
							</div>
						</div>
						<div className={styles.logoutBox}>
							<h2>Управление аккаунтом</h2>
							<p>Вы с нами с {getCorrectDateView(new Date())} года</p>
							<MyText color='red' size='middle' callback={handleLogout}>
								Выйти из аккаунта
							</MyText>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}
