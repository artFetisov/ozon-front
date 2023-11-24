import { FC } from 'react'
import styles from './Cart.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'
import { cartItems } from '@/mock/cartItems'
import { CartItem } from '@/components/screens/cart/CartItem/CartItem'
import { Button } from '@/components/ui-kit/button/Button'
import cn from 'classnames'
import { getProductsCartTotal } from '@/utils/products/products'

export const Cart: FC = () => {
	return <div className={styles.cartBox}>
		<div className={styles.cart}>
			<Heading text={'Корзина'} count={3} />
			<div className={styles.orderSectionCartBox}>
				<div className={styles.cartItemsBox}>
					<div className={styles.controlCartItems}>
						<div className={styles.removeAndSelectBox}>
							<CheckBox text={'Выбрать все'} />
							<div className={styles.removeTitle}>Удалить выбранные</div>
						</div>
						<div className={styles.shareBox}>
							<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'>
								<path fill='currentColor'
											d='M7.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L9 4.414V9a1 1 0 1 1-2 0V4.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2ZM2 9a3 3 0 0 1 3-3 1 1 0 0 1 0 2 1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9Z'></path>
							</svg>
							<span>Поделиться</span>
						</div>
					</div>
					<div className={styles.cartItems}>
						{cartItems.map((c) => <CartItem key={c.title + '-' + c.id} item={c} />)}
					</div>
				</div>
				<div className={styles.toOrderBox}>
					<section>
						<div className={styles.topBox}>
							<Button variant={'large'} color={'green'}>Перейти к оформлению</Button>
							<div>
								<span>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
							</div>
						</div>
						<div className={styles.priceBox}>
							<div className={cn(styles.box, styles.p16)}>
								<span className={styles.heading}>Ваша корзина</span>
								<span className={styles.grey}>{getProductsCartTotal(cartItems)} • кг</span>
							</div>
							<div className={cn(styles.box, styles.p12)}>
								<span>Ваша корзина</span>
								<span>333</span>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
}