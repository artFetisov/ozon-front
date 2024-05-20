export interface IUser {
	id: number
	name: string
	lastName: string
	patronymic: string
	email: string
	gender: TypeUserGender
	likedItems?: number[]
	cartItems?: { id: number; quantity: number }[]
	birthdayDate: Date
	phone: string
	avatar: string
}

export type TypeUserGender = 'man' | 'woman'
