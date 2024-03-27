import { FC, useState } from 'react'
import styles from './Feedbacks.module.scss'
import { Sorter } from './sorter/Sorter'
import { IFeedback } from '@/types/feedback/feedback.types'
import { Feedback } from './feedback/Feedback'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '../../modals/LayoutModal'
import { FeedbackGalleryModal } from '../../modals/feedback-gallery-modal/FeedbackGalleryModal'
import { IRating } from '@/types/rating/rating.types'
import { ProductRatingBox } from '../../product-rating-box/ProductRatingBox'

interface IFeedbacksProps {
	feedbacks: IFeedback[]
	productRating: IRating
}

export const Feedbacks: FC<IFeedbacksProps> = ({ feedbacks, productRating }) => {
	const { isOpenModal, openModal, closeModal } = useModal()
	const [selectedFeedback, setSelectedFeedback] = useState<IFeedback | null>(null)
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	const handleSetSelectedFeedback = (feedback: IFeedback, img: string) => {
		setSelectedFeedback(feedback)
		handleSetSelectedImage(img)
		openModal()
	}

	const handleSetSelectedImage = (img: string) => {
		setSelectedImage(img)
	}

	return (
		<>
			{isOpenModal && (
				<LayoutModal
					variant='white'
					close={closeModal}
					Content={
						<FeedbackGalleryModal
							close={closeModal}
							selectedFeedbackImage={selectedImage}
							selectedFeedback={selectedFeedback}
						/>
					}
				/>
			)}
			<div className={styles.col_1}>
				<div className={styles.listPhotos}></div>
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
			</div>
		</>
	)
}
