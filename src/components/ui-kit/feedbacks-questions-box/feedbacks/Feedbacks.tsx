import { FC, useEffect, useState } from 'react'
import styles from './Feedbacks.module.scss'
import { Sorter } from './sorter/Sorter'
import { IFeedback } from '@/types/feedback/feedback.types'
import { Feedback } from './feedback/Feedback'
import { useModal } from '@/hooks/useModal'
import { LayoutModal } from '../../modals/LayoutModal'
import { FeedbackGalleryModal } from '../../modals/feedback-gallery-modal/FeedbackGalleryModal'
import { IRating } from '@/types/rating/rating.types'
import { ProductRatingBox } from '../../product-rating-box/ProductRatingBox'
import Image from 'next/image'

interface IFeedbacksProps {
	feedbacks: IFeedback[]
	productRating: IRating
}

const getAllImagesWithFbId = (feedbacks: IFeedback[]) => {
	const obj: Record<number, string[]> = feedbacks.reduce((acc, cur) => ({ ...acc, [cur.id]: cur.images }), {})

	return Object.entries(obj)
		.map(([id, images]) => images.map((img) => ({ id, img })))
		.reduce((acc, cur) => [...acc, ...cur], [])
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

	const allFeedbacksImages: { id: string; img: string }[] = getAllImagesWithFbId(feedbacks)

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
				<div>
					<div className={styles.allPhotosFeedbacksList}>
						{allFeedbacksImages.slice(0, 9).map(({ id, img }, ind, { length }) => (
							<div key={id + '-' + img} className={styles.imgBox}>
								<Image quality={50} alt='feedback photo' src={img} width={150} height={200} className={styles.img} />
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
