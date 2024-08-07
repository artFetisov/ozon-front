import '../assets/styles/globals.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'
import StoreProvider from '@/store/StoreProvider'
import { NoticeBanner } from '@/components/ui-kit/notice-banner/NoticeBanner'
import { Toastr } from '@/components/ui-kit/toastr/Toastr'
import { Portal } from '@/components/shared/portal/Portal'

const inter = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={inter.className}>
			<body>
				<StoreProvider>
					<div className='root'>{children}</div>
					<div id='portal'></div>
					<Portal>
						<Toastr />
					</Portal>
					<Portal>
						<NoticeBanner />
					</Portal>
				</StoreProvider>
			</body>
		</html>
	)
}
