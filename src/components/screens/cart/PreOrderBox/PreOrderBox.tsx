import { FC } from 'react'
import styles from './PreOrderBox.module.scss'
import { Button } from '@/components/ui-kit/button/Button'
import cn from 'classnames'
import {
	getPriceWithWhitespace,
	getItemsTotalPrice,
	getItemsTotalDiscount,
	getItemsTotalPriceWithDiscountAndCard,
	getItemsTotalPriceWithDiscount,
} from '@/utils/price/price'
import { getProductsCartTotal, getProductsTotalWeight } from '@/utils/products/products'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export const PreOrderBox: FC = () => {
	const selectedCartItems = useTypedSelector((state) => state.cart.selectedItems)

	return (
		<div className={styles.toOrderBox}>
			<section>
				<div className={styles.topBox}>
					<Button
						variant={'large'}
						color={'green'}
						disabledP={selectedCartItems.length === 0}
						style={{ cursor: 'default' }}
					>
						Перейти к оформлению
					</Button>
					<div>
						{selectedCartItems.length === 0 ? (
							<Button
								variant={'large'}
								color={'green'}
								disabledP={selectedCartItems.length === 0}
								style={{ cursor: 'default', fontSize: '13px' }}
							>
								Выберите товары, чтобы перейти к оформлению заказа
							</Button>
						) : (
							<span>Доступные способы и время доставки можно выбрать при оформлении заказа</span>
						)}
					</div>
				</div>
				{selectedCartItems.length > 0 && (
					<div className={styles.priceBox}>
						<div className={cn(styles.box, styles.p16)}>
							<span className={styles.heading}>Ваша корзина</span>
							<span className={styles.grey}>
								{getProductsCartTotal(selectedCartItems)} • {getProductsTotalWeight(selectedCartItems).toFixed(2)} кг
							</span>
						</div>
						<div className={cn(styles.box, styles.p12)}>
							<span>Товары ({getProductsCartTotal(selectedCartItems, true)})</span>
							<span style={{ fontWeight: 700 }}>{getPriceWithWhitespace(getItemsTotalPrice(selectedCartItems))} ₽</span>
						</div>
						<div className={cn(styles.box, styles.p12)}>
							<span>Скидка</span>
							<span style={{ fontWeight: 700 }} className={styles.red}>
								- {getPriceWithWhitespace(getItemsTotalDiscount(selectedCartItems))} ₽
							</span>
						</div>
						<div className={cn(styles.box, styles.b7x)}>
							<span>С Ozon Картой</span>
							<span className={styles.green}>
								{getPriceWithWhitespace(getItemsTotalPriceWithDiscountAndCard(selectedCartItems))} ₽
							</span>
						</div>
						<div className={cn(styles.box, styles.b4x)}>
							<span>Без Ozon Карты</span>
							<span>{getPriceWithWhitespace(getItemsTotalPriceWithDiscount(selectedCartItems))} ₽</span>
						</div>
					</div>
				)}
			</section>
		</div>
	)
}
