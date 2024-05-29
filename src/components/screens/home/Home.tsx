'use client'

import { FC, useEffect } from 'react'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { productsMock } from '@/mock/products'
import styles from './Home.module.scss'
import { useActions } from '@/hooks/useActions'
import { categoriesMock, subCategoriesMock, subSubCategoriesMock } from '@/mock/categories'
import { currentAuthUser } from '@/mock/user'
import Image from 'next/image'
import bannerComp from '@/assets/images/2832_200_main_static_desk_11zon_17.webp'
import bannerCompPub from '@/../public/2832_200_main_static_desk_11zon_17.webp'

export const Home: FC = () => {
	const { setCategories, setSubCategories, setSubSubCategories, setUserData } = useActions()

	useEffect(() => {
		setUserData(currentAuthUser)
		setCategories(categoriesMock)
		setSubCategories(subCategoriesMock)
		setSubSubCategories(subSubCategoriesMock)
	})

	return (
		<div className={styles.home}>
			<div className={styles.banner}>
				<div className={styles.imgBox}>
					<Image alt='banner' src={'/2832_200_main_static_desk_11zon_17.webp'} fill />
				</div>
			</div>
			<div className={styles.banner}>
				<div className={styles.imgBox}>
					<Image alt='banner' src={bannerComp} fill />
				</div>
			</div>
			<div className={styles.banner}>
				<div className={styles.imgBox}>
					<Image alt='banner' src={bannerCompPub} fill />
				</div>
			</div>
			<Selection items={productsMock.slice(0, 12)} rowTotalItems={6} headingText={'Лучшие предложения'} />
			<Selection items={productsMock.slice(0, 10)} rowTotalItems={5} headingText={'Вы искали'} />
			<Selection items={productsMock.slice(0, 6)} rowTotalItems={6} headingText={'Рекомендуем для вас'} />
			<Selection items={productsMock.slice(0, 5)} rowTotalItems={5} headingText={'Рекомендуем для вас'} />
		</div>
	)
}
