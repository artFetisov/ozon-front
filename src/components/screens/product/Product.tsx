'use client'

import { FC, useEffect, useState } from 'react'
import styles from './Product.module.scss'
import { productsMock } from '@/mock/products'
import { IProduct } from '@/types/product/product.types'
import { Rating } from '@/components/ui-kit/rating/Rating'
import { PriceCard } from '@/components/ui-kit/price-card/PriceCard'
import { getPriceWithDiscount, getPriceWithWhitespace } from '@/utils/price/price'
import { Button } from '@/components/ui-kit/button/Button'
import { Gallery } from '@/components/ui-kit/gallery/Gallery'
import { imagesGalleryMock } from '@/mock/galleryImages'

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

	if (currentProduct === null) {
		return <div>...Loading</div>
	}

	return (
		<div className={styles.productWrapper}>
			<div className={styles.infoProductTopBox}>
				<h1 className={styles.title}>{currentProduct?.title}</h1>
				<div className={styles.infoBox}>
					<div className={styles.rateAndFeedbacksBox}>
						<div className={styles.ratingBox}>
							<Rating rating={currentProduct?.rating} />
						</div>
						<div className={styles.feedbackBox}>233 отзывов</div>
					</div>
					<div>,mlsdm</div>
					<div>,mlsdm</div>
					<div>,mlsdm</div>
					<span className={styles.code}>Код товара: {currentProduct?.article}</span>
				</div>
			</div>

			<div style={{ height: '1px', backgroundColor: ' #d6dbe0', width: '100%' }}></div>

			<div className={styles.mainBox}>
				<div className={styles.leftSideMainBox}>
					<div className={styles.gallery}>
						<Gallery images={imagesGalleryMock} />
					</div>
					<div className={styles.info}>
						<div>dfddf</div>
						<div>dfdfdf</div>
						<div>nkkdkd</div>
						<div>{currentProduct.description}</div>
					</div>
				</div>

				<div className={styles.rightSideMainBox}>
					<div className={styles.addToCartBox}>
						<div className={styles.priceBox}>
							<div className={styles.withCard}>
								<PriceCard
									color='green'
									variant='big'
									amount={currentProduct?.amount as number}
									price={currentProduct?.price as number}
									discount={currentProduct?.discount as number}
									isOneProductPrice
								/>
								<span>с Ozon картой</span>
								<svg width={16} height={16}>
									<path
										fill='currentColor'
										d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8z'
									></path>
								</svg>
							</div>

							<div className={styles.withoutCard}>
								<div className={styles.price}>
									<span className={styles.withDisc}>
										{getPriceWithWhitespace(
											getPriceWithDiscount(currentProduct?.price as number, currentProduct?.discount as number)
										)}{' '}
										₽
									</span>
									<span className={styles.withoutDisc}>
										{getPriceWithWhitespace(currentProduct?.price as number)} ₽
									</span>
								</div>
								<div className={styles.text}>без Ozon карты</div>
							</div>
						</div>

						<div className={styles.btnsBox}>
							<Button color='blue' variant='large'>
								Добавить в корзину
							</Button>
							<Button color='lightBlue' variant='large' style={{ width: '56px' }} isIcon>
								<svg width={24} height={24}>
									<path
										fill='currentColor'
										d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.5 21.5 0 0 0 12 19.91a21.6 21.6 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5m5 17c-.316-.02-.56-.147-.848-.278a23.5 23.5 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.6 23.6 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278'
									></path>
								</svg>
							</Button>
						</div>
						<div className={styles.delivery}>
							<span>Доставка</span>
							<span style={{ fontWeight: 500 }}>12 марта</span>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	)
}
