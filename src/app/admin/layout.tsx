import type { Metadata } from 'next'
import React from 'react'
import { PATHS } from '@/constants/paths'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Admin Panel',
	description: 'Admin Panel',
}

const links: { path: string, title: string }[] = [
	{ path: PATHS.ADMIN, title: 'Статистика' },
	{ path: PATHS.ADMIN_CATEGORIES, title: 'Категории' },
	{ path: PATHS.ADMIN_PRODUCTS, title: 'Товары' },
]

export default function AdminLayout({
																			children,
																		}: {
	children: React.ReactNode
}) {
	return <section>
		<div>
			{links.map((l) => {
				return <Link href={l.path} key={l.path + l.title}>
					{l.title}
				</Link>
			})}
		</div>
		{children}</section>
}
