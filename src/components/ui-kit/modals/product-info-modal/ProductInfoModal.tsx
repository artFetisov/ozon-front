import { FC } from 'react'
import styles from './ProductInfoModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { Button } from '../../button/Button'

interface IProductInfoModalProps {
	close: () => void
}

export const ProductInfoModal: FC<IProductInfoModalProps> = ({ close }) => {
	return (
		<div className={styles.productInfoModal}>
			<CloseButton variant='inside' callback={close} />
			<div className={styles.content}>
				<div className={styles.heading}>Уникальные цены с Ozon Картой</div>
				<div className={styles.text}>
					Выберите Ozon Карту способом оплаты и получите дополнительную скидку на покупки.
				</div>
				<Button variant='middle' color='lightBlue' onClick={close}>
					Понятно
				</Button>
			</div>
		</div>
	)
}
