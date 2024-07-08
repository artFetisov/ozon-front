import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Admin Panel',
	description: 'Admin Panel',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return <section className='admin-root'>{children}</section>
}
