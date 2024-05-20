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

export const Settings: FC = () => {
	const authUser = useTypedSelector((state) => state.user.userData)

	const { isOpenModal, openModal, closeModal } = useModal()

	return (
		<>
			{isOpenModal &&
				createPortal(
					<LayoutModal
						variant='dark'
						close={closeModal}
						Content={<ChangePersonalUserDataModal close={closeModal} userData={authUser as IUser} />}
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
									{authUser?.lastName} {authUser?.name} {authUser?.patronymic}
								</div>
								<div className={styles.dateAndGender}>
									<div className={styles.data}>
										<span>Дата рождения</span>
										<div>{getCorrectDateView(authUser?.birthdayDate as Date)}</div>
									</div>
									<div className={styles.data}>
										<span>Пол</span>
										<div>{authUser?.gender === 'man' ? 'Мужской' : 'Женский'}</div>
									</div>
								</div>
								<span className={styles.changeBtn} onClick={openModal}>
									Изменить
								</span>
							</div>
						</div>
						<div className={styles.phoneAndEmailBox}></div>
					</section>
				</div>
			</div>
		</>
	)
}
