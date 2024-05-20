export const getCorrectDateView = (date: Date) => {
	date = new Date(date)

	return (
		date.getDate() +
		' ' +
		date.toLocaleString('default', { month: 'long' }) +
		`${getLastLetterMonthName(date.getMonth())}` +
		' ' +
		date.getFullYear()
	)
}

export const getDateViewWithDots = (date: Date) => {
	date = new Date(date)

	return `${getCorrectDateNumber(date.getDate())}.${getCorrectDateNumber(date.getMonth() + 1)}.${date.getFullYear()}`
}

const getCorrectDateNumber = (num: number) => {
	return num < 10 ? `0${num}` : num
}

const getLastLetterMonthName = (monthNumber: number) => {
	return monthNumber === 2 || monthNumber === 8 ? 'а' : 'я'
}
