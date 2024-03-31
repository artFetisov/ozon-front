import { IFeedback, IFeedbackImage } from '@/types/feedback/feedback.types'
import { getFeedbackById } from '@/utils/feedback/feedback'

export const useImageGallery = <T extends { fbId: number; id: number }>(
	images: T[],
	selectedImage: T | null,
	setSelectedFeedbackGalleryImage: (img: T) => void,
	feedbacks: IFeedback[],
	setSelectedFeedback?: (feedback: IFeedback) => void
) => {
	const prevImageFbId = selectedImage?.fbId && selectedImage.fbId
	const currentImageIndex = images.findIndex((item) => item.id === selectedImage?.id)

	const handleLeftArrowButton = () => {
		const nextImage = images[currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1]

		if (prevImageFbId !== nextImage.fbId) {
			setSelectedFeedback && setSelectedFeedback(getFeedbackById(feedbacks, nextImage.fbId))
		}

		if (currentImageIndex === 0) {
			setSelectedFeedbackGalleryImage && setSelectedFeedbackGalleryImage(images[images.length - 1])
			return
		}
		setSelectedFeedbackGalleryImage(images[currentImageIndex - 1])
	}

	const handleRightArrowButton = () => {
		const nextImage = images[currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1]

		if (prevImageFbId !== nextImage.fbId) {
			setSelectedFeedback && setSelectedFeedback(getFeedbackById(feedbacks, nextImage.fbId))
		}

		if (currentImageIndex === images.length - 1) {
			setSelectedFeedbackGalleryImage(images[0])
			return
		}
		setSelectedFeedbackGalleryImage(images[currentImageIndex + 1])
	}

	return { handleLeftArrowButton, handleRightArrowButton }
}
