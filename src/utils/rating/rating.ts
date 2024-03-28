export const getRatingPercent = (rating: number): string => {
	const percent = (rating / 5) * 100
	return percent + '%'
}

export const getTotalCountPercent = (totalCount: number, count: number) => {
	return (count / totalCount) * 100 + '%'
}
