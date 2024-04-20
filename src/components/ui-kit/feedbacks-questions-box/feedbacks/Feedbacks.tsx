import { FC, useState } from 'react'
import styles from './Feedbacks.module.scss'
import { Sorter } from './sorter/Sorter'
import { IFeedback, IFeedbackImage, TypeVariantFeedbackGalleryModal } from '@/types/feedback/feedback.types'
import { Feedback } from './feedback/Feedback'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '../../modals/LayoutModal'
import { FeedbackGalleryModal } from '../../modals/feedback-gallery-modal/FeedbackGalleryModal'
import { IRating } from '@/types/rating/rating.types'
import { ProductRatingBox } from '../../product-rating-box/ProductRatingBox'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { getAllFeedbackImages, getFeedbackById } from '@/utils/feedback/feedback'
import { createPortal } from 'react-dom'

interface IFeedbacksProps {
	feedbacks: IFeedback[]
	productRating: IRating
}

export const Feedbacks: FC<IFeedbacksProps> = ({ feedbacks, productRating }) => {
	const { isOpenModal, openModal, closeModal } = useModal()
	const { setSelectedFeedback, setSelectedFeedbackGalleryImage } = useActions()
	const [variantFeedbackGalleryModal, setVariantFeedbackGalleryModal] = useState<TypeVariantFeedbackGalleryModal>('one')

	const handleSetSelectedFeedback = (
		feedback: IFeedback,
		img: IFeedbackImage,
		variant: TypeVariantFeedbackGalleryModal
	) => {
		setSelectedFeedback(feedback)
		setVariantFeedbackGalleryModal(variant)
		setSelectedFeedbackGalleryImage(img)
		openModal()
	}

	const allFeedbacksImages: IFeedbackImage[] = getAllFeedbackImages(feedbacks)

	return (
		<>
			{isOpenModal &&
				createPortal(
					<LayoutModal
						variant='white'
						close={closeModal}
						Content={
							<FeedbackGalleryModal
								feedbacks={feedbacks}
								close={closeModal}
								allFeedbacksImages={allFeedbacksImages}
								variant={variantFeedbackGalleryModal}
							/>
						}
					/>,
					document.body
				)}
			<div className={styles.col_1}>
				<div>
					<div className={styles.allPhotosFeedbacksList}>
						{allFeedbacksImages &&
							allFeedbacksImages.slice(0, 9).map((img, ind, { length }) => (
								<div
									key={img.id + '-' + img.path}
									className={styles.imgBox}
									onClick={(_) =>
										handleSetSelectedFeedback(getFeedbackById(feedbacks, img.fbId) as IFeedback, img, 'all')
									}
								>
									<Image
										quality={30}
										alt='feedback photo'
										src={img.path}
										width={150}
										height={200}
										className={styles.img}
									/>
									{length > 8 && ind === 8 && <div className={styles.backdrop}>+{allFeedbacksImages.length - 8}</div>}
								</div>
							))}
					</div>
				</div>
				<Sorter />
				<div className={styles.feedbacks}>
					{feedbacks &&
						feedbacks.map((fb) => (
							<Feedback
								feedback={fb}
								key={fb.id + '-' + fb.description}
								setSelectedFeedbackCb={handleSetSelectedFeedback}
							/>
						))}
				</div>
			</div>
			<div className={styles.col_2}></div>
			<div className={styles.col_3}>
				<ProductRatingBox rating={productRating} />
				<div className={styles.remark}>
					Отзывы могут оставлять только те, кто купил товар. Так мы формируем честный рейтинг
				</div>
			</div>
		</>
	)
}
