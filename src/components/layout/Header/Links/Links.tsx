import { FC } from 'react'
import styles from './Links.module.scss'
import { PATHS } from '@/constants/paths'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getProductsCartTotal } from '@/utils/products/products'
import { UserInfoLink } from './UserInfoLink/UserInfoLink'
import Link from 'next/link'
import { ordersMock } from '@/mock/orders'
import { IUser } from '@/types/user/user.types'
import { favoritesMock } from '@/mock/favorites'

export const Links: FC = () => {
	const ordersItemsLength = ordersMock.length
	const cartItems = useTypedSelector((state) => state.cart.cartItems)
	const isLoggedIn = useTypedSelector((state) => state.user.isLoggedIn)
	const userData = useTypedSelector((state) => state.user.userData)
	const favoritesLength = favoritesMock.length

	return (
		<div className={styles.linkBox}>
			<UserInfoLink isLoggedIn={isLoggedIn} userData={userData as IUser} />

			<Link className={styles.link} href={PATHS.MY_ORDER_LIST}>
				{isLoggedIn && userData && ordersItemsLength > 0 && <span className={styles.control}>{ordersItemsLength}</span>}
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M12.486 1.126a1 1 0 0 0-.972 0l-9 5A1 1 0 0 0 2 7v9.98a1.003 1.003 0 0 0 .515.894l9 5a1 1 0 0 0 .989-.01l8.982-4.99A1 1 0 0 0 22 17V7a1 1 0 0 0-.514-.874l-9-5ZM11 20.3l-7-3.888V8.7l2 1.11V13a1 1 0 1 0 2 0v-2.078l3 1.666v7.713ZM7.5 8.356 5.06 7 12 3.144 14.441 4.5l-6.94 3.856ZM9.56 9.5l6.94-3.856L18.941 7l-6.94 3.856L9.558 9.5ZM13 20.3v-7.712L20 8.7v7.712L13 20.3Z'
					></path>
				</svg>
				<span>{'Заказы'}</span>
			</Link>

			<Link className={styles.link} href={PATHS.MY_FAVORITES}>
				{isLoggedIn && userData && favoritesLength > 0 && <span className={styles.control}>{favoritesLength}</span>}
				<svg width={24} height={24}>
					<path
						fill='currentColor'
						d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Zm5 17c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z'
					></path>
				</svg>
				<span>{'Избранное'}</span>
			</Link>

			<Link className={styles.link} href={PATHS.CART}>
				{isLoggedIn && userData && cartItems.length > 0 && (
					<span className={styles.control}>{getProductsCartTotal(cartItems, true)}</span>
				)}
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
