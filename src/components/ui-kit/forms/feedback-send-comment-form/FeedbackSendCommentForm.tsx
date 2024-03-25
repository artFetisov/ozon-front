import { FC, useEffect, useState } from 'react'
import styles from './FeedbackSendCommentForm.module.scss'
import { IUser } from '@/types/user/user.types'
import { AvatarRound } from '../../user-data-round/AvatarRound'
import { currentAuthUser } from '@/mock/user'
import { getNameWithInitials } from '@/utils/user/name'
import { Textarea } from '../../textarea/Textarea'
import { Button } from '../../button/Button'
import { ISendingCommentForm } from '@/types/feedback/feedback.types'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

interface IFeedbackSendCommentFormProps {
	author: IUser
	closeFormModal: (bool: boolean) => void
}

export const FeedbackSendCommentForm: FC<IFeedbackSendCommentFormProps> = ({ author, closeFormModal }) => {
	const [textareaValue, setTextareaValue] = useState('')

	const { control, handleSubmit, watch, getValues, resetField } = useForm<ISendingCommentForm>({
		mode: 'onChange',
	})

	const handleCloseFormModal = () => {
		closeFormModal(false)
	}

	useEffect(() => {
		const subscription = watch((value) => setTextareaValue(value.comment || ''))
		return () => subscription.unsubscribe()
	}, [watch])

	const onSubmit: SubmitHandler<ISendingCommentForm> = async (data) => {
		alert(data.comment)
		resetField('comment')
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
			<form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.txtBox}>
					<Controller
						rules={{ maxLength: 100 }}
						name='comment'
						defaultValue=''
						control={control}
						render={({ field: { value, onChange } }) => (
							<Textarea value={value} onChange={onChange} placeholder='Текст комментария' minHeight='large' />
						)}
					/>
				</div>
				<div className={styles.btns}>
					<Button variant='small' color='lightBlue' isFullWidth={false} type='button' onClick={handleCloseFormModal}>
						Отменить
					</Button>
					<Button variant='small' color='blue' isFullWidth={false} style={{ marginLeft: '8px' }} type='submit'>
						Отправить
					</Button>
				</div>
			</form>
		</div>
	)
}
