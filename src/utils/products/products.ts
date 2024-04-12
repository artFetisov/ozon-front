import { ICartItem } from '@/types/cart/cart.types'

export const getProductsCartTotal = (items: ICartItem[], isOnlyNumber?: boolean) => {
	const total = items.reduce((acc, cur) => cur.amount + acc, 0)

	return isOnlyNumber
		? total
		: total === 1
		? `${total} товар`
		: total > 1 && total < 5
		? `${total} товара`
		: `${total} товаров`
}

export const getProductsTotalWeight = (items: ICartItem[]) => {
	return items.reduce((acc, cur) => {
		const curItemWeight = cur.characteristics.about.find((c) => c.property === 'Вес')?.value
		return (curItemWeight as number) * cur.amount + acc
	}, 0)
}
