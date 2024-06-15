'use client'

import { FC, useEffect } from 'react'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { productsMock } from '@/mock/products'
import styles from './Home.module.scss'
import { useActions } from '@/hooks/useActions'
import { categoriesMock, subCategoriesMock, subSubCategoriesMock } from '@/mock/categories'
import Image from 'next/image'
import banner1 from '@/../public/2832_200_main_static_desk_11zon_17.webp'
import banner2 from '@/../public/336_398_x2_ml_do_08.06.webp'
import banner3 from '@/../public/336_398_x2_skidki_nedeli_do_08.06.webp'

export const Home: FC = () => {
	const { setCategories, setSubCategories, setSubSubCategories, authMe } = useActions()

	useEffect(() => {
		const fetchData = async () => {
			await authMe()
		}

		fetchData()

		setCategories(categoriesMock)
		setSubCategories(subCategoriesMock)
		setSubSubCategories(subSubCategoriesMock)
	})

	return (
		<div className={styles.home}>
			<div className={styles.banner}>
				<div className={styles.imgBoxVertical}>
					<Image alt='banner' src={banner2} fill priority={true} />
				</div>
				<div className={styles.imgBoxMiddle}></div>
				<div className={styles.imgBoxVertical}>
					<Image alt='banner' src={banner3} fill priority={true} />
				</div>
			</div>
			<div className={styles.banner}>
				<div className={styles.imgBoxHorizontal}>
					<Image alt='banner' src={banner1} fill priority={true} />
				</div>
			</div>
			<Selection items={productsMock.slice(0, 12)} rowTotalItems={6} headingText={'Лучшие предложения'} />
			<Selection items={productsMock.slice(0, 10)} rowTotalItems={5} headingText={'Вы искали'} />
			<Selection items={productsMock.slice(0, 6)} rowTotalItems={6} headingText={'Рекомендуем для вас'} />
			<Selection items={productsMock.slice(0, 5)} rowTotalItems={5} headingText={'Рекомендуем для вас'} />
		</div>
	)
}
