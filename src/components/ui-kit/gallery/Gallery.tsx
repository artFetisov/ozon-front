import { FC, useState } from 'react'
import styles from './Gallery.module.scss'
import Image from 'next/image'
import cn from 'classnames'

interface IGalleryProps {
	images: string[]
}

export const Gallery: FC<IGalleryProps> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(images[0])

	const handleSelectedImage = (img: string) => {
		setSelectedImage(img)
	}

	return (
		<div className={styles.galleryBox}>
			<div className={styles.imagesListBox}>
				{/* <button className={styles.scrollButton} style={{ top: '-4px' }}>
					<svg width='24' height='24' style={{ transform: 'rotate(-90deg)' }}>
						<path
							fill='currentColor'
							d='M7.293 1.293a1 1 0 0 0 0 1.414L16.586 12l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-1.414 0'
						></path> 
					</svg>
				</button> */}
				<div className={styles.imagesList}>
					{images.map((img, ind) => (
						<div
							key={img + ind}
							className={cn(styles.listItem, {
								[styles.border]: selectedImage === img,
							})}
						>
							<Image src={img} alt='Изображение' width={48} height={48} onClick={(e) => handleSelectedImage(img)} />
						</div>
					))}
				</div>
				{/* <button className={styles.scrollButton} style={{ bottom: '-4px' }}>
					<svg width='24' height='24' style={{ transform: 'rotate(90deg)' }}>
						<path
							fill='currentColor'
							d='M7.293 1.293a1 1 0 0 0 0 1.414L16.586 12l-9.293 9.293a1 1 0 1 0 1.414 1.414l10-10a1 1 0 0 0 0-1.414l-10-10a1 1 0 0 0-1.414 0'
						></path>
					</svg>
				</button> */}
			</div>
			<div className={styles.selectedImage}>
				<Image src={selectedImage} alt='img' width={500} height={500} />
			</div>
		</div>
	)
}
