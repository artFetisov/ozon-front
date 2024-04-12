import { IProduct } from '@/types/product/product.types'
import { categoriesMock } from './categories'
import { mockFeedbacks } from './feedbacks'
import { productImagesMock } from './galleryImages'
import { mockQuestions } from './questions'

export const productMockDescription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat sed, sequi iste aliquid maiores quibusdam
aperiam autem nesciunt voluptatem cum dolorem quam odio. Blanditiis optio rerum obcaecati facilis culpa. Lorem
ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat sed, sequi iste aliquid maiores quibusdam
aperiam autem nesciunt voluptatem cum dolorem quam odio. Blanditiis optio rerum obcaecati facilis culpa. Lorem
ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat sed, sequi iste aliquid maiores quibusdam
aperiam autem nesciunt voluptatem cum dolorem quam odio. Blanditiis optio rerum obcaecati facilis culpa.
Сковорода гриль Monolit-28G - это высококачественная профессиональная посуда, которая станет отличной
альтернативой электрогрилю, барбекю и уличному мангалу! Теперь приготовление любимых блюд будет намного проще
и быстрее! С нашей сковородкой вы сможете без труда приготовить стейки из рыбы и мяса, овощи, грибы или
сочного цыпленка табака и порадовать всю семью! Monolit-28G идеально подходит для жарки и запекания. Благодаря
инновационному 5-слойному антипригарному покрытию с керамической крошкой MEGASTONE PRO-5
<br></br>
от DYFLON, вы сможете сделать любое блюдо без добавления масла или жира! Во время приготовления ингредиенты
практически не соприкасаются с раскаленной поверхностью, что позволяет жарить их без добавления масла, а
уникальное распределение жара от стенок обеспечивает быстрое приготовление. Это станет полезным инструментом
для тех, кто следит за своим здоровьем или находится на диете, ведь блюда на гриле содержат меньше калорий.
Изделие изготовлено из высококачественного кованого алюминия и имеет термостойкое внешнее покрытие.
Антипригарное покрытие DYFLON устойчиво к царапинам и механическим повреждениям, что позволит посуде
прослужить вам не один год и сохранить свой великолепный первозданный вид. Подходит для газовых,
электрических, индукционных и керамических плит. Квадратная сковорода имеет высокие бортики и утолщенное
широкое рифленое дно, что обеспечивает равномерное распределение тепла и сохранение высокой температуры.
Наличие носиков по бокам позволяет аккуратно слить лишнюю жидкость во время готовки<br></br>
<br></br>. Диаметр изделия - 28 см (крышка в комплект не входит). Универсальная алюминиевая сковородка гриль
имеет эргономичной бакелитовой ручкой с покрытием , которая удобно лежит в руке и не нагревается во время
приготовления. Такое покрытие намного удобнее и безопаснее, чем обычный пластик. Большая сковорода гриль
Polaris Monolit-28G станет незаменимым помощником на вашей кухне и позволит вам наслаждаться вкусными и
здоровыми блюдами! Комплектация<br></br>
<br></br> Сковорода-гриль Характеристики Общие Бренд Polaris Гарантийный срок 2 года Страна-изготовитель Китай
Габариты и вес Размер крышки, см 28 Диаметр дна, см 21.7 Толщина стенок, мм 3.5 Толщина дна, мм 3.5 Вес
товара, г 1170 Комплектация Вид ручки с фиксированной ручкой Крышка без крышки Материал Антипригарное покрытие
Да Материал Алюминий Основные Особенности посуды: Ненагревающиеся ручки, Можно мыть в посудомойке,
Жаропрочная, Профессиональная посуда Дополнительные Тип Сковорода-гриль Форма сковороды Квадрат Высота стенки,
см 4 Упаковка Подарочная упаковка Цвет Черный Артикул 11004895 Вид выпуска т<br></br>
овара Фабричное производство Совместимые плиты: Для газовых плит, Для стеклокерамических плит, Для
индукционных плит, Для электрических плит, Для галогеновых конфорок Вид блюда: Блины, Вафли, Десерт, Жаркое,
Запеканка, Кекс, Кулич, Лепёшка, Овощи, Маффины, Макаруны, Мясо, Паэлья, Печенье, Пирог, Пицца, Плов, Рыба,
Птица, Суп, Торт, Фондю, Хлеб, Яичница Информация о технических характеристиках, комплекте поставки, стране
изготовления, внешнем виде и`

export const productsMock: IProduct[] = [
	{
		price: 999,
		questions: mockQuestions,
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
	{
		price: 1500,
		title: 'fldmfkmfkm dfdf dfdfdfdf dlf,dlf 22222222kfms',
		category: categoriesMock[1],
		discount: 63,
		slug: 'mkmk',
		questions: mockQuestions,
		brandLogo: 'aaa',
		id: 2,
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		article: 2,
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
		price: 12300,
		title: 'fldmfkmfk fd,fmdkfod [dkfdf dflkdf m4444444444kfms',
		category: categoriesMock[1],
		discount: 49,
		slug: 'mkmk',
		questions: mockQuestions,
		brandLogo: 'aaa',
		feedbacks: mockFeedbacks,
		id: 3,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		rating: {
			id: 0,
			averageValue: 4.7,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
		article: 2,
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
		price: 101500,
		title: 'fldmfkmfk df,dlfld d;lfmdlfl d;lfmdl;f dl;fmdlfm5555555555kfms',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 16,
		feedbacks: mockFeedbacks,
		slug: 'mkmk',
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		id: 4,
		rating: {
			id: 0,
			averageValue: 3.7,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
		article: 2,
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
		price: 10,
		title: 'fldmfkmfk ldfdf ddf,df dfdfdfm5555555555kfms',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 71,
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
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
		id: 5,
		rating: {
			id: 0,
			averageValue: 2.4,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
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
		price: 999,
		title: 'fldmfk mfkmkfs ssssss smsms;f;ekf;efef',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 33,
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		id: 6,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		article: 2,
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
		rating: {
			id: 0,
			averageValue: 1,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
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
		title: 'fldmfkmfk m1111111kf msefe,f;elflf[f df;d;fd;f',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 53,
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		id: 7,
		article: 2,
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
		rating: {
			id: 0,
			averageValue: 3.2,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
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
		price: 1500,
		title: 'fldmfkmfkm dfdf dfdfdfdf dlf,dlf 22222222kfms',
		category: categoriesMock[1],
		discount: 63,
		questions: mockQuestions,
		brandLogo: 'aaa',
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		rating: {
			id: 0,
			averageValue: 5,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
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
		id: 8,
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
		price: 12300,
		title: 'fldmfkmfk fd,fmdkfod [dkfdf dflkdf m4444444444kfms',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 49,
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		id: 9,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		article: 2,
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
		rating: {
			id: 0,
			averageValue: 2.4,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
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
		price: 101500,
		title: 'fldmfkmfk df,dlfld d;lfmdlfl d;lfmdl;f dl;fmdlfm5555555555kfms',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 16,
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		id: 10,
		article: 2,
		characteristics: {
			id: 1,
			about: [
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
		rating: {
			id: 0,
			averageValue: 3,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
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
		price: 10,
		title: 'fldmfkmfk ldfdf ddf,df dfdfdfm5555555555kfms',
		category: categoriesMock[1],
		questions: mockQuestions,
		brandLogo: 'aaa',
		discount: 71,
		slug: 'mkmk',
		feedbacks: mockFeedbacks,
		characteristics: {
			id: 1,
			about: [
				{ property: 'Мощность, Вт', value: 900 },
				{ property: 'Емкости в комплекте', value: 'Измельчитель, Дорожная бутылка' },
				{ property: 'Вид насадки', value: 'Венчик, Нож-измельчитель, Шинковка' },
				{ property: 'Автор', value: 'Фило Владстон Феррейра' },
				{ property: 'Издательство', value: 'Питер' },
			],
		},
		id: 11,
		rating: {
			id: 0,
			averageValue: 2,
			one: { value: 1, totalCount: 13 },
			two: { value: 2, totalCount: 26 },
			three: { value: 3, totalCount: 1 },
			four: { value: 4, totalCount: 14 },
			five: { value: 1, totalCount: 99 },
		},
		images: productImagesMock,
		article: 2,
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
