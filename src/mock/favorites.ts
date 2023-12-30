import { ICartItem } from '@/types/cart/cart.types'
import { categoriesMock } from './categories'

export const favoritesMock: ICartItem[] = [
	{
		price: 999,
		checked: true,
		title: 'fldmfk mfkmkfs ssssss smsms;f;ekf;efef',
		remains: 10,
		amount: 2,
		category: categoriesMock[1],
		discount: 33,
		seller: { id: 0, title: 'nfdfef', logo: 'fd', description: 'm sjknfne' },
		id: 0,
		images: ['', ''],
		slug: 'www',
		characteristics: {
			color: 'белый',
			weight: 0.7,
		},
	},
	{
		price: 741,
		checked: true,
		amount: 2,
		title: 'fldmfkmfk m1111111kf msefe,f;elflf[f df;d;fd;f',
		category: categoriesMock[1],
		discount: 53,
		remains: 2,
		id: 1,
		images: ['', ''],
		seller: { id: 0, title: 'nfdfef', logo: 'fd', description: 'm sjknfne' },
		slug: 'www',
		characteristics: {
			color: 'красный',
			weight: 0.7,
		},
	},
]
