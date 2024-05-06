import { useScroll } from '@/hooks/useScroll'
import styles from './ProductHeader.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'
import { IProduct } from '@/types/product/product.types'
import { Rating } from '@/components/ui-kit/rating/Rating'
import Link from 'next/link'
import { AvatarRound } from '@/components/ui-kit/user-data-round/AvatarRound'
import { CartQuantityButtonGroup } from '../cart-quantity-button-group/CartQuantityButtonGroup'

interface IProductHeaderProps {
	product: IProduct
	scrollToFeedbacks: () => void
}

export const ProductHeader: FC<IProductHeaderProps> = ({ product, scrollToFeedbacks }) => {
	const { isHideContainer } = useScroll(700)

	const [cartQuantity, setCartQuantity] = useState(0)

	const handlePlusCartQuantity = (num: number) => {
		setCartQuantity(num)
	}

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
					<CartQuantityButtonGroup setCartQuantity={handlePlusCartQuantity} cartQuantity={cartQuantity} />
				</div>
			</div>
		</div>
	)
}
