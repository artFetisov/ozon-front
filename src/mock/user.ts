import { IUser } from '@/types/user/user.types'
import { productsMock } from './products'

export const currentAuthUser: IUser = {
	name: 'Artem',
	lastName: 'Fetisov',
	email: 'fetishfestoff@mail.ru',
	patronymic: 'Dmitrievich',
	gender: 'other',
	birthdayDate: new Date(),
	id: 12,
	likedItems: productsMock.map((p) => p.id).slice(5, 10),
	cartItems: productsMock.map((p, ind) => ({ id: p.id, quantity: ind })).slice(0, 5),
	phone: '9875085336',
	avatar: '',
}
