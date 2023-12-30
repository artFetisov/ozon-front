import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FC } from 'react'
import styles from './CartItems.module.scss'
import { CartItem } from './CartItem/CartItem'
import { ICartItem } from '@/types/cart/cart.types'

interface ICartItemsProps {
	items: ICartItem[]
}

export const CartItems: FC<ICartItemsProps> = ({ items }) => {
	return (
		<div className={styles.cartItems}>
			{items.map((c) => (
				<CartItem key={c.price + '-' + Math.random()} item={c} />
			))}
		</div>
	)
}
