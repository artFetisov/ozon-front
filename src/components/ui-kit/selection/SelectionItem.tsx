import { FC } from 'react'
import logo from '../../../assets/images/logo-ozon.png'
import styles from './Selection.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { getPriceWithDiscount, getPriceWithWhitespace } from '@/utils/price/price'
import { IProduct } from '@/types/product/product.types'
import { PATHS } from '@/constants/paths'

interface ISelectionItem {
	item: IProduct
	size: number
}

export const SelectionItem: FC<ISelectionItem> = ({ item, size }) => {
	return (
		<div className={styles.item} style={{ width: `${size}px` }}>
			<Link href={`${PATHS.PRODUCT}${item.title}/${item.id}`}>
				<Image src={logo} alt={'logo item'} width={size} height={size} />
				<div className={styles.info}>
					<div className={styles.priceBox}>
						<span
							className={cn(styles.priceWithDiscount, {
								[styles.green]: item.discount > 49,
								[styles.red]: item.discount < 50,
							})}
						>
							{getPriceWithWhitespace(getPriceWithDiscount(item.price, item.discount))} ₽
						</span>
						<span className={styles.price}>{getPriceWithWhitespace(item.price)} ₽</span>
						<span className={cn(styles.discount, styles.red)}>-{item.discount}%</span>
					</div>
					<div className={styles.title}>
						<span>{item.title}</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
