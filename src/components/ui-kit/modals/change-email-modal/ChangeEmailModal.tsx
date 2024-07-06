import { FC, useState } from 'react'
import styles from './ChangeEmailModal.module.scss'
import { IUser } from '@/types/user/user.types'
import { CloseButton } from '../../close-button/CloseButton'
import { ChangeEmailEntryModal } from './change-email-entry-modal/ChangeEmailEntryModal'
import { ChangeEmailEntryCodeModal } from './change-email-entry-code-modal/ChangeEmailEntryCodeModal'

export type ChangeEmailModalType = 'email' | 'code'

interface IChangeEmailModalProps {
	close: () => void
	userData: IUser
}

export const ChangeEmailModal: FC<IChangeEmailModalProps> = ({ close, userData }) => {
	const [modalType, setModalType] = useState<ChangeEmailModalType>('email')

	const handleToggleModalType = (type: ChangeEmailModalType) => {
		setModalType(type)
	}

	return (
		<div className={styles.changeEmailModal}>
			<CloseButton callback={close} variant='inside' />
			<div className={styles.content}>
				{modalType === 'email' && <ChangeEmailEntryModal onToggle={handleToggleModalType} />}
				{modalType === 'code' && <ChangeEmailEntryCodeModal onToggle={handleToggleModalType} close={close} />}
			</div>
		</div>
	)
}
