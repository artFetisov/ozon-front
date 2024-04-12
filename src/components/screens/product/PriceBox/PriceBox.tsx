import { FC } from 'react'
import styles from './PriceBox.module.scss'
import { IProduct } from '@/types/product/product.types'
import { Button } from '@/components/ui-kit/button/Button'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { ProductInfoModal } from '@/components/ui-kit/modals/product-info-modal/ProductInfoModal'
import { PriceCard } from '@/components/ui-kit/price-card/PriceCard'
import { useModal } from '@/hooks/useModal'
import { getPriceWithWhitespace, getPriceWithDiscount } from '@/utils/price/price'

interface IPriceBoxProps {
	currentProduct: IProduct
}

export const PriceBox: FC<IPriceBoxProps> = ({ currentProduct }) => {
	const { isOpenModal, openModal, closeModal } = useModal()
	const handleShowModal = () => {
		openModal()
	}

	return (
		<div className={styles.priceBox}>
			{isOpenModal && (
				<LayoutModal variant='dark' close={closeModal} Content={<ProductInfoModal close={closeModal} />} />
			)}
			<div className={styles.withCard} onClick={handleShowModal}>
				<PriceCard
					color='green'
					variant='big'
					amount={currentProduct?.amount as number}
					price={currentProduct?.price as number}
					discount={currentProduct?.discount as number}
					isOneProductPrice
				/>
				<span>с Ozon картой</span>
				<svg width={16} height={16}>
					<path
						fill='currentColor'
						d='M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8z'
					></path>
				</svg>
			</div>

			<div className={styles.withoutCard}>
				<div className={styles.price}>
					<span className={styles.withDisc}>
						{getPriceWithWhitespace(
							getPriceWithDiscount(currentProduct?.price as number, currentProduct?.discount as number)
						)}{' '}
						₽
					</span>
					<span className={styles.withoutDisc}>{getPriceWithWhitespace(currentProduct?.price as number)} ₽</span>
				</div>
				<div className={styles.text}>без Ozon карты</div>
			</div>
			<div className={styles.btnsBox}>
				<Button color='blue' variant='large'>
					Добавить в корзину
				</Button>
				<Button color='lightBlue' variant='large' style={{ width: '56px' }} isIcon>
					<svg width={24} height={24}>
						<path
							fill='currentColor'
							d='M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.5 21.5 0 0 0 12 19.91a21.6 21.6 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5m5 17c-.316-.02-.56-.147-.848-.278a23.5 23.5 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.18 6.18 0 0 1 5 2.568A6.18 6.18 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.6 23.6 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278'
						></path>
					</svg>
				</Button>
			</div>
			<div className={styles.delivery}>
				<span>Доставка</span>
				<span style={{ fontWeight: 500 }}>12 марта</span>
			</div>
		</div>
	)
}
