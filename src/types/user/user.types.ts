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

export interface IUserEditNameAndGenderForm
	extends Pick<IUser, 'id' | 'name' | 'lastName' | 'patronymic' | 'gender' | 'birthdayDate'> {}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface ILoginByEmailResponse {
	email: string
	isNewUser: boolean
}

// export interface IResponse<T = {}> {
// 	resultCode: number
// 	messages: string[]
// 	fieldsErrors: string[]
// 	data: T
// }
