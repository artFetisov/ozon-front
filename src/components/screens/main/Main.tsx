'use client'

import { FC } from 'react'
import styles from './Main.module.scss'
import { AvatarRound } from '@/components/ui-kit/user-data-round/AvatarRound'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { PersonalUserData } from '@/components/shared/personal-user-data/PersonalUserData'
import { getWordWithFirstCapitalLetter } from '@/utils/user/name'

export const Main: FC = () => {
	const userData = useTypedSelector((state) => state.user.userData)

	return (
		<div className={styles.mainBox}>
			<div className={styles.main}>
				<div className={styles.leftSideBox}>
					<div className={styles.avatarBox}>
						<AvatarRound name={userData?.name} size='large' lastName={userData?.lastName} />
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
