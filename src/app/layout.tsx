import '../assets/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import StoreProvider from '@/store/StoreProvider'
import { CategoriesCatalog } from '@/components/screens/home/CategoriesCatalog/CategoriesCatalog'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={inter.className}>
			<body>
				<StoreProvider>
					<div className='root'>
						<Header />
						<CategoriesCatalog />
						<div className={'root-layout'}>{children}</div>
						<Footer />
					</div>
				</StoreProvider>
			</body>
		</html>
	)
}
