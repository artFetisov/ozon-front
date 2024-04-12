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
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
		id: 0,
		images: ['', ''],
		slug: 'www',
	},
	{
		price: 741,
		checked: true,
		amount: 2,
		title: 'fldmfkmfk m1111111kf msefe,f;elflf[f df;d;fd;f',
		category: categoriesMock[3],
		discount: 53,
		remains: 2,
		id: 1,
		images: ['', ''],
		slug: 'www',
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
	},
	{
		price: 1500,
		checked: true,
		title: 'fldmfkmfkm dfdf dfdfdfdf dlf,dlf 22222222kfфььфлжждфвдфвжфУЭЖВЭЖйвms',
		category: categoriesMock[1],
		discount: 63,
		id: 2,
		amount: 2,
		remains: 3,

		images: ['', ''],
		slug: 'www',
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
	},
	{
		price: 12300,
		checked: true,
		title: 'fldmfkmfk fd,fmdkfod [dkfфвжфювжфвжюйцвюцэвю' + 'эв' + 'эйв' + 'цйвdf dflkdf m4444444444kfms',
		category: categoriesMock[1],
		discount: 49,
		id: 3,
		remains: 6,
		amount: 3,
		images: ['', ''],

		slug: 'www',
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
	},
	{
		price: 12300,
		checked: false,
		title: 'fldmfkmfk fd,fmdkfod [dkfфвжфювжфвжюйцвюцэвю' + 'эв' + 'эйв' + 'цйвdf dflkdf m4444444444kfms',
		category: categoriesMock[1],
		discount: 49,
		id: 4,
		remains: 6,
		amount: 3,
		images: ['', ''],

		slug: 'www',
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
	},
	{
		price: 12300,
		checked: true,
		title: 'fldmfkmfk fd,fmdkfod [dkfфвжфювжфвжюйцвюцэвю' + 'эв' + 'эйв' + 'цйвdf dflkdf m4444444444kfms',
		category: categoriesMock[1],
		discount: 49,
		id: 5,
		remains: 6,
		amount: 3,
		images: ['', ''],

		slug: 'www',
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
	},
	{
		price: 12300,
		checked: false,
		title: 'fldmfkmfk fd,fmdkfod [dkfфвжфювжфвжюйцвюцэвю' + 'эв' + 'эйв' + 'цйвdf dflkdf m4444444444kfms',
		category: categoriesMock[1],
		discount: 49,
		id: 6,
		remains: 6,
		amount: 3,
		images: ['', ''],

		slug: 'www',
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		characteristics: {
			id: 1,
			about: [
				{ property: 'Цвет', value: 'белый' },
				{ property: 'Вес', value: 0.7 },
			],
		},
	},
]
