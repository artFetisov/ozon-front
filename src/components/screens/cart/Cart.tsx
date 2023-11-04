import { FC } from 'react'
import styles from './Cart.module.scss'
import { Heading } from '@/components/ui-kit/heading/Heading'

export const Cart: FC = () => {
	return <div className={styles.cartBox}>
		<div className={styles.cart}>
			<Heading text={'Корзина'} count={3} />
			<div>
				items
			</div>
		</div>
	</div>
}