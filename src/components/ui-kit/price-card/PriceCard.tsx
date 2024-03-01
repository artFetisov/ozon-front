import { FC } from 'react'
import styles from './PriceCard.module.scss'
import { getPriceWithCard, getPriceWithDiscount, getPriceWithWhitespace } from '@/utils/price/price'
import cn from 'classnames'

interface IPriceCard {
	color: 'red' | 'green'
	variant: 'big' | 'small'
	price: number
	discount: number
	amount: number
	isOneProductPrice: boolean
}

export const PriceCard: FC<IPriceCard> = ({ price, discount, amount, color, variant, isOneProductPrice }) => {
	return (
		<div
			className={cn(styles.priceCard, {
				[styles.green]: color === 'green',
				[styles.red]: color === 'red',
				[styles.big]: variant === 'big',
				[styles.small]: variant === 'small',
			})}
		>
			{getPriceWithWhitespace(
				getPriceWithCard(getPriceWithDiscount(price, discount)),
				isOneProductPrice ? undefined : amount
			)}{' '}
			₽
		</div>
	)
}
