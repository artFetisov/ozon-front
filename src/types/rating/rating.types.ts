export interface IRating {
	id: number
	averageValue: number
	totalCount?: number
	one: ISubRating
	two: ISubRating
	three: ISubRating
	four: ISubRating
	five: ISubRating
}

interface ISubRating {
	value: number
	totalCount: number
}
