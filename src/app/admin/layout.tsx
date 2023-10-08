import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Admin Panel',
	description: 'Admin Panel',
}

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <section>{children}</section>
}
