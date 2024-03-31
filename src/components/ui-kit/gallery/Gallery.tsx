import { FC, useState } from 'react'
import { SimpleGallery } from './simple-gallery/SimpleGallery'
import { LargeGallery } from './large-gallery/LargeGallery'

interface IGalleryProps {
	images: string[]
}

export const Gallery: FC<IGalleryProps> = ({ images }) => {
	const [galleryVariant, setGalleryVariant] = useState<'simple' | 'large'>('simple')
	const [selectedImage, setSelectedImage] = useState(images[0])

	const handleSetSelectedImage = (img: string) => {
		setSelectedImage(img)
	}

	const handleSimpleGalleryVariant = () => {
		setGalleryVariant('simple')
	}

	const handleLargeGalleryVariant = () => {
		setGalleryVariant('large')
	}

	return galleryVariant === 'simple' ? (
		<SimpleGallery
			images={images}
			setVariantGallery={handleLargeGalleryVariant}
			selectedImage={selectedImage}
			setSelectedImage={handleSetSelectedImage}
		/>
	) : (
		<LargeGallery
			setVariantGallery={handleSimpleGalleryVariant}
			images={images}
			selectedImage={selectedImage}
			setSelectedImage={handleSetSelectedImage}
		/>
	)
}
