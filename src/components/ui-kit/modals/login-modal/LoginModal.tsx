import { FC, useState } from 'react'
import styles from './LoginModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { SendPhoneCodeModal } from './send-phone-code-modal/SendPhoneCodeModal'
import { PasswordEntryModal } from './password-entry-modal/PasswordEntryModal'
import { SendEmailModal } from './send-email-modal/SendEmailModal'
import Image from 'next/image'

export type TypeCurrentModal = 'phone' | 'password' | 'byEmail'

interface ILoginModalProps {
	close: () => void
}

export const LoginModal: FC<ILoginModalProps> = ({ close }) => {
	const [currentModal, setCurrentModal] = useState<TypeCurrentModal>('phone')

	const handleToggleModal = (type: TypeCurrentModal) => {
		setCurrentModal(type)
	}

	return (
		<div className={styles.loginModal}>
			<CloseButton callback={close} variant='inside' />
			<div className={styles.modalContent}>
				<div className={styles.logo}>
					<Image alt='logo' src={'https://ir-2.ozone.ru/graphics/ozon-id-v2.svg'} fill />
				</div>
				{currentModal === 'phone' && <SendPhoneCodeModal onToggle={handleToggleModal} />}
				{currentModal === 'password' && <PasswordEntryModal onToggle={handleToggleModal} />}
				{currentModal === 'byEmail' && <SendEmailModal onToggle={handleToggleModal} />}
			</div>
		</div>
	)
}
