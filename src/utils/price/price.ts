export const getPriceWithDiscount = (price, discount) => {
	return Math.floor(price / 100 * (100 - discount))
}

export const getPriceWithWhitespace = (number: number, amount?: number) => {
	return amount
		? (number * amount).toString().split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('')
		: number.toString().split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('')
}

export const getPriceWithCard = (price: number) => {
	return Math.floor(price / 100 * (100 - 5))
}

export const getBonus = (price: number, amount: number) => {
	const bonus = Math.floor((price / 100 * (100 - 95)) * amount)
	return bonus < 5 ? `${bonus} бонуса` : `${bonus} бонусов`
}
