'use client'

import { FC, useEffect } from 'react'
import styles from './Main.module.scss'
import { AvatarRound } from '@/components/ui-kit/avatar-round/AvatarRound'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { PersonalUserData } from '@/components/shared/personal-user-data/PersonalUserData'
import { getWordWithFirstCapitalLetter } from '@/utils/user/name'
import { useUploadAvatar } from '@/hooks/useUpload'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'

export const Main: FC = () => {
	const { authMe } = useActions()

	useEffect(() => {
		const fetchData = async () => {
			await authMe()
		}
		fetchData()
	}, [])

	const userData = useTypedSelector((state) => state.user.userData)

	const { handleUploadImage } = useUploadAvatar()

	return (
		<div className={styles.mainBox}>
			<div className={styles.main}>
				<div className={styles.leftSideBox}>
					<div className={styles.avatarBox}>
						<img src={userData?.avatar} alt='avatar' />
						{userData?.avatar && <Image src={userData?.avatar} alt='avatar' width={100} height={100} />}
						<AvatarRound
							name={userData?.name}
							size='large'
							lastName={userData?.lastName}
							onChange={handleUploadImage}
						/>
						<span className={`${styles.text} ${styles.m}`}>{getWordWithFirstCapitalLetter(userData?.name)}</span>
						<span className={styles.text}>{getWordWithFirstCapitalLetter(userData?.lastName)}</span>
					</div>
				</div>
				<div className={styles.userInfoBox}>
					<PersonalUserData userData={userData} />
				</div>
			</div>
		</div>
	)
}
