import { FC, useState } from 'react'
import { CloseButton } from '../../close-button/CloseButton'
import styles from './ChangePhoneModal.module.scss'
import { IUser } from '@/types/user/user.types'
import { ChangePhoneEntryModal } from './change-phone-entry-modal/ChangePhoneEntryModal'

export type ChangePhoneModalType = 'phone' | 'code'

interface IChangePhoneModalProps {
	close: () => void
	userData: IUser
}

export const ChangePhoneModal: FC<IChangePhoneModalProps> = ({ close, userData }) => {
	const [modalType, setModalType] = useState<ChangePhoneModalType>('phone')

	const handleToggleModalType = (type: ChangePhoneModalType) => {
		setModalType(type)
	}

	return (
		<div className={styles.changePhoneModal}>
			<CloseButton callback={close} variant='inside' />
			<div className={styles.content}>
				{modalType === 'phone' && <ChangePhoneEntryModal onToggle={handleToggleModalType} />}
			</div>
		</div>
	)
}
