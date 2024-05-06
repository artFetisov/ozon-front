import { FC } from 'react'
import styles from './Links.module.scss'
import { PATHS } from '@/constants/paths'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getProductsCartTotal } from '@/utils/products/products'
import { UserInfoLink } from './UserInfoLink/UserInfoLink'
import Link from 'next/link'
import { OrdersLink } from './OrdersLink/OrdersLink'
import { ordersMock } from '@/mock/orders'

export const Links: FC = () => {
	const ordersItemsLength = ordersMock.length
	const cartItems = useTypedSelector((state) => state.cart.cartItems)
	const isAuth = useTypedSelector((state) => state.user.isAuth)

	return (
		<div className={styles.linkBox}>
			<UserInfoLink isAuth={isAuth} />
			<OrdersLink isAuth={isAuth} countItems={ordersItemsLength} />
			<Link className={styles.link} href={PATHS.MY_FAVORITES}>
				{isAuth && <span className={styles.control}>3</span>}
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Zm5 17c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z'
					></path>
				</svg>
				<span>{'Избранное'}</span>
			</Link>
			<Link className={styles.link} href={PATHS.CART}>
				{isAuth && <span className={styles.control}>{getProductsCartTotal(cartItems, true)}</span>}
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h4a1 1 0 0 1 .986 1.164l-1.582 9.494A4 4 0 0 1 17.46 22H6.54a4 4 0 0 1-3.945-3.342L1.014 9.164A1 1 0 0 1 2 8h4V6Zm2 2h5a1 1 0 1 1 0 2H3.18l1.389 8.329A2 2 0 0 0 6.54 20h10.92a2 2 0 0 0 1.972-1.671L20.82 10H17a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z'
					></path>
				</svg>
				<span>{'Корзина'}</span>
			</Link>
		</div>
	)
}
