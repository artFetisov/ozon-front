import { FC } from 'react'
import styles from './FeedbackSendCommentForm.module.scss'
import { IUser } from '@/types/user/user.types'
import { AvatarRound } from '../../user-data-round/AvatarRound'
import { currentAuthUser } from '@/mock/user'

interface IFeedbackSendCommentFormProps {
	author: IUser
}

export const FeedbackSendCommentForm: FC<IFeedbackSendCommentFormProps> = ({ author }) => {
	return (
		<form className={styles.sendCommentForm}>
			<div className={styles.userData}>
				<AvatarRound name={currentAuthUser.name} />
			</div>
		</form>
	)
}
