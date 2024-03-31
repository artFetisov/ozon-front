import { FC, useState } from 'react'
import styles from './LargeGallery.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import Image from 'next/image'
import cn from 'classnames'
import { ArrowButton } from '../../arrow-button/ArrowButton'
import { useImageGallery } from '@/hooks/useImageGallery'

interface ILargeGallery {
	images: string[]
	setVariantGallery: () => void
	selectedImage: string
	setSelectedImage: (img: string) => void
}

export const LargeGallery: FC<ILargeGallery> = ({ setVariantGallery, images, selectedImage, setSelectedImage }) => {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null)

	const currentImageIndex = images.findIndex((item) => item === selectedImage)

	const handleLeftArrowButton = () => {
		if (currentImageIndex === 0) {
			setSelectedImage(images[images.length - 1])
			return
		}
		setSelectedImage(images[currentImageIndex - 1])
	}

	const handleRightArrowButton = () => {
		if (currentImageIndex === images.length - 1) {
			setSelectedImage(images[0])
			return
		}
		setSelectedImage(images[currentImageIndex + 1])
	}

	const handleHoverImage = (img: string) => {
		if (selectedImage === img) return
		setHoveredImage(img)
	}

	const handleMouseLeaveImage = () => {
		setHoveredImage(null)
	}

	return (
		<div className={styles.largeGallery}>
			<div className={styles.innerWrapper}>
				<CloseButton callback={setVariantGallery} variant='inside' />
				<div className={styles.selectImageBar}>
					<div className={styles.innerBox}>
						{images.map((img, ind) => (
							<div
								onMouseEnter={(e) => handleHoverImage(img)}
								onMouseLeave={handleMouseLeaveImage}
								key={img + ind}
								className={cn(styles.selectBarItem, {
									[styles.border]: selectedImage === img,
									[styles.hovered]: hoveredImage === img,
								})}
							>
								<Image src={img} alt='Изображение' width={48} height={48} onClick={(e) => setSelectedImage(img)} />
							</div>
						))}
					</div>
				</div>
				<div className={styles.selectedImageBox}>
					<div className={styles.innerWrapper}>
						<ArrowButton callback={handleLeftArrowButton} position='left' />
						<div className={styles.selectedImage}>
							<Image src={selectedImage} alt='Изображение' fill />
						</div>
						<ArrowButton callback={handleRightArrowButton} position='right' />
					</div>
				</div>
			</div>
		</div>
	)
}
