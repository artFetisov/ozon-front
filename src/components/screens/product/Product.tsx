'use client'

import { FC, useEffect, useState } from 'react'
import styles from './Product.module.scss'
import { productsMock } from '@/mock/products'
import { IProduct } from '@/types/product/product.types'

interface IProductProps {
	id: number
	slug: string
}

export const Product: FC<IProductProps> = ({ id, slug }) => {
	const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null)

	const fetchProduct = async () => {
		const product = await productsMock.find((p) => p.id === Number(id))
		if (product) setCurrentProduct(product)
	}

	useEffect(() => {
		fetchProduct()
	}, [id, slug])

	return (
		<div className={styles.productWrapper}>
			<div className={styles.infoProductTopBox}>
				<h1 className={styles.title}>{currentProduct?.title}</h1>
				<div className={styles.rateAndFeedbacksBox}>
					<div>,mlsdm</div>
					<div>,mlsdm</div>
					<div>,mlsdm</div>
					<div>,mlsdm</div>
					<span style={{ marginLeft: 'auto' }}>{currentProduct?.article}</span>
				</div>
			</div>
		</div>
	)
}
