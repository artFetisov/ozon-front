import { ICartItem } from '@/types/cart/cart.types'

export const getProductsCartTotal = (items: ICartItem[]) => {
	const total = items.reduce((acc, cur) => cur.amount + acc, 0)
	return total === 1 ? `${total} товар` : (total > 1 && total < 5) ? `${total} товара` : `${total} товаров`
}