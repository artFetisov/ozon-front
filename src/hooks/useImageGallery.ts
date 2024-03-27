import { useState } from 'react'

export const useImageGallery = (images: string[], image: string | null) => {
	const [selectedImage, setSelectedImage] = useState(() => (image ? image : images[0]))

	const handleSetSelectedImage = (img: string) => {
		setSelectedImage(img)
	}

	const handleLeftArrowButton = () => {
		const currentImageIndex = images.findIndex((item) => item === selectedImage)

		if (currentImageIndex === 0) {
			handleSetSelectedImage(images[images.length - 1])
			return
		}

		handleSetSelectedImage(images[currentImageIndex - 1])
	}

	const handleRightArrowButton = () => {
		const currentImageIndex = images.findIndex((item) => item === selectedImage)

		if (currentImageIndex === images.length - 1) {
			handleSetSelectedImage(images[0])
			return
		}

		handleSetSelectedImage(images[currentImageIndex + 1])
	}

	return { selectedImage, handleLeftArrowButton, handleRightArrowButton, handleSetSelectedImage }
}
