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

export type TypeUserGender = 'male' | 'female' | 'other'

export interface IUserEditPersonalDataForm
	extends Pick<IUser, 'id' | 'name' | 'lastName' | 'patronymic' | 'gender' | 'birthdayDate'> {}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse {
	user: IUser
	tokens: ITokens
}

export interface ILoginByEmailResponse {
	email: string
	isNewUser: boolean
}

export interface IUpdateAvatarResponse {
	avatar: string
}
