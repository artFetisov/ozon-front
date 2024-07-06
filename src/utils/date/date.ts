export const getCorrectDateView = (date?: Date) => {
	date = date ? new Date(date) : new Date()

	const dayNumber = date?.getDate()
	const monthName = date?.toLocaleString('default', { month: 'long' })
	const yearNumber = date.getFullYear()

	return `${dayNumber} ${monthName.slice(0, monthName.length - 1)}${getLastLetterMonthName(
		date.getMonth()
	)} ${yearNumber}`
}

export const getDateViewWithDots = (date?: Date): string => {
	if (!date) return ''

	date = new Date(date)

	return `${getCorrectDateNumber(date.getDate())}.${getCorrectDateNumber(date.getMonth() + 1)}.${date.getFullYear()}`
}

const getCorrectDateNumber = (num: number) => {
	return num < 10 ? `0${num}` : num
}

const getLastLetterMonthName = (monthNumber: number) => {
	return monthNumber === 2 || monthNumber === 8 ? 'а' : 'я'
}

export function getMonth(month: number): Date[][] {
	month = Math.floor(month)
	const year = new Date().getFullYear()
	const monthFirstDay = new Date(year, month, 1).getDay()

	console.log(monthFirstDay)

	let dayCount = 0 - monthFirstDay + 1

	return new Array(5).fill([]).map(() =>
		new Array(7).fill(null).map(() => {
			dayCount++
			return new Date(year, month, dayCount)
		})
	)
}
