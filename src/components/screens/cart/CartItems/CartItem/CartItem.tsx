import { FC } from 'react'
import { ICartItem } from '@/types/cart/cart.types'
import styles from './CartItem.module.scss'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'
import Link from 'next/link'
import Image from 'next/image'
import image from '@/assets/images/legs.webp'
import { PATHS } from '@/constants/paths'
import { IconButton } from '@/components/ui-kit/icon-button/IconButton'
import { getBonus, getPriceWithCard, getPriceWithDiscount, getPriceWithWhitespace } from '@/utils/price/price'
import { AmountCounter } from '@/components/ui-kit/amount-counter/AmountCounter'
import { useActions } from '@/hooks/useActions'
import { PriceCard } from '@/components/ui-kit/price-card/PriceCard'

interface ICartItemProps {
	item: ICartItem
}

export const CartItem: FC<ICartItemProps> = ({ item }) => {
	const { deleteCartItem, updateCartItem } = useActions()

	const deleteItemHandler = () => {
		deleteCartItem({ id: item.id })
	}

	const updateItemHandler = () => {
		updateCartItem({ id: item.id, checked: !item.checked })
	}

	return (
		<div className={styles.cartItem}>
			<div className={styles.itemInfo}>
				<div className={styles.checkBox}>
					<CheckBox checked={item.checked} onChangeMy={updateItemHandler} />
				</div>
				<Link href={`${PATHS.PRODUCT}${item.title}/${item.id}`} className={styles.image}>
					<Image src={image} height={92} width={69} alt={'Product Image'} />
				</Link>
				<div className={styles.infoBox}>
					<div className={styles.topSide}>
						<hr style={{ height: '8px', border: 'none' }} />
						<div className={styles.title}>{item.title}</div>
						<hr style={{ height: '8px', border: 'none' }} />
						{item.characteristics && item.characteristics['color'] && (
							<div className={styles.color}>цвет {item.characteristics['color']}</div>
						)}
					</div>
					<div className={styles.bottomSide}>
						<hr style={{ height: '16px', border: 'none' }} />
						<div className={styles.logo}>
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' style={{ marginRight: '6px' }}>
								<path
									fill='currentColor'
									d='M8 2.065c-2-.643-.667 3.71-2 3.71-.667 0-.806-1.258-1.339-1.258C3.994 4.517 2 6.56 2 9.13 2 11.474 3.333 14 6 14c.667 0 1-.212.625-.62-1.875-2.044-1.358-4.042-.63-3.808.94.302 1.823 1.779 2.557-1.35.186-.847.653-.622 1.266 0 .921.932 1.402 2.94-.36 5.157-.291.367.209.621 1.021.621C12.23 14 14 12.106 14 9.13c0-4.004-4-6.423-6-7.065Z'
								></path>
							</svg>
							<div className={styles.textT}>Черная пятница</div>
						</div>
						<div className={styles.buttons}>
							<IconButton svgSize={16} like>
								<path
									fill='currentColor'
									d='M16 5.522C16 2.957 14.052 1 11.5 1c-1.432 0-2.665.799-3.5 1.926C7.165 1.799 5.932 1 4.5 1 1.948 1 0 2.957 0 5.522c0 2.457 1.66 4.415 3.241 5.743 1.617 1.358 3.387 2.258 4.062 2.577.444.21.95.21 1.394 0 .675-.32 2.445-1.219 4.062-2.577C14.339 9.937 16 7.979 16 5.522Z'
								></path>
							</IconButton>
							<IconButton svgSize={16} onClickIcon={deleteItemHandler}>
								<path
									fill='currentColor'
									d='m4.888 3.035.275-.826A2.5 2.5 0 0 1 7.535.5h.93a2.5 2.5 0 0 1 2.372 1.71l.275.825c2.267.09 3.555.406 3.555 1.527 0 .938-.417.938-1.25.938H2.583c-.833 0-1.25 0-1.25-.938 0-1.12 1.288-1.437 3.555-1.527Zm1.856-.299-.088.266C7.082 3 7.53 3 8 3c.47 0 .918 0 1.345.002l-.089-.266a.833.833 0 0 0-.79-.57h-.931a.833.833 0 0 0-.79.57ZM2.167 7.167c0-.6.416-.834.833-.834h10c.417 0 .833.235.833.834 0 6.666-.416 8.333-5.833 8.333s-5.833-1.667-5.833-8.333Zm4.166 1.666a.833.833 0 0 0-.833.834v1.666a.833.833 0 1 0 1.667 0V9.667a.833.833 0 0 0-.834-.834Zm4.167.834a.833.833 0 1 0-1.667 0v1.666a.833.833 0 1 0 1.667 0V9.667Z'
								></path>
							</IconButton>
							<IconButton svgSize={16} text={'Купить'}>
								<path
									fill='currentColor'
									d='M4.932 3.64C3.705 4.886.638 8 3.092 8.996l2.454.997c1.227.498 1.227.498.981 1.744l-.368 1.868c-.859 4.36 3.682 0 4.909-1.245 1.227-1.246 4.294-4.36 1.84-5.357l-2.454-.996c-1.227-.498-1.227-.498-1.022-1.744.088-.539.272-1.246.409-1.869.958-4.36-3.682 0-4.909 1.246Z'
								></path>
							</IconButton>
						</div>
					</div>
				</div>
				<div className={styles.priceBox}>
					<div className={styles.priceWithCard}>
						<PriceCard amount={item.amount} price={item.price} discount={item.discount} color='red' variant='small' />
						<div className={styles.text}>с Ozon Картой</div>
					</div>
					<hr style={{ height: '4px', border: 'none' }} />
					<div className={styles.price}>
						<span className={styles.priceWithDiscount}>
							{getPriceWithWhitespace(getPriceWithDiscount(item.price, item.discount), item.amount)} ₽
						</span>
						<span className={styles.priceWithoutDiscount}>{getPriceWithWhitespace(item.price, item.amount)} ₽</span>
					</div>
					<hr style={{ height: '8px', border: 'none' }} />
					<div className={styles.bonus}>
						<svg width='16' height='16' style={{ marginRight: '4px' }}>
							<path
								fill='currentColor'
								d='M6 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM1 8a5 5 0 1 1 10 0A5 5 0 0 1 1 8Zm10.134-3.966a1 1 0 0 1 1.367-.364A4.998 4.998 0 0 1 15 8a4.998 4.998 0 0 1-2.5 4.33 1 1 0 1 1-1-1.73c.899-.52 1.5-1.49 1.5-2.6a3 3 0 0 0-1.5-2.6 1 1 0 0 1-.366-1.366Z'
							></path>
						</svg>
						<span>
							{getBonus(getPriceWithDiscount(item.price, item.discount), item.amount)} {item.seller.title}
						</span>
					</div>
				</div>
			</div>
			<div className={styles.amountBox}>
				<AmountCounter amount={item.amount} remains={item.remains} id={item.id} />
				{item.amount > 1 && (
					<div className={styles.oneItemPrice}>
						{getPriceWithWhitespace(getPriceWithCard(getPriceWithDiscount(item.price, item.discount)))} ₽ / шт.
					</div>
				)}
			</div>
		</div>
	)
}
