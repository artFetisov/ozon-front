export interface IUser {
	id: number
	name: string
	lastName: string
	email: string
	likedItems?: number[]
	cartItems?: { id: number; quantity: number }[]
}
