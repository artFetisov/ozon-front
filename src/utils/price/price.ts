import { ICartItem } from '@/types/cart/cart.types'

export const getPriceWithDiscount = (price: number, discount: number) => {
	return Math.round((price / 100) * (100 - discount))
}

export const getProductDiscount = (item: ICartItem) => {
	return Math.round((item.price / 100) * item.discount)
}

export const getPriceWithWhitespace = (number: number, amount?: number) => {
	return amount
		? (number * amount)
				.toString()
				.split('')
				.reverse()
				.map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
				.reverse()
				.join('')
		: number
				.toString()
				.split('')
				.reverse()
				.map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
				.reverse()
				.join('')
}

export const getPriceWithCard = (price: number) => {
	return Math.round((price / 100) * (100 - 5))
}

export const getBonus = (price: number, amount: number) => {
	const bonus = Math.round((price / 100) * (100 - 95) * amount)
	return bonus < 5 ? `${bonus} бонуса` : `${bonus} бонусов`
}

export const getItemsTotalPrice = (items: ICartItem[]) => {
	return Math.round(items.reduce((acc, cur) => cur.price * cur.amount + acc, 0))
}

export const getItemsTotalDiscount = (items: ICartItem[]) => {
	return Math.round(items.reduce((acc, cur) => getProductDiscount(cur) * cur.amount + acc, 0))
}

export const getItemsTotalPriceWithDiscount = (items: ICartItem[]) => {
	return Math.round(items.reduce((acc, cur) => getPriceWithDiscount(cur.price, cur.discount) * cur.amount + acc, 0))
}

export const getItemsTotalPriceWithDiscountAndCard = (items: ICartItem[]) => {
	return Math.round(
		items.reduce((acc, cur) => getPriceWithDiscount(getPriceWithCard(cur.price), cur.discount) * cur.amount + acc, 0)
	)
}
