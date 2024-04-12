import { FC, useState } from 'react'
import styles from './PriceBox.module.scss'
import { IProduct } from '@/types/product/product.types'
import { Button } from '@/components/ui-kit/button/Button'
import { LayoutModal } from '@/components/ui-kit/modals/LayoutModal'
import { ProductInfoModal } from '@/components/ui-kit/modals/product-info-modal/ProductInfoModal'
import { PriceCard } from '@/components/ui-kit/price-card/PriceCard'
import { useModal } from '@/hooks/useModal'
import { getPriceWithWhitespace, getPriceWithDiscount } from '@/utils/price/price'
import { CartQuantityButtonGroup } from '@/components/shared/cart-quantity-button-group/CartQuantityButtonGroup'

interface IPriceBoxProps {
	currentProduct: IProduct
}

export const PriceBox: FC<IPriceBoxProps> = ({ currentProduct }) => {
	const [cartQuantity, setCartQuantity] = useState(0)

	const handlePlusCartQuantity = (num: number) => {
		setCartQuantity(num)
	}

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
				<CartQuantityButtonGroup setCartQuantity={handlePlusCartQuantity} cartQuantity={cartQuantity} />
			</div>

			<div className={styles.delivery}>
				<span>Доставка</span>
				<span>12 марта</span>
			</div>
		</div>
	)
}
