import { PATHS } from '@/constants/paths'

export const adminNavigationLinks: { path: string; title: string }[] = [
	{ path: PATHS.ADMIN, title: 'Статистика' },
	{ path: PATHS.ADMIN_USERS, title: 'Пользователи' },
	{ path: PATHS.ADMIN_CATEGORIES, title: 'Категории' },
	{ path: PATHS.ADMIN_PRODUCTS, title: 'Товары' },
]
