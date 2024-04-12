'use client'

import { FC, useEffect, useRef, useState } from 'react'
import styles from './Product.module.scss'
import { productMockDescription, productsMock } from '@/mock/products'
import { IProduct } from '@/types/product/product.types'
import { Rating } from '@/components/ui-kit/rating/Rating'
import { Button } from '@/components/ui-kit/button/Button'
import { Gallery } from '@/components/ui-kit/gallery/Gallery'
import { ProductVariantBox } from '@/components/ui-kit/product-variant-box/ProductVariantBox'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { FeedbacksQuestionsBox } from '@/components/ui-kit/feedbacks-questions-box/FeedbacksQuestionsBox'
import { ProductHeader } from '@/components/shared/product-header/ProductHeader'
import { PriceBox } from './PriceBox/PriceBox'

interface IProductProps {
	id: number
	slug: string
}

const HEADER_HEIGHT = 64
const PRODUCT_HEADER_HEIGHT = 80

export const Product: FC<IProductProps> = ({ id, slug }) => {
	const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null)

	const descriptionBox = useRef<HTMLDivElement | null>(null)
	const feedbacksAndQuestionsBox = useRef<HTMLDivElement | null>(null)

	const handleScrollToFeedbacksBox = () => {
		document.body.scrollTo({
			top: feedbacksAndQuestionsBox.current?.offsetTop
				? feedbacksAndQuestionsBox.current?.offsetTop - HEADER_HEIGHT - PRODUCT_HEADER_HEIGHT
				: 0,
		})
	}

	const handleScrollToDescription = () => {
		document.body.scrollTo({
			top: descriptionBox.current?.offsetTop
				? descriptionBox.current?.offsetTop - HEADER_HEIGHT - PRODUCT_HEADER_HEIGHT
				: 0,
		})
	}

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
		<>
			<ProductHeader product={currentProduct} scrollToFeedbacks={handleScrollToFeedbacksBox} />
			<div className={styles.productWrapper}>
				<div className={styles.infoProductTopBox}>
					<h1 className={styles.title}>{currentProduct?.title}</h1>
					<div className={styles.infoBox}>
						<div className={styles.rateAndFeedbacksBox} onClick={handleScrollToFeedbacksBox}>
							<div className={styles.ratingBox}>
								<Rating rating={currentProduct?.rating.averageValue} variant='small' />
							</div>
							<div className={styles.text}>233 отзывов</div>
						</div>
						<div className={styles.text} onClick={handleScrollToFeedbacksBox}>
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
								<path
									fill='currentColor'
									d='M9 10a1 1 0 1 1-1.016-1 1 1 0 0 1-.231-1.969l.004-.001.038-.011a3 3 0 0 0 .675-.304C8.853 6.475 9 6.239 9 6a1 1 0 1 0-2 0 1 1 0 0 1-2 0 3 3 0 1 1 6 0c0 1.26-.853 2.025-1.47 2.41a5 5 0 0 1-1.154.522A1.3 1.3 0 0 1 8.015 9 1 1 0 0 1 9 10'
								></path>
								<path
									fill='currentColor'
									d='M0 10a4 4 0 0 0 3 3.874V15a1 1 0 0 0 1.447.894l3.156-1.577A3 3 0 0 1 8.944 14H11a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5zm2-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8.944a5 5 0 0 0-2.236.528L5 13.382V13a1 1 0 0 0-1-1 2 2 0 0 1-2-2z'
								></path>
							</svg>
							3 вопроса
						</div>
						<span className={styles.code}>Код товара: {currentProduct?.article}</span>
					</div>
				</div>
				<div style={{ height: '1px', backgroundColor: ' #d6dbe0', width: '100%' }}></div>
				<div className={styles.mainBox}>
					<div className={styles.leftSideMainBox}>
						<div className={styles.gallery}>
							<Gallery images={currentProduct.images} />
						</div>
						<div className={styles.info}>
							{currentProduct.variants.map((v) => (
								<ProductVariantBox
									variant={v}
									key={v.id + '-' + v.title}
									title={currentProduct.title}
									id={currentProduct.id}
								/>
							))}
							<div className={styles.aboutContainer}>
								<div className={styles.topTitle}>
									<span>О товаре</span>
									<div className={styles.toDescription} onClick={handleScrollToDescription}>
										<span>Перейти к описанию</span>
										<svg width={16} height={16}>
											<path
												fill='currentColor'
												d='M6.293 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L8.586 8 6.293 5.707a1 1 0 0 1 0-1.414'
											></path>
										</svg>
									</div>
								</div>
								<div className={styles.aboutItems}>
									{currentProduct.characteristics.about.map((ch) => (
										<div className={styles.aboutItem} key={ch.property + '-' + ch.value}>
											<span className={styles.prop}>{ch.property}</span>
											<span className={styles.value}>{ch.value}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.rightSideMainBox}>
						<div className={styles.addToCartBox}>
							<PriceBox currentProduct={currentProduct} />
						</div>
						<div className={styles.bottomBox}>
							<Button color={'lightBlue'} variant={'large'}>
								Купить в один клик
							</Button>
							<div className={styles.deliveryInfo}>
								<h2>Информация о доставке</h2>
								<div className={styles.address}>
									<svg width={24} height={24} style={{ marginRight: '12px', color: '#070707' }}>
										<path
											fill='currentColor'
											d='M12 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0'
										></path>
										<path
											fill='currentColor'
											d='M12 1a9 9 0 0 0-9 9c0 2.514 1.136 4.848 2.699 6.942 1.565 2.099 3.631 4.05 5.643 5.81a1 1 0 0 0 1.316 0c2.012-1.76 4.078-3.711 5.644-5.81C19.864 14.848 21 12.514 21 10a9 9 0 0 0-9-9m-7 9a7 7 0 0 1 14 0c0 1.904-.864 3.82-2.302 5.746-1.275 1.71-2.945 3.353-4.698 4.92-1.753-1.567-3.423-3.21-4.699-4.92C5.864 13.82 5 11.904 5 10'
										></path>
									</svg>
									<span>
										<span>проспект 30-летия победы, 22</span>
										<br></br>
										<span className={styles.lit}>Со склада Ozon, Москва</span>
									</span>
									<svg width={16} height={16} className={styles.arrow}>
										<path
											fill='currentColor'
											d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8z'
										></path>
									</svg>
								</div>
								<div className={styles.border}></div>
								<div className={styles.info}>
									<span>
										<span>Курьером Ozon</span>
										<br></br>
										<span className={styles.lit}>12 марта</span>
									</span>
									<div style={{ marginLeft: 'auto' }}>
										<div className={styles.right}>149</div>
									</div>
								</div>
								<div className={styles.info}>
									<span>
										<span>Пункт выдачи</span>
										<br></br>
										<span className={styles.lit}>11 марта</span>
									</span>
									<div style={{ marginLeft: 'auto' }}>
										<div className={styles.right}>бесплатно</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Selection items={productsMock.slice(0, 12)} rowTotalItems={6} headingText={'Похожие товары'} />
				<section className={styles.description} ref={descriptionBox}>
					<h2>Описание</h2>
					{productMockDescription}
				</section>
				<section className={styles.description}>
					<h2>Характеристики</h2>
					<div className={styles.characteristics}>
						<div className={styles.box}>
							{currentProduct.characteristics.about
								.slice(0, Math.ceil(currentProduct.characteristics.about.length / 2))
								.map((ch) => (
									<div key={ch.property + '-' + ch.value} className={styles.item}>
										<div className={styles.property}>
											<span>{ch.property}</span>
										</div>
										<div className={styles.value}>{ch.value}</div>
									</div>
								))}
						</div>
						<div className={styles.box}>
							{currentProduct.characteristics.about
								.slice(Math.ceil(currentProduct.characteristics.about.length / 2))
								.map((ch) => (
									<div key={ch.property + '-' + ch.value} className={styles.item}>
										<div className={styles.property}>
											<span>{ch.property}</span>
										</div>
										<div className={styles.value}>{ch.value}</div>
									</div>
								))}
						</div>
					</div>
					<small>
						Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете
						товара носит справочный характер и основывается на последних доступных к моменту публикации сведениях
					</small>
				</section>
				<div ref={feedbacksAndQuestionsBox}>
					<FeedbacksQuestionsBox
						questions={currentProduct.questions}
						productTitle={currentProduct.title}
						productMainImage={currentProduct.images[0]}
						feedbacks={currentProduct.feedbacks}
						productRating={currentProduct.rating}
					/>
				</div>
				<Selection items={productsMock.slice(0, 12)} rowTotalItems={6} headingText={'Рекомендации'} />
			</div>
		</>
	)
}
