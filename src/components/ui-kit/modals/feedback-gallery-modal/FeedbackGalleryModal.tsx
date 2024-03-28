import { FC, MouseEvent, useState } from 'react'
import styles from './FeedbackGalleryModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { IFeedback } from '@/types/feedback/feedback.types'
import { getNameWithInitials } from '@/utils/user/name'
import { getCorrectDateView } from '@/utils/date/date'
import { FeedbackGalleryModalForm } from '../../forms/feedback-gallery-modal-form/FeedbackGalleryModalForm'
import { AvatarRound } from '../../user-data-round/AvatarRound'
import Image from 'next/image'
import { Rating } from '../../rating/Rating'
import { ArrowButton } from '../../arrow-button/ArrowButton'
import { useImageGallery } from '@/hooks/useImageGallery'

interface IFeedbackGalleryModalProps {
	close: (event: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
	selectedFeedback: IFeedback | null
	selectedFeedbackImage: string | null
}

export const FeedbackGalleryModal: FC<IFeedbackGalleryModalProps> = ({
	close,
	selectedFeedback,
	selectedFeedbackImage,
}) => {
	const { handleLeftArrowButton, handleRightArrowButton, selectedImage } = useImageGallery(
		selectedFeedback?.images ? selectedFeedback.images : [],
		selectedFeedbackImage
	)

	const [isShowDescription, setIsShowDescription] = useState(false)
	const [isShowAllComments, setIsShowAllComments] = useState(false)

	const handleSetIsShowDescription = () => {
		setIsShowDescription(true)
	}

	const handleSetIsShowAllComments = () => {
		setIsShowAllComments(true)
	}

	return (
		<div className={styles.feedbackGalleryModal}>
			<CloseButton callback={close} variant='outside' />
			<div className={styles.selectedPhotoContainer}>
				<div className={styles.feedbackRating}>
					<span>Отзыв</span>
					<div className={styles.ratingBox}>
						<Rating rating={selectedFeedback?.grade ? selectedFeedback.grade : 0} variant='small' />
					</div>
				</div>
				<div className={styles.blurImgBox}>
					<Image
						quality={10}
						alt='Image'
						src={selectedImage ? selectedImage : ''}
						fill
						className={styles.blurImg}
						loading='eager'
					/>
				</div>
				<Image
					alt='Image'
					src={selectedImage ? selectedImage : ''}
					fill
					className={styles.originalImg}
					loading='eager'
				/>
			</div>
			<div className={styles.selectedFeedbackInfo}>
				{selectedFeedback && (
					<div className={styles.info}>
						<div className={styles.userData}>
							<AvatarRound name={selectedFeedback.author?.name} />
							<div className={styles.name}>
								{getNameWithInitials(selectedFeedback.author.name, selectedFeedback.author.lastName)}
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
									{selectedFeedback.description.dignities && (
										<div className={styles.infoDesc}>
											<div className={styles.title}>Достоинства</div>
											<div>{selectedFeedback.description.dignities}</div>
										</div>
									)}
									{selectedFeedback.description.disadvantages && (
										<div className={styles.infoDesc}>
											<div className={styles.title}>Недостатки</div>
											<div>{selectedFeedback.description.disadvantages}</div>
										</div>
									)}
									{selectedFeedback.description.comment && (
										<div className={styles.infoDesc}>
											<div className={styles.title}>Комментарий</div>
											<div>{selectedFeedback.description.comment}</div>
										</div>
									)}
								</div>
							)}
						</div>
						<div className={styles.comments}>
							<div className={styles.heading}>
								{' '}
								Комментарии <span>{selectedFeedback.comments.length}</span>
							</div>
							{selectedFeedback.comments && (
								<div className={styles.commentList}>
									{isShowAllComments &&
										selectedFeedback.comments.map((c) => (
											<div key={c.id + '-' + c.author} className={styles.comment}>
												<div className={styles.userData}>
													<AvatarRound name={c.author?.name} />
													<div className={styles.name}>
														{getNameWithInitials(c.author.name, c.author.lastName)}
														<div className={styles.date}>{getCorrectDateView(new Date())}</div>
													</div>
												</div>
												<div className={styles.textBox}>{c.message}</div>
											</div>
										))}
									{!isShowAllComments &&
										selectedFeedback.comments.slice(0, 1).map((c) => (
											<div key={c.id + '-' + c.author} className={styles.comment}>
												<div className={styles.userData}>
													<AvatarRound name={c.author?.name} />
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
							{!isShowAllComments && selectedFeedback.comments.length > 1 && (
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
				<FeedbackGalleryModalForm />
			</div>
			<ArrowButton position='left' callback={handleLeftArrowButton} style={{ left: '-80px' }} />
			<ArrowButton position='right' callback={handleRightArrowButton} style={{ right: '-80px' }} />
		</div>
	)
}
