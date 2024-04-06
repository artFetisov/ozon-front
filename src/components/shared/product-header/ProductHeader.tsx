import { useScroll } from '@/hooks/useScroll'
import styles from './ProductHeader.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import { IProduct } from '@/types/product/product.types'
import { Rating } from '@/components/ui-kit/rating/Rating'
import { Button } from '@/components/ui-kit/button/Button'
import Link from 'next/link'
import { AvatarRound } from '@/components/ui-kit/user-data-round/AvatarRound'

interface IProductHeaderProps {
	product: IProduct
	scrollToFeedbacks: () => void
}

export const ProductHeader: FC<IProductHeaderProps> = ({ product, scrollToFeedbacks }) => {
	const { isHideContainer } = useScroll(700)

	const totalItemsInCart = 3

	return (
		<div
			className={cn(styles.productHeader, {
				[styles.hide]: !isHideContainer,
				[styles.show]: isHideContainer,
			})}
		>
			<div className={styles.innerBox}>
				<div className={styles.leftBox}>
					<div className={styles.img}>
						<Image alt='' src={product.images[6]} fill />
					</div>
					<div className={styles.info}>
						<span className={styles.productTitle}>{product.title}</span>
						<div className={styles.rateAndQuest}>
							<div className={styles.rBox} onClick={scrollToFeedbacks}>
								<div className={styles.ratingBox}>
									<Rating rating={product.rating.averageValue} variant='small' />
								</div>
								<div className={styles.text}>233 отзывов</div>
							</div>
							<div className={styles.text} onClick={scrollToFeedbacks}>
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
						</div>
					</div>
				</div>
				<div className={styles.middleBox}>
					<Link href={'seller'} style={{ marginRight: '8px' }}>
						<AvatarRound name={product.seller.title} />
					</Link>
					<div className={styles.sellerInfo}>
						<div>{product.seller.title}</div>
						<span>Перейти в магазин</span>
					</div>
				</div>
				<div className={styles.rightBox}>
					<div className={styles.btnGroup}>
						<Button color='green' variant='large' isFullWidth={false}>
							Перейти в корзину
						</Button>
						<Button variant='large' color='lightBlue' style={{ marginLeft: '4px' }} isFullWidth={false}>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
								<path fill='currentColor' d='M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z'></path>
							</svg>
						</Button>
						<span className={styles.counter}>{totalItemsInCart}</span>
						<Button variant='large' color='lightBlue' isFullWidth={false}>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
								<path
									fill='currentColor'
									d='M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1'
								></path>
							</svg>
						</Button>
					</div>
					<Button variant='large' color='lightBlue' isFullWidth={false}>
						<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24}>
							<path
								fill='currentColor'
								d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.5 21.5 0 0 0 12 19.91a21.6 21.6 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5m5 17c-.316-.02-.56-.147-.848-.278a23.5 23.5 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.6 23.6 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278'
							></path>
						</svg>
					</Button>
				</div>
			</div>
		</div>
	)
}
