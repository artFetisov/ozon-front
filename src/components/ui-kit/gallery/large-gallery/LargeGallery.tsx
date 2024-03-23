import { FC, useState } from 'react'
import styles from './LargeGallery.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import Image from 'next/image'
import cn from 'classnames'
import { ArrowButton } from '../../arrow-button/ArrowButton'

interface ILargeGallery {
	images: string[]
	setVariantGallery: () => void
}

export const LargeGallery: FC<ILargeGallery> = ({ setVariantGallery, images }) => {
	const [selectedImage, setSelectedImage] = useState(images[0])
	const [hoveredImage, setHoveredImage] = useState<string | null>(null)

	const handleSelectImage = (img: string) => {
		setSelectedImage(img)
	}

	const handleHoverImage = (img: string) => {
		if (selectedImage === img) return
		setHoveredImage(img)
	}

	const handleMouseLeaveImage = () => {
		setHoveredImage(null)
	}

	const handleLeftArrowButton = () => {
		const currentImageIndex = images.findIndex((item) => item === selectedImage)

		if (currentImageIndex === 0) {
			handleSelectImage(images[images.length - 1])
			return
		}

		handleSelectImage(images[currentImageIndex - 1])
	}

	const handleRightArrowButton = () => {
		const currentImageIndex = images.findIndex((item) => item === selectedImage)

		if (currentImageIndex === images.length - 1) {
			handleSelectImage(images[0])
			return
		}

		handleSelectImage(images[currentImageIndex + 1])
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
								<Image src={img} alt='Изображение' width={48} height={48} onClick={(e) => handleSelectImage(img)} />
							</div>
						))}
					</div>
				</div>
				<div className={styles.selectedImageBox}>
					<div className={styles.innerWrapper}>
						<ArrowButton callback={handleLeftArrowButton} position='left' />
						<div className={styles.selectedImage}>
							<Image src={selectedImage} alt='Изображение' width={400} height={640} />
						</div>
						<ArrowButton callback={handleRightArrowButton} position='right' />
					</div>
				</div>
			</div>
		</div>
	)
}
