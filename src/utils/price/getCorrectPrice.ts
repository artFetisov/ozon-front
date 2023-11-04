export const getPriceWithDiscount = (price, discount) => {
	return Math.floor(price / 100 * (100 - discount))
}

export const getPriceWithWhitespace = (number: number) => {
	return number.toString().split('').reverse().map((el, index) => index % 3 !== 2 ? el : ` ${el}`).reverse().join('')
}
