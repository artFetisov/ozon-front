import { FC, useState } from 'react'
import styles from './LoginModal.module.scss'
import { CloseButton } from '../../close-button/CloseButton'
import { PhonePasswordEntryModal } from './phone-password-entry-modal/PhonePasswordEntryModal'
import { SendEmailModal } from './send-email-modal/SendEmailModal'
import Image from 'next/image'
import { EmailPasswordEntryModal } from './email-password-entry-modal/EmailPasswordEntryModal'
import { SendPhoneModal } from './send-phone-modal/SendPhoneModal'

export type TypeCurrentModal = 'enterPhone' | 'enterPasswordByPhone' | 'enterEmail' | 'enterPasswordByEmail'

interface ILoginModalProps {
	close: () => void
}

export const LoginModal: FC<ILoginModalProps> = ({ close }) => {
	const [currentModal, setCurrentModal] = useState<TypeCurrentModal>('enterPhone')

	const handleToggleModal = (type: TypeCurrentModal) => {
		setCurrentModal(type)
	}

	const handleCloseModal = () => {
		close()
	}

	return (
		<div className={styles.loginModal}>
			<CloseButton callback={handleCloseModal} variant='inside' />
			<div className={styles.modalContent}>
				<div className={styles.logo}>
					<Image alt='logo' src={'https://ir-2.ozone.ru/graphics/ozon-id-v2.svg'} fill />
				</div>
				{currentModal === 'enterPhone' && <SendPhoneModal onToggle={handleToggleModal} />}
				{currentModal === 'enterPasswordByPhone' && (
					<PhonePasswordEntryModal
						onToggle={handleToggleModal}
						close={handleCloseModal}
						phoneNumber='+7 987 508 53 36'
					/>
				)}
				{currentModal === 'enterEmail' && <SendEmailModal onToggle={handleToggleModal} />}
				{currentModal === 'enterPasswordByEmail' && (
					<EmailPasswordEntryModal onToggle={handleToggleModal} close={handleCloseModal} />
				)}
			</div>
		</div>
	)
}
