export interface IFooterLinks {
	title: string
	links: IFooterLink[]
}

export interface IFooterLink {
	id: number
	title: string
	link: string
}

export const footerLinksOne: IFooterLinks = {
	title: 'Ozon интернет-магазин',
	links: [
		{ id: 0, title: 'Об Ozon / About Ozon', link: '/' },
		{ id: 0, title: 'Вакансии', link: '/' },
		{ id: 0, title: 'Стать курьером', link: '/' },
		{ id: 0, title: 'Бренд Ozon', link: '/' },
		{ id: 0, title: 'Реквизиты', link: '/' },
		{ id: 0, title: 'Информация для СМИ', link: '/' },
		{ id: 0, title: 'Арт-проект Ozon Ballon', link: '/' },
		{ id: 0, title: 'Ozon заботы', link: '/' },
		{ id: 0, title: 'Ozon Беларусь', link: '/' },
		{ id: 0, title: 'Ozon Казахстан', link: '/' },
		{ id: 0, title: 'Мобильное приложение', link: '/' },
	],
}


export const footerLinksTwo: IFooterLinks = {
	title: 'Зарабатывать с Ozon',
	links: [
		{ id: 0, title: 'Стать продавцом', link: '/' },
		{ id: 0, title: 'Стать поставщиком Ozon', link: '/' },
		{ id: 0, title: 'Открыть пункт выдачи Ozon', link: '/' },
		{ id: 0, title: 'Установить постамат Ozon Box', link: '/' },
		{ id: 0, title: 'Ozon Global - Selling on Ozon', link: '/' },
		{ id: 0, title: 'Ozon profit', link: '/' },
	],
}


export const footerLinksThree: IFooterLinks = {
	title: 'Покупать как компания',
	links: [
		{ id: 0, title: 'Ozon для бизнеса', link: '/' },
		{ id: 0, title: 'Добавить компанию', link: '/' },
		{ id: 0, title: 'Мои компании', link: '/' },
		{ id: 0, title: 'Подарочные сертификаты ', link: '/' },
	],
}


export const footerLinksFour: IFooterLinks = {
	title: 'Помощь',
	links: [
		{ id: 0, title: 'Как сделать заказ', link: '/' },
		{ id: 0, title: 'Оплата', link: '/' },
		{ id: 0, title: 'Доставка', link: '/' },
		{ id: 0, title: 'Возвратов товароа', link: '/' },
		{ id: 0, title: 'Контакты', link: '/' },
		{ id: 0, title: 'Безопасность', link: '/' },
		{ id: 0, title: 'Условия обработки данных', link: '/' },
		{ id: 0, title: 'Горячая линия комплаенс', link: '/' },
	],
}


