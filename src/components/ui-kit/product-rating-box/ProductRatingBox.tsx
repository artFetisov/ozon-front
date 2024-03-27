import { FC } from 'react'
import styles from './ProductRatingBox.module.scss'
import { IRating } from '@/types/rating/rating.types'

interface IProductRatingBoxProps {
	rating: IRating
}

export const ProductRatingBox: FC<IProductRatingBoxProps> = ({ rating }) => {
	return <div></div>
}
