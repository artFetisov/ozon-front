import { FC, useState } from 'react'
import styles from './SimpleGallery.module.scss'
import Image from 'next/image'
import cn from 'classnames'

interface ISimpleGalleryProps {
	images: string[]
	setVariantGallery: () => void
}

const BOX_IMAGE_HEIGHT = 60
const PORTION_SIZE_IMAGES = 8

export const SimpleGallery: FC<ISimpleGalleryProps> = ({ images, setVariantGallery }) => {
	const [selectedImage, setSelectedImage] = useState(images[0])
	const [hoveredImage, setHoveredImage] = useState<string | null>(null)
	const [transform, setTransform] = useState(0)

	const MAX_OFF_SET = Number('-' + String(images.length * BOX_IMAGE_HEIGHT - PORTION_SIZE_IMAGES * BOX_IMAGE_HEIGHT))

	const handleSelectedImage = (img: string) => {
		setSelectedImage(img)
	}

	const handleHoverImage = (img: string) => {
		if (selectedImage === img) return
		setHoveredImage(img)
	}

	const handleMouseLeaveImage = () => {
		setHoveredImage(null)
	}

	const handleTopArrowClick = () => {
		setTransform((currentValue) => currentValue + BOX_IMAGE_HEIGHT)
	}

	const handleBottomArrowClick = () => {
		setTransform((currentValue) => currentValue - BOX_IMAGE_HEIGHT)
	}

	return (
		<div className={styles.galleryBox}>
			<div className={styles.imagesListBox}>
				{transform < 0 && (
					<button className={styles.scrollButton} style={{ top: '-4px' }} onClick={handleTopArrowClick}>
						<svg width='24' height='24' style={{ transform: 'rotate(-90deg)' }}>
							<path
								fill='currentColor'
								d='M7.293 1.293a1 1 0 0 0 0 1.414L16.586 12l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-1.414 0'
							></path>
						</svg>
					</button>
				)}
				<div className={styles.imagesList} style={{ transform: `translateY(${transform}px)` }}>
					{images.map((img, ind) => (
						<div
							onMouseEnter={(e) => handleHoverImage(img)}
							onMouseLeave={handleMouseLeaveImage}
							key={img + ind}
							className={cn(styles.listItem, {
								[styles.border]: selectedImage === img,
								[styles.hovered]: hoveredImage === img,
							})}
						>
							<Image src={img} alt='Изображение' width={48} height={48} onClick={(e) => handleSelectedImage(img)} />
						</div>
					))}
				</div>
				{transform > MAX_OFF_SET && images.length > 8 && (
					<button className={styles.scrollButton} style={{ bottom: '-4px' }} onClick={handleBottomArrowClick}>
						<svg width='24' height='24' style={{ transform: 'rotate(90deg)' }}>
							<path
								fill='currentColor'
								d='M7.293 1.293a1 1 0 0 0 0 1.414L16.586 12l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-1.414 0'
							></path>
						</svg>
					</button>
				)}
			</div>
			<div className={styles.selectedImage}>
				<Image src={selectedImage} alt='img' width={480} height={480} onClick={setVariantGallery} />
			</div>
		</div>
	)
}
