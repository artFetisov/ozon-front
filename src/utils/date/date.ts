export const getCorrectDateView = (date: Date) => {
	date = new Date(date)

	const currentDate = new Date().getDate()

	const currentMonth = new Date().getMonth()

	const currentYear = new Date().getFullYear()

	console.log(date.getMonth())

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
