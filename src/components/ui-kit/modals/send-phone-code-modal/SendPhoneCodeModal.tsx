import { FC } from 'react'
import styles from './SendPhoneCodeModal.module.scss'
import { CloseButton } from '@/components/ui-kit/close-button/CloseButton'
import Image from 'next/image'
import { Button } from '../../button/Button'

interface ISendPhoneCodeModalProps {
	close: () => void
}

export const SendPhoneCodeModal: FC<ISendPhoneCodeModalProps> = ({ close }) => {
	return (
		<div className={styles.sendCodeModal}>
			<CloseButton callback={close} variant='inside' />
			<div className={styles.modalContent}>
				<div className={styles.logo}>
					<Image alt='logo' src={'https://ir-2.ozone.ru/graphics/ozon-id-v2.svg'} fill />
				</div>
				<div className={styles.heading}>Введите номер телефона</div>
				<div className={styles.text}>Мы отправим код на почту или в СМС</div>
				<div className={styles.inputBox}>
					<label className={styles.input}>
						<div className={styles.innerWrapper}>
							<input type='number' autoFocus />
							<p>999 999 99 99</p>
						</div>
					</label>
					<div className={styles.code}>
						<span>+</span>7
					</div>
				</div>
				<div>
					<Button variant='large' color='blue' isFullWidth>
						Войти
					</Button>
				</div>
			</div>
		</div>
	)
}
