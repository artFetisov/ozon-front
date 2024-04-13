import { IUser } from '@/types/user/user.types'
import { productsMock } from './products'

export const currentAuthUser: IUser = {
	name: 'Artem',
	lastName: 'Fetisov',
	email: 'jandjadnjdj@kkmail.ri',
	id: 12,
	likedItems: productsMock.map((p) => p.id).slice(5, 10),
	cartItems: productsMock.map((p, ind) => ({ id: p.id, quantity: ind })).slice(0, 5),
}
