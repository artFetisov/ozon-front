import { IProduct } from './../types/product/product.types'
import { categoriesMock } from './categories'
import { mockFeedbacks } from './feedbacks'
import { productImagesMock } from './galleryImages'
import { mockQuestions } from './questions'

export const ordersMock: IProduct[] = [
	{
		price: 999,
		questions: mockQuestions,
		isLiked: true,
		cartQuantity: 0,
		brandLogo: 'aaa',
		title: 'fldmfk mfkmkfs ssssss smsms;f;ekf;efef',
		category: categoriesMock[1],
		discount: 33,
		images: productImagesMock,
		slug: 'mkmk',
		rating: {
			id: 0,
			averageValue: 4,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Вес', value: 0.7 },
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		variants: [
			{
				id: 0,
				title: 'Размер жопы',
				variants: [
					{ id: 0, title: 'Огромная' },
					{ id: 1, title: 'Нормальная' },
				],
			},
			{
				id: 0,
				title: 'Количество',
				variants: [
					{ id: 0, title: 60 },
					{ id: 1, title: 120 },
					{ id: 2, title: 180 },
				],
			},
			{
				id: 1,
				title: 'Размер крышки',
				variants: [
					{ id: 0, title: 24 },
					{ id: 1, title: 26 },
					{ id: 2, title: 28 },
				],
			},
		],
		id: 0,
		article: 2,
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		remains: 20,
		amount: 2,
		description: 'amaklnaklkldamk',
		brand: 'adidas',
	},
	{
		price: 741,
		isLiked: false,
		cartQuantity: 2,
		title: 'fldmfkmfk m1111111kf msefe,f;elflf[f df;d;fd;f',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 53,
		slug: 'mkmk',
		rating: {
			id: 0,
			averageValue: 4,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Вес', value: 0.7 },
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		variants: [
			{
				id: 0,
				title: 'Размер жопы',
				variants: [
					{ id: 0, title: 'Огромная' },
					{ id: 1, title: 'Нормальная' },
				],
			},
			{
				id: 0,
				title: 'Количество',
				variants: [
					{ id: 0, title: 60 },
					{ id: 1, title: 120 },
					{ id: 2, title: 180 },
				],
			},
			{
				id: 1,
				title: 'Размер крышки',
				variants: [
					{ id: 0, title: 24 },
					{ id: 1, title: 26 },
					{ id: 2, title: 28 },
				],
			},
		],
		id: 1,
		article: 2,
		seller: {
			id: 1,
			title: 'Sportmaster',
			description: 'edadd',
			logo: 'sdds',
			rating: 4,
		},
		remains: 20,
		amount: 2,
		description: 'amaklnaklkldamk',
		brand: 'adidas',
	},
]
