import { FC } from 'react'
import styles from './Cart.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'
import { CheckBox } from '@/components/ui-kit/checkbox/CheckBox'

export const Cart: FC = () => {
	return <div className={styles.cartBox}>
		<div className={styles.cart}>
			<Heading text={'Корзина'} count={3} />
			<div className={styles.orderSectionCartBox}>
				<div className={styles.cartItemsBox}>
					<div className={styles.controlCartItems}>
						<div className={styles.removeAndSelectItems}>
							<CheckBox text={'Выбрать все'} />
							<div>Удалить выбранные</div>
						</div>
						<div className={styles.shareItems}>share</div>
					</div>
				</div>
				<div className={styles.toOrderBox}>
					to order page
				</div>
			</div>
		</div>
	</div>
}