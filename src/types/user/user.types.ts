export interface IUser {
	id: number
	name: string
	lastName: string
	patronymic: string
	email: string
	gender: 'man' | 'woman'
	likedItems?: number[]
	cartItems?: { id: number; quantity: number }[]
	birthdayDate: Date
	phone: string
	avatar: string
}
