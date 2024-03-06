import { FC, useState } from 'react'
import styles from './Gallery.module.scss'
import Image from 'next/image'
import cn from 'classnames'
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
