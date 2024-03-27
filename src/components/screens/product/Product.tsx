'use client'

import { FC, useEffect, useRef, useState } from 'react'
import styles from './Product.module.scss'
import { productsMock } from '@/mock/products'
import { IProduct } from '@/types/product/product.types'
import { Rating } from '@/components/ui-kit/rating/Rating'
import { PriceCard } from '@/components/ui-kit/price-card/PriceCard'
import { getPriceWithDiscount, getPriceWithWhitespace } from '@/utils/price/price'
import { Button } from '@/components/ui-kit/button/Button'
import { Gallery } from '@/components/ui-kit/gallery/Gallery'
import { imagesGalleryMock } from '@/mock/galleryImages'
import { ProductVariantBox } from '@/components/ui-kit/product-variant-box/ProductVariantBox'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { FeedbacksQuestionsBox } from '@/components/ui-kit/feedbacks-questions-box/FeedbacksQuestionsBox'

interface IProductProps {
	id: number
	slug: string
}

const HEADER_HEIGHT = 64

export const Product: FC<IProductProps> = ({ id, slug }) => {
	const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null)

	const descriptionBox = useRef<HTMLDivElement | null>(null)

	const handleScrollToDescription = () => {
		document.body.scrollTo({
			top: descriptionBox.current?.offsetTop ? descriptionBox.current?.offsetTop - HEADER_HEIGHT : 0,
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
		<div className={styles.productWrapper}>
			<div className={styles.infoProductTopBox}>
				<h1 className={styles.title}>{currentProduct?.title}</h1>
				<div className={styles.infoBox}>
					<div className={styles.rateAndFeedbacksBox}>
						<div className={styles.ratingBox}>
							<Rating rating={currentProduct?.rating.averageValue} />
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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat sed, sequi iste aliquid maiores quibusdam
				aperiam autem nesciunt voluptatem cum dolorem quam odio. Blanditiis optio rerum obcaecati facilis culpa. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat sed, sequi iste aliquid maiores quibusdam aperiam
				autem nesciunt voluptatem cum dolorem quam odio. Blanditiis optio rerum obcaecati facilis culpa. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Nemo fugiat sed, sequi iste aliquid maiores quibusdam aperiam autem
				nesciunt voluptatem cum dolorem quam odio. Blanditiis optio rerum obcaecati facilis culpa. Сковорода гриль
				Monolit-28G - это высококачественная профессиональная посуда, которая станет отличной альтернативой
				электрогрилю, барбекю и уличному мангалу! Теперь приготовление любимых блюд будет намного проще и быстрее! С
				нашей сковородкой вы сможете без труда приготовить стейки из рыбы и мяса, овощи, грибы или сочного цыпленка
				табака и порадовать всю семью! Monolit-28G идеально подходит для жарки и запекания. Благодаря инновационному
				5-слойному антипригарному покрытию с керамической крошкой MEGASTONE PRO-5
				<br></br>
				от DYFLON, вы сможете сделать любое блюдо без добавления масла или жира! Во время приготовления ингредиенты
				практически не соприкасаются с раскаленной поверхностью, что позволяет жарить их без добавления масла, а
				уникальное распределение жара от стенок обеспечивает быстрое приготовление. Это станет полезным инструментом для
				тех, кто следит за своим здоровьем или находится на диете, ведь блюда на гриле содержат меньше калорий. Изделие
				изготовлено из высококачественного кованого алюминия и имеет термостойкое внешнее покрытие. Антипригарное
				покрытие DYFLON устойчиво к царапинам и механическим повреждениям, что позволит посуде прослужить вам не один
				год и сохранить свой великолепный первозданный вид. Подходит для газовых, электрических, индукционных и
				керамических плит. Квадратная сковорода имеет высокие бортики и утолщенное широкое рифленое дно, что
				обеспечивает равномерное распределение тепла и сохранение высокой температуры. Наличие носиков по бокам
				позволяет аккуратно слить лишнюю жидкость во время готовки<br></br>
				<br></br>. Диаметр изделия - 28 см (крышка в комплект не входит). Универсальная алюминиевая сковородка гриль
				имеет эргономичной бакелитовой ручкой с покрытием , которая удобно лежит в руке и не нагревается во время
				приготовления. Такое покрытие намного удобнее и безопаснее, чем обычный пластик. Большая сковорода гриль Polaris
				Monolit-28G станет незаменимым помощником на вашей кухне и позволит вам наслаждаться вкусными и здоровыми
				блюдами! Комплектация<br></br>
				<br></br> Сковорода-гриль Характеристики Общие Бренд Polaris Гарантийный срок 2 года Страна-изготовитель Китай
				Габариты и вес Размер крышки, см 28 Диаметр дна, см 21.7 Толщина стенок, мм 3.5 Толщина дна, мм 3.5 Вес товара,
				г 1170 Комплектация Вид ручки с фиксированной ручкой Крышка без крышки Материал Антипригарное покрытие Да
				Материал Алюминий Основные Особенности посуды: Ненагревающиеся ручки, Можно мыть в посудомойке, Жаропрочная,
				Профессиональная посуда Дополнительные Тип Сковорода-гриль Форма сковороды Квадрат Высота стенки, см 4 Упаковка
				Подарочная упаковка Цвет Черный Артикул 11004895 Вид выпуска т<br></br>
				овара Фабричное производство Совместимые плиты: Для газовых плит, Для стеклокерамических плит, Для индукционных
				плит, Для электрических плит, Для галогеновых конфорок Вид блюда: Блины, Вафли, Десерт, Жаркое, Запеканка, Кекс,
				Кулич, Лепёшка, Овощи, Маффины, Макаруны, Мясо, Паэлья, Печенье, Пирог, Пицца, Плов, Рыба, Птица, Суп, Торт,
				Фондю, Хлеб, Яичница Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем
				виде и
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
					Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара
					носит справочный характер и основывается на последних доступных к моменту публикации сведениях
				</small>
			</section>
			<FeedbacksQuestionsBox feedbacks={currentProduct.feedbacks} productRating={currentProduct.rating} />
			<Selection items={productsMock.slice(0, 12)} rowTotalItems={6} headingText={'Рекомендации'} />
		</div>
	)
}
