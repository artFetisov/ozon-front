export const getRatingPercent = (rating: number): string => {
	const percent = (rating / 5) * 100
	return percent + '%'
}
