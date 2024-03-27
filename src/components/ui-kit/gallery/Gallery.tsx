import { FC, useState } from 'react'
import { SimpleGallery } from './simple-gallery/SimpleGallery'
import { LargeGallery } from './large-gallery/LargeGallery'

interface IGalleryProps {
	images: string[]
}

export const Gallery: FC<IGalleryProps> = ({ images }) => {
	const [galleryVariant, setGalleryVariant] = useState<'simple' | 'large'>('simple')

	const handleSimpleGalleryVariant = () => {
		setGalleryVariant('simple')
	}

	const handleLargeGalleryVariant = () => {
		setGalleryVariant('large')
	}

	return galleryVariant === 'simple' ? (
		<SimpleGallery images={images} setVariantGallery={handleLargeGalleryVariant} />
	) : (
		<LargeGallery setVariantGallery={handleSimpleGalleryVariant} images={images} />
	)
}
