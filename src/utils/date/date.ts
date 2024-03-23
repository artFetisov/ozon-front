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

const getLastLetterMonthName = (monthNumber: number) => {
	return monthNumber === 2 || monthNumber === 8 ? 'а' : 'я'
}
