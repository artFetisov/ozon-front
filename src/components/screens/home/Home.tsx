'use client'

import { FC, useEffect } from 'react'
import { Selection } from '@/components/ui-kit/selection/Selection'
import { productsMock } from '@/mock/products'
import styles from './Home.module.scss'
import { useActions } from '@/hooks/useActions'
import { categoriesMock, subCategoriesMock, subSubCategoriesMock } from '@/mock/categories'
import { currentAuthUser } from '@/mock/user'

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
			<Selection items={productsMock.slice(0, 12)} rowTotalItems={6} headingText={'Лучшие предложения'} />
			<Selection items={productsMock.slice(0, 10)} rowTotalItems={5} headingText={'Вы искали'} />
			<Selection items={productsMock.slice(0, 6)} rowTotalItems={6} headingText={'Рекомендуем для вас'} />
			<Selection items={productsMock.slice(0, 5)} rowTotalItems={5} headingText={'Рекомендуем для вас'} />
		</div>
	)
}
