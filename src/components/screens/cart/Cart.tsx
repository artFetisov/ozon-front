'use client'

import { FC, useEffect } from 'react'
import styles from './Cart.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { productsMock } from '@/mock/products'
import { useActions } from '@/hooks/useActions'
import { PreOrderBox } from './PreOrderBox/PreOrderBox'
import { CartItems } from './CartItems/CartItems'
import { mockCartItems } from '@/mock/cartItems'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { getProductsCartTotal } from '@/utils/products/products'

export const Cart: FC = () => {
	const { setCartItems, setSelectedCartItems, selectAllCartItems, deleteSelectedCartItems } = useActions()

	const isSelectedAll = useTypedSelector((state) => state.cart.isSelectedAll)
	const cartItems = useTypedSelector((state) => state.cart.cartItems)
	const authUser = useTypedSelector((state) => state.user.user)

	useEffect(() => {
		setCartItems(mockCartItems)
		setSelectedCartItems(mockCartItems.filter((c) => c.checked))
	}, [])

	const handleSelectAllCartItems = () => {
		selectAllCartItems()
	}

	const handleDeleteSelectedCartItems = () => {
		deleteSelectedCartItems()
	}

	return (
		<div className={styles.cartBox}>
			<div className={styles.cart}>
				<Heading text={'Корзина'} count={getProductsCartTotal(cartItems, true)} />
				<div className={styles.orderSectionCartBox}>
					<div className={styles.cartItemsBox}>
						<div className={styles.controlCartItems}>
							<div className={styles.removeAndSelectBox}>
								<CheckBox text={'Выбрать все'} onChangeMy={handleSelectAllCartItems} checked={isSelectedAll} />
								<div className={styles.removeTitle} onClick={handleDeleteSelectedCartItems}>
									Удалить выбранные
								</div>
							</div>
							<div className={styles.shareBox}>
								<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
									<path
										fill='currentColor'
										d='M7.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L9 4.414V9a1 1 0 1 1-2 0V4.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2ZM2 9a3 3 0 0 1 3-3 1 1 0 0 1 0 2 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9Z'
									></path>
								</svg>
								<span>Поделиться</span>
							</div>
						</div>
						<CartItems items={cartItems} />
					</div>
					<PreOrderBox />
				</div>
			</div>
			<Selection rowTotalItems={6} items={productsMock.slice(0, 6)} headingText={'Вы смотрели'} />
			<Selection rowTotalItems={5} items={productsMock.slice(0, 5)} headingText={'Рекомендуем'} />
			<Selection rowTotalItems={4} items={productsMock.slice(0, 4)} headingText={'Лучшее'} />
		</div>
	)
}
