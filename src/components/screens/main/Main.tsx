'use client'

import { FC } from 'react'
import styles from './Main.module.scss'
import { AvatarRound } from '@/components/ui-kit/avatar-round/AvatarRound'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { PersonalUserData } from '@/components/shared/personal-user-data/PersonalUserData'
import { getWordWithFirstCapitalLetter } from '@/utils/user/name'
import { useUploadAvatar } from '@/hooks/useUpload'
import Image from 'next/image'

export const Main: FC = () => {
	const userData = useTypedSelector((state) => state.user.userData)

	const { handleUploadImage } = useUploadAvatar()

	return (
		<div className={styles.mainBox}>
			<div className={styles.main}>
				<div className={styles.leftSideBox}>
					<div className={styles.avatarBox}>
						<img src='/uploads/avatar/i.webp' />
						<img src='/uploads/avatar/1648018869_10-kartinkin-net-p-kartinki-galaktika-kosmos-10.jpg' />
						<Image
							src='/uploads/avatar/1648018869_10-kartinkin-net-p-kartinki-galaktika-kosmos-10.jpg'
							alt='avatar'
							width={100}
							height={100}
						/>
						<Image src='/uploads/avatar/i.webp' alt='avatar' width={100} height={100} />
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
