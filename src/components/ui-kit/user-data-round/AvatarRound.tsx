import { getFirstCapitalLetter } from '@/utils/user/name'
import styles from './AvatarRound.module.scss'
import { FC } from 'react'

interface IAvatarRoundProps {
	name: string
}

export const AvatarRound: FC<IAvatarRoundProps> = ({ name }) => {
	return (
		<div className={styles.circle}>
			<span>{getFirstCapitalLetter(name)}</span>
		</div>
	)
}
