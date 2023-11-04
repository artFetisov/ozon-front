import { FC } from 'react'
import logo from '../../../assets/images/logo-ozon.png'
import styles from './Selection.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { getPriceWithDiscount, getPriceWithWhitespace } from '@/utils/price/getCorrectPrice'
import { IProduct } from '@/types/product/product.types'

interface ISelectionItem {
	item: IProduct
	size: number
}

export const SelectionItem: FC<ISelectionItem> = ({ item, size }) => {


	// установить библиотеку cn

	return <div className={styles.item} style={{ width: size }}>
		<Link href={`/product/${item.title}`}>
			<Image src={logo} alt={'logo item'} width={size} height={size} />
			<div className={styles.info}>
				<div className={styles.priceBox}>
					<span className={cn(styles.priceWithDiscount, {
						[styles.green]: item.discount > 49,
						[styles.red]: item.discount < 50,
					})}>{getPriceWithWhitespace(getPriceWithDiscount(item.price, item.discount))} Р</span>
					<span className={styles.price}>{getPriceWithWhitespace(item.price)} P</span>
					<span className={cn(styles.discount, styles.red)}>-{item.discount}%</span>
				</div>
				<div className={styles.title}>
					<span>{item.title}</span>
				</div>
			</div>
		</Link>
	</div>
}