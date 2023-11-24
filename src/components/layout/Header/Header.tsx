'use client'

import { FC } from 'react'
import styles from './Header.module.scss'
import { Links } from '@/components/layout/Header/Links/Links'
import { SearchBar } from '@/components/ui-kit/search-bar/SearchBar'
import { Button } from '@/components/ui-kit/button/Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../assets/images/logo-ozon.png'
import { CategoryTopRow } from '@/components/ui-kit/category-top-row/CategoryTopRow'
import { useScrollForHeader } from '@/hooks/useScrollForHeader'
import cn from 'classnames'
import { PATHS } from '@/constants/paths'

export const Header: FC = () => {
	const { target, isHideContainer } = useScrollForHeader()

	return <header className={styles.headerContainer}>
		<div className={styles.layout}>
			<div ref={target} className={cn(styles.header, {
				[styles.fixed]: isHideContainer,
			})}>
				<Link href={PATHS.HOME} className={styles.logo}>
					<Image src={logo} height={40} width={128} alt={'logo'} />
				</Link>
				<div className={styles.showCatalogButtonWrapper}>
					<Button variant={'small'} color={'blue'}>
						<svg width={24} height={24} style={{ marginRight: '6px' }}>
							<path fill='currentColor'
										d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 0a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Zm-4-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'></path>
						</svg>
						<span style={{ fontWeight: 500 }}>Каталог</span>
					</Button>
				</div>
				<div className={styles.searchInputBox}>
					<SearchBar />
				</div>
				<Links />
			</div>
			<div className={cn(styles.row)}></div>
			<CategoryTopRow />
		</div>
	</header>
}
