import { FC, useState, MouseEvent } from 'react'
import styles from './FeedbackSendCommentForm.module.scss'
import { IUser } from '@/types/user/user.types'
import { AvatarRound } from '../../avatar-round/AvatarRound'
import { currentAuthUser } from '@/mock/user'
import { getNameWithInitials } from '@/utils/user/name'
import { Textarea } from '../../textarea/Textarea'
import { Button } from '../../button/Button'

interface IFeedbackSendCommentFormProps {
	author: IUser
	closeFormModal: (bool: boolean) => void
}

export const FeedbackSendCommentForm: FC<IFeedbackSendCommentFormProps> = ({ author, closeFormModal }) => {
	const [textareaValue, setTextareaValue] = useState('')

	const handleSetValue = (value: string) => {
		setTextareaValue(value)
	}

	const submitForm = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		alert(textareaValue)
		setTextareaValue('')
	}

	const handleCloseFormModal = () => {
		closeFormModal(false)
	}

	return (
		<div className={styles.sendCommentForm}>
			<div className={styles.userData}>
				<AvatarRound name={currentAuthUser.name} />
				<div className={styles.authorData}>
					<div>Ответ на отзыв</div>
					<div>{getNameWithInitials(author.name, author.lastName)}</div>
				</div>
			</div>
			<form className={styles.commentForm}>
				<div className={styles.txtBox}>
					<Textarea value={textareaValue} setValue={handleSetValue} placeholder='Текст комментария' minHeight='large' />
				</div>
				<div className={styles.btns}>
					<Button variant='small' color='lightBlue' isFullWidth={false} type='button' onClick={handleCloseFormModal}>
						Отменить
					</Button>
					<Button
						variant='small'
						color='blue'
						isFullWidth={false}
						style={{ marginLeft: '8px' }}
						onClick={submitForm}
						disabled={textareaValue.length === 0}
					>
						Отправить
					</Button>
				</div>
			</form>
		</div>
	)
}
