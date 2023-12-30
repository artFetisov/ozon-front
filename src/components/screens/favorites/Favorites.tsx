'use client'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { favoritesMock } from '@/mock/favorites'
import { FC, useEffect } from 'react'

export const Favorites: FC = () => {
	const favoritesProducts = useTypedSelector((state) => state.favorites.favoritesProducts)

	const { setFavoritesProducts } = useActions()

	useEffect(() => {
		setFavoritesProducts(favoritesMock)
	}, [])

	return (
		<div>
			{favoritesProducts.map((p) => (
				<div key={p.id}>
					{p.title} --- {p.amount}
				</div>
			))}
		</div>
	)
}
