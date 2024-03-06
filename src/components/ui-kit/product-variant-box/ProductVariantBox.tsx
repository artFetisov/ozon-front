import { FC, useState } from 'react'
import styles from './ProductVariantBox.module.scss'
import { IVariant, IVariants } from '@/types/product/variant.types'
import Link from 'next/link'
import { PATHS } from '@/constants/paths'
import cn from 'classnames'

interface IProductVariantBoxProps {
	variant: IVariants
	title: string
	id: number
}

export const ProductVariantBox: FC<IProductVariantBoxProps> = ({ variant, title, id }) => {
	const [selectedVariant, setSelectedVariant] = useState(variant.variants[0])

	const handleSelectedVariant = (variant: IVariant) => {
		setSelectedVariant(variant)
	}

	return (
		<div className={styles.variantBox}>
			<div className={styles.title}>{variant.title}:</div>
			<div className={styles.variants}>
				{variant.variants.map((v) => (
					<div className={styles.variant} key={v.id + '-' + v.title}>
						<Link
							onClick={(e) => handleSelectedVariant(v)}
							className={cn({
								[styles.selected]: selectedVariant.id === v.id,
							})}
							href={`${PATHS.PRODUCT}${title}/${id}`}
						>
							{v.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
