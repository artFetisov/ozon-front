import { FC, MouseEvent, useState } from 'react'
import styles from './FeedbackGalleryModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { IFeedback, ISendingCommentForm } from '@/types/feedback/feedback.types'
import { getFirstCapitalLetter, getNameWithInitials } from '@/utils/user/name'
import { getCorrectDateView } from '@/utils/date/date'
import { Textarea } from '../../textarea/Textarea'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../button/Button'
import { IconButton } from '../../icon-button/IconButton'

interface IFeedbackGalleryModalProps {
	close: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
	feedback: IFeedback | null
}

export const FeedbackGalleryModal: FC<IFeedbackGalleryModalProps> = ({ close, feedback }) => {
	const [isShowDescription, setIsShowDescription] = useState(false)
	const [isShowAllComments, setIsShowAllComments] = useState(false)

	const { control, handleSubmit, register, formState, getValues } = useForm<ISendingCommentForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<ISendingCommentForm> = async (data) => {
		console.log('submit')
		console.log(data)
	}

	const handleSetIsShowDescription = () => {
		setIsShowDescription(true)
	}

	const handleSetIsShowAllComments = () => {
		setIsShowAllComments(true)
	}

	return (
		<div className={styles.feedbackGalleryModal}>
			<CloseButton callback={close} variant='outside' />
			<div className={styles.selectedPhotoContainer}>s</div>
			<div className={styles.selectedFeedbackInfo}>
				{feedback && (
					<div className={styles.info}>
						<div className={styles.userData}>
							<div className={styles.circle}>
								<span>{getFirstCapitalLetter(feedback.author?.name)}</span>
							</div>
							<div className={styles.name}>
								{getNameWithInitials(feedback.author.name, feedback.author.lastName)}
								<div className={styles.date}>{getCorrectDateView(new Date())}</div>
							</div>
						</div>
						<div className={styles.descriptionBox}>
							<div className={styles.tickBox}>
								<svg width={16} height={16}>
									<path
										fill='currentColor'
										d='M12.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L7 9.586l4.293-4.293a1 1 0 0 1 1.414 0'
									></path>
								</svg>
								<div>Товар куплен на OZON</div>
							</div>
							{!isShowDescription && (
								<div className={styles.showDescriptionBtn}>
									<div onClick={handleSetIsShowDescription}>Показать весь отзыв</div>
								</div>
							)}
							{isShowDescription && (
								<div className={styles.description}>
									{feedback.description.dignities && (
										<div className={styles.infoDesc}>
											<div className={styles.title}>Достоинства</div>
											<div>{feedback.description.dignities}</div>
										</div>
									)}
									{feedback.description.disadvantages && (
										<div className={styles.infoDesc}>
											<div className={styles.title}>Недостатки</div>
											<div>{feedback.description.disadvantages}</div>
										</div>
									)}
									{feedback.description.comment && (
										<div className={styles.infoDesc}>
											<div className={styles.title}>Комментарий</div>
											<div>{feedback.description.comment}</div>
										</div>
									)}
								</div>
							)}
						</div>
						<div className={styles.comments}>
							<div className={styles.heading}>
								{' '}
								Комментарии <span>{feedback.comments.length}</span>
							</div>
							{feedback.comments && (
								<div className={styles.commentList}>
									{isShowAllComments &&
										feedback.comments.map((c) => (
											<div key={c.id + '-' + c.author} className={styles.comment}>
												<div className={styles.userData}>
													<div className={styles.circle}>
														<span>{getFirstCapitalLetter(c.author?.name)}</span>
													</div>
													<div className={styles.name}>
														{getNameWithInitials(c.author.name, c.author.lastName)}
														<div className={styles.date}>{getCorrectDateView(new Date())}</div>
													</div>
												</div>
												<div className={styles.textBox}>{c.message}</div>
											</div>
										))}
									{!isShowAllComments &&
										feedback.comments.slice(0, 1).map((c) => (
											<div key={c.id + '-' + c.author} className={styles.comment}>
												<div className={styles.userData}>
													<div className={styles.circle}>
														<span>{getFirstCapitalLetter(c.author?.name)}</span>
													</div>
													<div className={styles.name}>
														{getNameWithInitials(c.author.name, c.author.lastName)}
														<div className={styles.date}>{getCorrectDateView(new Date())}</div>
													</div>
												</div>
												<div className={styles.textBox}>{c.message}</div>
											</div>
										))}
								</div>
							)}
							{!isShowAllComments && feedback.comments.length > 1 && (
								<div className={styles.moreCommentsBtn} onClick={handleSetIsShowAllComments}>
									<div className={styles.icon}>
										<svg width={24} height={24}>
											<path
												fill='currentColor'
												d='M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1'
											></path>
										</svg>
									</div>
									<span>Показать больше ответов</span>
								</div>
							)}
						</div>
					</div>
				)}
				<form className={styles.textareaForm} onSubmit={handleSubmit(onSubmit)}>
					<Controller
						rules={{ maxLength: 100 }}
						name='comment'
						control={control}
						render={({ field: { value, onChange }, fieldState: { isTouched, isDirty } }) => (
							<Textarea
								isTouched={isTouched}
								isDirty={isDirty}
								value={value}
								onChange={onChange}
								placeholder='Ваш комментарий к отзыву'
							/>
						)}
					/>
					<div className={styles.sendIcon}>
						<IconButton
							svgSize={24}
							style={{ borderRadius: '50%', opacity: 0.4, padding: '4px' }}
							disabled={getValues().comment?.length === 0}
						>
							<path
								fill='currentColor'
								d='M4.361 2.23a1 1 0 0 1 1.086-.124l18 9a1 1 0 0 1 0 1.788l-18 9a1 1 0 0 1-1.409-1.169l2-7a1 1 0 0 1 .646-.674l6-2a1 1 0 0 1 .632 1.898l-5.5 1.833-1.23 4.307L20.764 12 6.586 4.911l1.376 4.814a1 1 0 1 1-1.924.55l-2-7a1 1 0 0 1 .323-1.044'
							></path>
						</IconButton>
					</div>
				</form>
			</div>
		</div>
	)
}
